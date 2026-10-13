import { blogPosts } from './blog';
import { forumPosts } from './forum';
import { getLandingFaqs } from './faq';
import { ROUTES } from '../utils/path';
import { blogPostPath } from '../utils/path';

export interface SearchRecord {
  title: string;
  desc: string;
  href: string;
  type: 'Page' | 'Article' | 'Forum' | 'FAQ';
}

const staticPages: SearchRecord[] = [
  {
    title: 'Home',
    desc: 'The Isle hacks overview, ESP, radar, and plans.',
    href: ROUTES.home,
    type: 'Page',
  },
  {
    title: 'Features',
    desc: 'Player ESP, dinosaur ESP, health ESP, radar, and aim assistance.',
    href: ROUTES.features,
    type: 'Page',
  },
  {
    title: 'Store',
    desc: 'Monthly $35 and lifetime $150 plans for The Isle on Windows PC.',
    href: ROUTES.store,
    type: 'Page',
  },
  {
    title: 'Status',
    desc: 'Easy Anti-Cheat compatibility notes after Evrima patches.',
    href: ROUTES.status,
    type: 'Page',
  },
  {
    title: 'Preview',
    desc: 'Overlay screenshots for ESP, radar, and health information.',
    href: ROUTES.preview,
    type: 'Page',
  },
  {
    title: 'Setup',
    desc: 'Windows PC setup order for The Isle Evrima.',
    href: ROUTES.setup,
    type: 'Page',
  },
  {
    title: 'Blog',
    desc: 'The Isle intel: ESP terminology, radar, and patch notes.',
    href: ROUTES.blog,
    type: 'Page',
  },
  {
    title: 'Forum',
    desc: 'The Isle community forum: ESP, radar, Easy Anti-Cheat, setup, and plan Q&A.',
    href: ROUTES.forum,
    type: 'Page',
  },
  {
    title: 'FAQ',
    desc: 'Answers about plans, ESP, compatibility, and checkout.',
    href: ROUTES.faq,
    type: 'Page',
  },
  {
    title: 'Reviews',
    desc: 'Evaluation checkpoints before choosing a plan.',
    href: ROUTES.reviews,
    type: 'Page',
  },
  {
    title: 'Support',
    desc: 'Purchase, setup, and compatibility help.',
    href: '/go/',
    type: 'Page',
  },
];

export function buildSearchIndex(): SearchRecord[] {
  const articles: SearchRecord[] = blogPosts.map((post) => ({
    title: post.title,
    desc: post.desc,
    href: blogPostPath(post.slug),
    type: 'Article' as const,
  }));

  const forum: SearchRecord[] = forumPosts.map((thread) => ({
    title: thread.title,
    desc: thread.excerpt,
    href: `/forum/${thread.slug}/`,
    type: 'Forum' as const,
  }));

  const faq: SearchRecord[] = getLandingFaqs().map((item) => ({
    title: item.q.replace(/<[^>]+>/g, ''),
    desc: item.a.replace(/<[^>]+>/g, '').slice(0, 140),
    href: `${ROUTES.faq}#faq-${item.num}`,
    type: 'FAQ' as const,
  }));

  return [...staticPages, ...articles, ...forum, ...faq];
}
