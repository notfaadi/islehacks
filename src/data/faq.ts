import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'aim'
  | 'safety'
  | 'setup'
  | 'blog';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const store = link('The Isle store', ROUTES.store);
const features = link('features page', ROUTES.features);
const status = link('status page', ROUTES.status);
const setup = link('setup page', ROUTES.setup);
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('The Isle intel', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if The Isle hacks are currently compatible?',
    a: a('Use the status page on islehacks.org before purchase or launch, especially after an Evrima or Easy Anti-Cheat update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Checkout provides access and setup instructions. Follow those notes for Windows PC and the Evrima branch before launching The Isle.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party The Isle software?',
    a: a('Yes. Any third-party modification can conflict with Easy Anti-Cheat and may lead to account action. You use this software at your own risk.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('The Isle on Windows 10/11 PC. The current listing is Evrima-only. macOS and Linux are not listed.'),
  },
  {
    id: 'plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'What plans are available?',
    a: `${store} lists Monthly access at $35 (P30D) and Lifetime access at $150 (P99Y), both in USD.`,
  },
  {
    id: 'products-page',
    topic: 'plans',
    icon: 'faqProductsPage',
    q: 'Where can I review features and pricing?',
    a: `${store} lists monthly and lifetime plans, available features, and the checkout path. The ${features} collects the same modules in more detail.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is The Isle ESP?',
    a: `ESP is an information overlay. ${features} covers player ESP, dinosaur ESP, health ESP, and resource markers. It does not automatically aim or move your dinosaur.`,
    scopes: ['the-isle-hacks'],
  },
  {
    id: 'player-esp',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What does player ESP show?',
    a: a('Player ESP can show nearby survivors with box outlines, names, distance, direction, a head dot, snaplines, and a visible-check option when those toggles are included in the current build.'),
  },
  {
    id: 'dinosaur-esp',
    topic: 'esp',
    icon: 'faqWhichTierEsp',
    q: 'What does dinosaur ESP show?',
    a: a('Dinosaur ESP and animal ESP can mark species, growth, stamina, distance, NPCs, and corpses so you can tell a threat from a food source.'),
  },
  {
    id: 'health-esp',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'What is health ESP?',
    a: a('Health ESP adds health, stamina, and growth readouts when the current build includes those fields. Use it to judge whether a fight is worth taking.'),
  },
  {
    id: 'radar',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Does Isle Hacks include radar?',
    a: a('Yes. Radar is listed as a local awareness overlay for nearby players and dinosaurs. It is not described as a separate 2D or 3D product.'),
  },
  {
    id: 'aim-assist',
    topic: 'aim',
    icon: 'faqWhichTierScripts',
    q: 'Is aimbot or aim assistance included?',
    a: a('Aim assistance is listed. Silent aim and triggerbot are not listed, so this site does not claim them. Confirm status before enabling combat modules.'),
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are The Isle hacks guaranteed undetected?',
    a: a('No. This site does not promise permanent undetected status. The Isle uses Easy Anti-Cheat, and compatibility can change after a patch. Check the status page and stop if a build is marked unavailable.'),
  },
  {
    id: 'eac',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What anti-cheat does The Isle use?',
    a: a('The Isle Evrima launches through Easy Anti-Cheat (EAC). After an Evrima patch, treat compatibility as unknown until you re-check the status page.'),
  },
  {
    id: 'dma',
    topic: 'setup',
    icon: 'faqExternalLoader',
    q: 'Is Cloud DMA required?',
    a: a('The current vendor listing says Cloud DMA is required for full functionality, and notes HVCI, core isolation, TPM, and Secure Boot left on. Confirm those notes at checkout before you buy.'),
  },
  {
    id: 'evrima-only',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Does this work on Legacy The Isle?',
    a: a('The current listing is Evrima-only. Do not assume a key or build for Evrima will work on a Legacy installation.'),
  },
  {
    id: 'monthly-vs-lifetime',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do I choose monthly vs lifetime?',
    a: `Choose monthly if you want to evaluate The Isle hacks for 30 days. Choose lifetime if you already know you want longer access. Feature lists are the same; only duration and price change. See ${store}.`,
  },
  {
    id: 'blog-vs-product',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog articles the same as the product listing?',
    a: `No. ${blog} explains terminology and setup. The ${store} feature list is the source for what you are buying.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do setup guides point for purchase?',
    a: `Guides link to the ${store}, ${setup}, and ${status} pages. Checkout runs through the listed partner—do not download files from random messages.`,
  },
  {
    id: 'support-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Open a support request with your order email, Windows version, The Isle branch, and the exact error text from the loader or Easy Anti-Cheat.'),
  },
  {
    id: 'invented-features',
    topic: 'aim',
    icon: 'faqAutoFarm',
    q: 'Do you include silent aim, triggerbot, or skeleton ESP?',
    a: a('Those modules are not on the current product listing, so Isle Hacks does not advertise them.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for plans, ESP, setup, and safety answers—or read ${blog} for longer guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'plans', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter plans, ESP, aim assistance, safety, setup, and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'aim',
  'safety',
  'setup',
  'blog',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter((f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'aim'].includes(f.topic));
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));

  const combined = [...scoped, ...general];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Does this guide replace the store listing?',
      a: `No. Use ${store} for current plans and the listed feature set. Guides explain terminology and workflow.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the status page. Evrima updates can change what a build can do.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download access files?',
      a: a('Only from the checkout or vendor instructions after purchase—not from third-party links in comments or messages.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test settings before a live hunt?',
      a: a('Yes. Enable a conservative ESP and radar profile first. Add combat options only after you confirm status.'),
    },
  ],
  Features: [
    {
      id: 'blog-feature-list',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which features are actually listed?',
      a: a('Player ESP, dinosaur ESP, health information, resource markers, radar, and aim assistance. See the features page for the full listed set.'),
    },
  ],
  Updates: [
    {
      id: 'blog-sec-eac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee Easy Anti-Cheat compatibility?',
      a: a('No article replaces the status page. Compatibility is a point-in-time note—stop if status shows the build is unavailable.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${store}. Feature lists on the store page are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Contact support with your order email and the article slug. Include your Windows version and The Isle branch.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every Evrima update. Reload configs instead of assuming old sliders still apply.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('radar') || slug.includes('terminology')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Where is the current ESP feature list?',
      a: `${features} and ${store} list player ESP, dinosaur ESP, health ESP, and radar from the current product listing.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('aim')) {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'aim',
      icon: 'faqBlogSlugScripts',
      q: 'Is aim assistance required?',
      a: a('No. Aim assistance is optional. You can review ESP and radar without enabling combat modules.'),
    });
  }
  if (slug.includes('eac') || slug.includes('compat') || slug.includes('setup')) {
    slugHints.push({
      id: 'blog-slug-status',
      topic: 'setup',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace the status page?',
      a: `No. Use the ${status} page for current compatibility notes after an Evrima or Easy Anti-Cheat update.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP', icon: 'comparePlayerEsp' as const, monthly: true, lifetime: true },
  { feature: 'Dinosaur ESP', icon: 'compareWardLocator' as const, monthly: true, lifetime: true },
  { feature: 'Health ESP', icon: 'compareRuneTimer' as const, monthly: true, lifetime: true },
  { feature: 'Radar', icon: 'compareMinimapHack' as const, monthly: true, lifetime: true },
  { feature: 'Aim assistance', icon: 'compareAutoCombo' as const, monthly: true, lifetime: true },
  { feature: 'Resource markers', icon: 'compareAbilityRadius' as const, monthly: true, lifetime: true },
  { feature: 'Saveable configs', icon: 'compareCloudBackup' as const, monthly: true, lifetime: true },
];
