/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'The Isle Hacks | Features, ESP and Radar',
    description:
      'Explore The Isle hacks for Windows PC. Review features, ESP, radar, and compatibility before choosing a plan.',
  },
  '/features/': {
    title: 'The Isle Features | Isle Hacks',
    description:
      'Explore The Isle features for Isle Hacks, including available aim assistance, ESP, player information, dinosaur tracking, and radar options. Check feature availability and compatibility before purchasing.',
  },
  '/store/': {
    title: 'The Isle Store | Isle Hacks',
    description:
      'Explore Isle Hacks plans for The Isle on Windows PC. Compare monthly and lifetime options, review available features, and visit checkout for current pricing and access details.',
  },
  '/status/': {
    title: 'The Isle Status | Isle Hacks',
    description:
      'Check The Isle compatibility and product status, including updates, game patches, and anti-cheat compatibility information before using Isle Hacks.',
  },
  '/preview/': {
    title: 'The Isle Hacks Preview | Isle Hacks',
    description:
      'Preview available Isle Hacks features for The Isle. Explore the interface, player information, ESP visuals, and radar options before choosing a plan.',
  },
  '/setup/': {
    title: 'The Isle Hacks Setup | Isle Hacks',
    description:
      'Learn about Isle Hacks installation requirements, configuration options, supported game versions, and troubleshooting steps for Windows PC.',
  },
  '/support/': {
    title: 'The Isle Hacks Support | Isle Hacks',
    description:
      'Get support for Isle Hacks, including purchase assistance, access and delivery questions, configuration guidance, compatibility, and troubleshooting.',
  },
  '/faq/': {
    title: 'The Isle Hacks FAQ | Isle Hacks',
    description:
      'Find answers to common questions about The Isle hacks, supported Windows PC versions, available features, plans, compatibility, setup, and support.',
  },
  '/reviews/': {
    title: 'The Isle Hacks Reviews | Buyer Feedback',
    description:
      'Explore customer feedback about Isle Hacks, including usability, available features, compatibility, setup, and support before choosing a plan.',
  },
  '/blog/': {
    title: 'The Isle Intel | Isle Hacks',
    description:
      'Explore The Isle guides and updates covering gameplay mechanics, game patches, compatibility, player tracking, ESP terminology, radar features, and Windows PC setup.',
  },
  '/blog/features/': {
    title: 'The Isle Feature Articles | Isle Hacks',
    description:
      'Read Isle Hacks articles about The Isle ESP, radar, aim assistance, and other listed features for Windows PC.',
  },
  '/blog/guides/': {
    title: 'The Isle Guides | Isle Hacks',
    description:
      'Practical The Isle guides covering Evrima gameplay, ESP terminology, radar use, and how to review Isle Hacks before you buy.',
  },
  '/blog/setup/': {
    title: 'The Isle Setup Articles | Isle Hacks',
    description:
      'Windows PC setup notes for Isle Hacks, including Evrima requirements, configuration order, and compatibility checks.',
  },
  '/blog/updates/': {
    title: 'The Isle Updates | Isle Hacks',
    description:
      'Isle Hacks updates on The Isle Evrima patches, Easy Anti-Cheat changes, and current compatibility notes.',
  },
  '/forum/': {
    title: 'The Isle Community Forum | Isle Hacks',
    description:
      'Discuss The Isle Evrima gameplay, ESP terminology, radar use, patch changes, and Windows PC setup with the Isle Hacks community.',
  },
  '/forum/guidelines/': {
    title: 'Community Guidelines | Isle Hacks Forum',
    description:
      'Keep Isle Hacks forum discussions friendly, on topic, and useful. Read the community guidelines before you browse Q&A.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Isle Hacks',
    description:
      'Purchase terms, license use, and refund policy for Isle Hacks products sold through islehacks.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Isle Hacks',
    description:
      'How islehacks.org uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About Isle Hacks',
    description:
      'What Isle Hacks publishes: The Isle features, plans, setup notes, and status information at islehacks.org.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
