import { writeFileSync } from 'node:fs';

function meta(html, name) {
  const re1 = new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`, 'i');
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["']`, 'i');
  return (html.match(re1) || html.match(re2))?.[1]?.trim();
}

function decodeEntities(s) {
  if (!s) return s;
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

const sitemapXml = await fetch('https://islehacks.com/sitemap.xml', {
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SEO-audit/1.0)' },
}).then((r) => r.text());

const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
const unique = [...new Set(locs)];

const out = {};

for (const url of unique) {
  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SEO-audit/1.0)' },
      redirect: 'follow',
    });
    const html = await r.text();
    const pathname = new URL(url).pathname;
    out[pathname] = {
      status: r.status,
      title: decodeEntities(html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()),
      description: decodeEntities(meta(html, 'description')),
      keywords: decodeEntities(meta(html, 'keywords')),
    };
  } catch (e) {
    out[url] = { error: String(e) };
  }
}

writeFileSync('scripts/live-seo-snapshot.json', JSON.stringify(out, null, 2));

const withKw = Object.values(out).filter((e) => e.keywords).length;
console.log(`Wrote ${Object.keys(out).length} entries (${withKw} with keywords) to scripts/live-seo-snapshot.json`);
