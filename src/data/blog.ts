export type { BlogBlock, BlogPostFull } from './blog/types';
export { blogPosts } from './blog/posts';

import { blogPosts } from './blog/posts';

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}

export function getFeaturedBlogPost() {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

export function getNonFeaturedBlogPosts() {
  const featured = getFeaturedBlogPost();
  return blogPosts.filter((p) => p.slug !== featured?.slug);
}

export function getFeaturedBlogPosts(limit = 3) {
  const featured = getFeaturedBlogPost();
  const rest = blogPosts.filter((p) => p.slug !== featured?.slug);
  return featured ? [featured, ...rest].slice(0, limit) : blogPosts.slice(0, limit);
}

function screenshotPalette(src: string): 'green' | 'plains' | 'red' {
  if (src.includes('plains')) return 'plains';
  if (src.includes('forest-esp')) return 'green';
  return 'red';
}

function pickAlternatingPosts(pool: typeof blogPosts, limit: number) {
  const picked: typeof blogPosts = [];

  for (const post of pool) {
    if (picked.length >= limit) break;
    const previous = picked[picked.length - 1];
    if (previous && screenshotPalette(previous.image) === screenshotPalette(post.image)) continue;
    picked.push(post);
  }

  for (const post of pool) {
    if (picked.length >= limit) break;
    if (picked.some((item) => item.slug === post.slug)) continue;
    const previous = picked[picked.length - 1];
    if (previous && screenshotPalette(previous.image) === screenshotPalette(post.image)) continue;
    picked.push(post);
  }

  for (const post of pool) {
    if (picked.length >= limit) break;
    if (!picked.some((item) => item.slug === post.slug)) picked.push(post);
  }

  return picked;
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  const current = getBlogPost(slug);
  if (!current) return [];

  const sameTag = blogPosts.filter((p) => p.slug !== slug && p.tag === current.tag);
  const others = blogPosts.filter((p) => p.slug !== slug && p.tag !== current.tag);
  return pickAlternatingPosts([...sameTag, ...others], limit);
}

export function getBlogPostsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((post): post is NonNullable<typeof post> => post != null);
}

export function getRelatedBlogPostsForProduct(relatedSlugs: string[], limit = 6) {
  const curated = getBlogPostsBySlugs(relatedSlugs);
  if (curated.length >= limit) return curated.slice(0, limit);

  const used = new Set(curated.map((p) => p.slug));
  const fill = blogPosts.filter((p) => !used.has(p.slug));
  return [...curated, ...fill].slice(0, limit);
}

export function getBlogTags() {
  return [...new Set(blogPosts.map((p) => p.tag))].sort((a, b) => a.localeCompare(b));
}

export function getBlogPostsByTag(tag: string) {
  return blogPosts.filter((post) => post.tag === tag);
}

export function getBlogListing(tag: string | 'all' = 'all') {
  if (tag === 'all') {
    const featured = getFeaturedBlogPost();
    return { featured, grid: getNonFeaturedBlogPosts() };
  }

  const posts = getBlogPostsByTag(tag);
  return { featured: posts[0], grid: posts.slice(1) };
}

export function getBlogPostTimestamp(date: string) {
  return new Date(date).getTime();
}

export function getBlogReadMinutes(readTime: string) {
  const match = readTime.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}
