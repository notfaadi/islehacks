/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/features', '/features/'],
  ['/store', '/store/'],
  ['/status', '/status/'],
  ['/preview', '/preview/'],
  ['/setup', '/setup/'],
  ['/reviews', '/reviews/'],
  ['/cheats', '/store/'],
  ['/cheats/', '/store/'],
  ['/cheats/lite', '/store/'],
  ['/cheats/lite/', '/store/'],
  ['/cheats/pro', '/store/'],
  ['/cheats/pro/', '/store/'],
  ['/cheats/elite', '/store/'],
  ['/cheats/elite/', '/store/'],
  ['/cheats/compare', '/features/'],
  ['/cheats/compare/', '/features/'],
  ['/products/dota-2-cheats', '/store/'],
  ['/products/dota-2-cheats/', '/store/'],
  ['/products/dota-2-cheats/elite', '/store/'],
  ['/products/dota-2-cheats/elite/', '/store/'],
  ['/products/dota-2-cheats/utilities', '/store/'],
  ['/products/dota-2-cheats/utilities/', '/store/'],
  ['/products/the-isle-hacks', '/store/'],
  ['/products/the-isle-hacks/', '/store/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
