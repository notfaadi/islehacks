import { readFileSync, writeFileSync } from 'node:fs';

const snapshot = JSON.parse(readFileSync('scripts/live-seo-snapshot.json', 'utf8'));

const SITE_KEYWORDS =
  'the isle cheat,the isle esp,the isle aimbot,the isle wallhack,the isle hack,the isle hacks,undetected the isle cheat,the isle hacks 2026,isle hacks,the isle software,the isle overlay,the isle evrima hacks';

const KEYWORD_PATHS = new Set(['/', '/store/', '/features/', '/preview/', '/status/', '/setup/', '/faq/']);

const skip = new Set(['/search/', '/forum/guidelines/']);

const entries = Object.entries(snapshot)
  .filter(([path, meta]) => meta.status === 200 && meta.title && !meta.title.startsWith('Redirecting'))
  .filter(([path]) => !skip.has(path))
  .map(([path, meta]) => {
    const keywords = meta.keywords || (KEYWORD_PATHS.has(path) ? SITE_KEYWORDS : undefined);
    return { path, title: meta.title, description: meta.description, keywords };
  })
  .sort((a, b) => a.path.localeCompare(b.path));

const lines = entries.map(({ path, title, description, keywords }) => {
  const kw = keywords ? `\n    keywords: ${JSON.stringify(keywords)},` : '';
  return `  ${JSON.stringify(path)}: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},${kw}
  },`;
});

const file = `/** Auto-synced from islehacks.com (scripts/live-seo-snapshot.json). */
export interface RouteSeoEntry {
  title: string;
  description: string;
  keywords?: string;
}

export const ROUTE_SEO: Record<string, RouteSeoEntry> = {
${lines.join('\n')}
};

export const DEFAULT_SITE_KEYWORDS = ${JSON.stringify(SITE_KEYWORDS)};
`;

writeFileSync('src/config/routeSeo.ts', file);
console.log(`Wrote ${entries.length} SEO entries to src/config/routeSeo.ts`);
