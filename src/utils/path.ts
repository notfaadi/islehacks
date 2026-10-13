import { PRODUCT_BASE } from '../config/site';

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

/** Former /cheats/* and Dota product URLs → current routes. */
export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': PRODUCT_BASE,
  '/cheats/lite/': PRODUCT_BASE,
  '/cheats/pro': PRODUCT_BASE,
  '/cheats/pro/': PRODUCT_BASE,
  '/cheats/elite': PRODUCT_BASE,
  '/cheats/elite/': PRODUCT_BASE,
  '/cheats/compare': '/features/',
  '/cheats/compare/': '/features/',
  '/contact': '/support/',
  '/contact/': '/support/',
  '/products/dota-2-cheats': PRODUCT_BASE,
  '/products/dota-2-cheats/': PRODUCT_BASE,
  '/products/the-isle-hacks': PRODUCT_BASE,
  '/products/the-isle-hacks/': PRODUCT_BASE,
};

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  features: '/features/',
  store: '/store/',
  status: '/status/',
  preview: '/preview/',
  setup: '/setup/',
  reviews: '/reviews/',
  blog: '/blog/',
  forum: '/forum/',
  forumGuidelines: '/forum/guidelines/',
  products: PRODUCT_BASE,
  productsElite: PRODUCT_BASE,
  productsUtilities: PRODUCT_BASE,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

export function blogPostPath(slug: string): string {
  return `/blog/${slug}/`;
}

export function blogTopicSlug(tag: string): string {
  return tag.trim().toLowerCase().replaceAll(/\s+/g, '-');
}

export function blogTopicPath(tag: string): string {
  if (!tag || tag === 'all') return ROUTES.blog;
  return `/blog/${blogTopicSlug(tag)}/`;
}

/** @deprecated Use productPath — product pages live under the store. */
export function cheatPath(slug: string): string {
  return productPath(slug);
}

export function productPath(_slug?: string): string {
  return PRODUCT_BASE;
}
