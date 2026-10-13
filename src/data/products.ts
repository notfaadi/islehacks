import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  'the-isle-hacks': [
    'the-isle-hacks-evrima',
    'the-isle-player-esp',
    'the-isle-dinosaur-esp',
    'the-isle-hacks-pc-setup',
    'the-isle-compatibility-eac',
    'the-isle-health-esp',
  ],
};

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the status page on islehacks.org before purchase—especially after an Evrima or Easy Anti-Cheat update.',
  },
  {
    num: '02',
    title: 'Choose monthly or lifetime',
    desc: 'Select the $35 monthly plan or the $150 lifetime plan, then review the listed features before checkout.',
  },
  {
    num: '03',
    title: 'Complete checkout',
    desc: 'Follow the checkout flow for access details. Keep the order email you used so support can find your purchase.',
  },
  {
    num: '04',
    title: 'Follow Windows PC setup',
    desc: 'Use the vendor setup notes for the Evrima branch. Enable a conservative ESP and radar profile before joining a live server.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'The Isle Evrima uses Easy Anti-Cheat. Confirm current compatibility on the status page before you purchase or launch. Overlay options can change after a game or anti-cheat update.';

const sharedLimitations =
  'Third-party software in The Isle can violate the game terms of use and may lead to account action. You use this software at your own risk. Compatibility and availability can change after game, Easy Anti-Cheat, or Windows updates without notice.';

const isleSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or Windows 11 (64-bit).' },
  { icon: 'reqSteam', text: 'The Isle Evrima branch via Steam with current patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for checkout access and updates.' },
  { icon: 'reqCpu', text: 'A system that meets The Isle published hardware requirements. The vendor lists Cloud DMA as required for full functionality.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpEsp: {
    src: `${gameplay}/isle-forest-esp.png`,
    alt: 'Isle Hacks overlay in a forest showing dinosaur ESP boxes, names, and distance',
    caption: 'Player and dinosaur ESP',
    captionDesc: 'Box, name, and distance readouts on nearby creatures.',
  },
  gpHorn: {
    src: `${gameplay}/isle-forest-horn.png`,
    alt: 'Isle Hacks radar overlay on a forest hunt with nearby dinosaur markers',
    caption: 'Radar awareness',
    captionDesc: 'Radar and nearby-entity cues for rotations on Evrima servers.',
  },
  gpHealth: {
    src: `${gameplay}/isle-plains-health.png`,
    alt: 'Isle Hacks overlay on open plains with health and stamina readouts',
    caption: 'Health information',
    captionDesc: 'Health, stamina, and growth readouts when the current build includes them.',
  },
  gpRadar: {
    src: `${gameplay}/isle-forest-radar.png`,
    alt: 'Isle Hacks ESP markers on a forest trail with nearby dinosaurs',
    caption: 'Nearby creature markers',
    captionDesc: 'Distance and species cues while tracking dinosaurs through cover.',
  },
  gpCreatures: {
    src: `${gameplay}/isle-plains-esp.png`,
    alt: 'Isle Hacks health and growth overlay on open plains',
    caption: 'Health and growth',
    captionDesc: 'Health, stamina, and growth information before committing to a fight.',
  },
  gpWorld: {
    src: `${gameplay}/isle-forest-species.png`,
    alt: 'Isle Hacks species and distance overlay on a forest trail',
    caption: 'Species and distance',
    captionDesc: 'Species labels and distance markers for nearby dinosaurs.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  'the-isle-hacks': {
    images: slide('gpEsp', 'gpHorn', 'gpHealth', 'gpRadar', 'gpCreatures', 'gpWorld'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: isleSystemRequirements,
    fullFeatures: [
      'Aim assistance',
      'Player ESP',
      'Box ESP',
      'Name ESP',
      'Distance ESP',
      'Health ESP',
      'Dinosaur ESP / animal ESP',
      'Species, growth, and stamina info',
      'NPC ESP',
      'Corpse markers',
      'Player direction',
      'Head dot',
      'Visible check',
      'Snaplines',
      'Resource ESP (fruit and water)',
      'Gore markers',
      'Radar',
      'Max distance filter',
      'Custom ESP colors',
      'Custom menu and panic keys',
      'Crosshair and fullbright options',
      'Saveable configs',
      'English and Russian menus',
    ],
    overview: {
      title: 'Built around The Isle information workflow',
      paragraphs: [
        'Isle Hacks lists The Isle features for Windows PC: player ESP, dinosaur ESP, health information, resource markers, radar, and optional aim assistance. Enable the overlays you can actually read, then save a config before joining a live Evrima server.',
        'The current vendor listing is Evrima-only. The Isle uses Easy Anti-Cheat, so treat compatibility as something to re-check after every game update rather than a permanent status.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = 'the-isle-hacks';
    const content = productContent[slug];
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(cheat.title),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: [
        {
          type: 'p',
          text: 'The Isle rewards awareness. Knowing which player or dinosaur is nearby, how healthy a threat is, and how far a target stands matters before you commit to a fight. Isle Hacks groups those information modules so you can review them on one store page.',
        },
        { type: 'h2', text: 'What is listed' },
        {
          type: 'p',
          text: 'The current product listing includes player ESP, dinosaur ESP, health and growth information, resource markers, radar, and aim assistance. Silent aim, triggerbot, and skeleton ESP are not listed, so this site does not claim them.',
        },
      ],
      body: [
        { type: 'h2', text: 'Plans' },
        {
          type: 'p',
          text: 'Monthly access is $35 for 30 days. Lifetime access is $150. Both plans are priced in USD and use the same listed feature set. Compare them on this store page before checkout.',
        },
        { type: 'h2', text: 'Requirements' },
        {
          type: 'p',
          text: 'Windows 10 or 11, the Evrima branch, and a machine that can run The Isle. The vendor also lists Cloud DMA as required for full functionality, plus HVCI, core isolation, TPM, and Secure Boot left on.',
        },
      ],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

export const productPages: ProductPage[] = [...buildTierPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug) ?? productPages[0];
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug) ?? cheatPages[0];
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('gpEsp', 'gpHorn', 'gpHealth', 'gpRadar', 'gpCreatures', 'gpWorld');

export const productHub = {
  path: '/store/',
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Isle Hacks plans for The Isle on Windows PC. Compare monthly and lifetime options and review available features before checkout.',
  buyUrl: checkoutPath('isle'),
};
