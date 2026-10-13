import { getAllBlogSlugs } from '../data/blog';
import { forumPosts } from '../data/forum';
import { ROUTE_SEO } from './routeSeo';

/** Top-level routes that must not use the dynamic `[seoSlug]` page. */
export const SEO_SLUG_RESERVED = new Set([
  'about',
  'blog',
  'cheats',
  'contact',
  'faq',
  'features',
  'forum',
  'go',
  'guides',
  'howto',
  'intel',
  'preview',
  'privacy',
  'products',
  'reviews',
  'search',
  'setup',
  'status',
  'store',
  'support',
  'terms',
  'updates',
]);

export function getRootSeoSlugs(): string[] {
  const slugs = new Set<string>([...getAllBlogSlugs(), ...forumPosts.map((post) => post.slug)]);

  for (const path of Object.keys(ROUTE_SEO)) {
    const match = path.match(/^\/([^/]+)\/$/);
    if (!match) continue;
    const slug = match[1];
    if (SEO_SLUG_RESERVED.has(slug)) continue;
    slugs.add(slug);
  }

  return [...slugs].sort();
}
