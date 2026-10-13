import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function resolveSitemapDir() {
  const candidates = [path.join(root, 'dist', 'client'), path.join(root, 'dist')];
  for (const dir of candidates) {
    if (fs.existsSync(path.join(dir, 'sitemap-0.xml'))) return dir;
  }
  for (const dir of candidates) {
    if (!fs.existsSync(dir)) continue;
    const shard = fs.readdirSync(dir).find((name) => /^sitemap-\d+\.xml$/.test(name));
    if (shard) return dir;
  }
  for (const dir of candidates) {
    if (fs.existsSync(path.join(dir, 'sitemap-index.xml'))) return dir;
  }
  return null;
}

function dateOnly(value) {
  const match = String(value).match(/\d{4}-\d{2}-\d{2}/);
  return match ? match[0] : new Date().toISOString().slice(0, 10);
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

const dist = resolveSitemapDir();
if (!dist) {
  console.error('finalize-sitemap: sitemap-0.xml not found in dist/ or dist/client/ — run astro build first.');
  process.exit(1);
}

const shards = fs
  .readdirSync(dist)
  .filter((name) => /^sitemap-\d+\.xml$/.test(name))
  .sort();
const source = shards.length > 0 ? path.join(dist, shards[0]) : path.join(dist, 'sitemap-0.xml');

if (!fs.existsSync(source)) {
  console.error(`finalize-sitemap: ${path.relative(root, source)} not found — run astro build first.`);
  process.exit(1);
}

const raw = fs.readFileSync(source, 'utf8');
const entries = [...raw.matchAll(/<url>\s*<loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g)].map((match) => {
  const loc = match[1].trim();
  const body = match[2];
  const lastmod = dateOnly(body.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? '');
  const changefreq = body.match(/<changefreq>([^<]+)<\/changefreq>/)?.[1]?.trim() ?? 'monthly';
  const priority = body.match(/<priority>([^<]+)<\/priority>/)?.[1]?.trim() ?? '0.6';
  return { loc, lastmod, changefreq, priority };
});

if (entries.length === 0) {
  console.error('finalize-sitemap: sitemap shard contains no URLs.');
  process.exit(1);
}

const urlBlocks = entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${escapeXml(entry.changefreq)}</changefreq>
    <priority>${escapeXml(entry.priority)}</priority>
  </url>`,
  )
  .join('\n');

const formatted = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks}
</urlset>
`;

const relDist = path.relative(root, dist).replaceAll('\\', '/');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), formatted, 'utf8');

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://islehacks.org/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(dist, 'sitemap-index.xml'), indexXml, 'utf8');
fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), formatted, 'utf8');

console.log(`Sitemap finalized: ${entries.length} URLs → ${relDist}/sitemap.xml`);
