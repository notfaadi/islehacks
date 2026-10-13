import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE, SUPPORT_EMAIL } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Isle Hacks',
    domain: 'islehacks.org',
    title: 'The Isle Hacks | Features, ESP and Radar',
    description:
      'Explore The Isle hacks for Windows PC. Review features, ESP, radar, and compatibility before choosing a plan.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: productBase, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'The Isle — review status before you play',
    eyebrow: 'The Isle on Windows PC',
    titleLine1: 'The Isle',
    titleLine2: 'The Isle Hacks',
    titleLine3: 'Features, ESP and Radar',
    subtitle:
      'Isle Hacks covers The Isle features for Windows PC, including player ESP, dinosaur ESP, health information, radar options, and aim assistance. Review compatibility and plans before checkout.',
    ctaPrimary: 'View store',
    ctaDiscord: 'View plans',
    modesLabel: 'Supported focus',
    modes: ['Evrima', 'Windows PC', 'ESP', 'Radar'],
    metrics: [
      { label: 'Platform', strong: 'Windows PC' },
      { label: 'Plans', strong: '2' },
      { label: 'Currency', strong: 'USD' },
      { label: 'Market', strong: 'Worldwide' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'The Isle tools you can review before buying',
    subtitle: 'Aim assistance, ESP, creature information, and radar options listed by the current product build.',
    items: [
      {
        title: 'ESP',
        subtitle: 'See players and dinosaurs nearby.',
        desc: 'The Isle ESP overlay groups player, dinosaur, and world information so you can review distance, names, and health before committing to a hunt.',
        bullets: [
          'Player ESP with box, name, and distance readouts',
          'Dinosaur and animal ESP with species information',
          'Health, stamina, and growth details when available',
          'Distance caps so overlays stay readable',
        ],
        tags: ['The Isle ESP', 'player ESP', 'dinosaur ESP'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Track other survivors.',
        desc: 'Player ESP shows nearby humans with box outlines, names, distance, direction, and a visible-check option when the current build includes them.',
        bullets: ['Box and name markers', 'Distance and direction cues', 'Head dot and snapline options'],
        tags: ['The Isle player ESP', 'box ESP', 'name ESP'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Dinosaur ESP',
        subtitle: 'Identify nearby creatures.',
        desc: 'Dinosaur ESP and animal ESP mark species, growth, and distance so you can tell a threat from a food source before you close in.',
        bullets: ['Species labels', 'Growth and stamina readouts', 'NPC and corpse markers'],
        tags: ['The Isle dinosaur ESP', 'species info', 'animal ESP'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Health ESP',
        subtitle: 'Read fight-critical stats.',
        desc: 'Health ESP adds stamina and growth context so you can judge whether a player or dinosaur is worth engaging.',
        bullets: ['Health readout', 'Stamina information', 'Growth stage when listed'],
        tags: ['The Isle health ESP', 'stamina', 'growth'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Aim Assist',
        subtitle: 'Optional targeting help.',
        desc: 'Aim assistance is available as a combat option. Use it only after you confirm the current build status and understand the extra risk that combat modules add.',
        bullets: ['Aim assistance toggle', 'Use conservative settings first', 'Confirm status after each patch'],
        tags: ['The Isle aimbot', 'aim assist'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Radar',
        subtitle: 'Local awareness overlay.',
        desc: 'Radar sits beside ESP so you can rotate around nearby players and dinosaurs without filling the screen with boxes.',
        bullets: ['Nearby player and dinosaur cues', 'Pairs with max-distance ESP filters', 'Useful on busier Evrima servers'],
        tags: ['radar', 'The Isle hacks PC'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Resource ESP',
        subtitle: 'Food, water, and corpses.',
        desc: 'World markers can highlight fruit, water, gore, and corpses so you spend less time guessing where to recover after a hunt.',
        bullets: ['Fruit and water markers', 'Corpse and gore options', 'Max distance filter'],
        tags: ['resource ESP', 'world ESP'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Configuration',
        subtitle: 'Save what you actually use.',
        desc: 'Custom colors, menu keys, panic keys, and saveable configs keep the overlay readable instead of leaving every toggle on.',
        bullets: ['Custom ESP colors', 'Custom menu and panic keys', 'Saveable configuration profiles'],
        tags: ['configs', 'custom colors'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Compatibility',
        subtitle: 'Evrima on Windows PC.',
        desc: 'The current listing is Evrima-only on Windows 10 and 11. The Isle uses Easy Anti-Cheat, so check status after game updates before launching.',
        bullets: ['Windows 10 and 11', 'Evrima branch only', 'Review anti-cheat status after patches'],
        tags: ['Evrima', 'Easy Anti-Cheat', 'Windows PC'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'A focused The Isle listing—not a multi-game catalog',
    subtitle:
      'Isle Hacks is built around one game. Review features, plans, and status on islehacks.org before you buy.',
    usLabel: 'Isle Hacks',
    otherLabel: 'Typical listing',
    rows: [
      {
        title: 'The Isle only',
        desc: 'Copy, plans, and guides stay on The Isle Evrima instead of mixing unrelated games into one catalog.',
        cardDesc: 'The catalog, pricing, and intel stay locked to Evrima rather than bundling other titles.',
      },
      {
        title: 'Listed features only',
        desc: 'ESP, radar, and aim assistance are described from the current product listing—no invented silent aim or triggerbot modules.',
        cardDesc: 'We only document overlays that appear on the live listing, and we skip unverified combat extras.',
      },
      {
        title: 'Monthly and lifetime plans',
        desc: 'Two USD plans: Monthly at $35 and Lifetime at $150. Checkout shows the current access details.',
        cardDesc: 'Pick a 30-day $35 pass or a $150 one-time license. Checkout shows the latest access notes.',
      },
      {
        title: 'Status before launch',
        desc: 'The Isle uses Easy Anti-Cheat. Compatibility can change after an Evrima patch, so check the status page first.',
        cardDesc: 'EAC updates can shift compatibility. Confirm the status page after every game patch.',
      },
      {
        title: 'Windows PC requirements',
        desc: 'The listing is for Windows 10 and 11. The vendor also notes Cloud DMA for full functionality.',
        cardDesc: 'Windows 10/11 is the supported platform. Full functionality may require the vendor Cloud DMA note.',
      },
      {
        title: 'Support on the record',
        desc: 'Purchase, setup, and compatibility questions go through the Support page—include your order email and Windows version.',
        cardDesc: 'Open the Support page for order, install, or EAC questions and include your receipt email plus OS build.',
      },
    ],
    metrics: [
      {
        value: '$35',
        title: 'Monthly plan',
        desc: 'Thirty-day access billed in USD.',
      },
      {
        value: '$150',
        title: 'Lifetime plan',
        desc: 'One-time USD purchase for long-term access.',
      },
      {
        value: 'EAC',
        title: 'Game anti-cheat',
        desc: 'The Isle Evrima launches through Easy Anti-Cheat. Status can change after patches.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to a configured overlay in',
    titleHighlight: 'three clear steps',
    intro:
      'Review status, complete checkout, then follow the vendor setup notes for Windows PC and the Evrima branch before launching The Isle.',
    ctaPrimary: 'Compare plans',
    ctaSecondary: 'Setup questions',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Confirm status and requirements',
        desc: 'Check the status page, Windows 10/11 version, and Evrima branch. The vendor lists Cloud DMA as required for full functionality.',
      },
      {
        step: 'Step 2',
        title: 'Choose a plan and complete checkout',
        desc: 'Pick Monthly ($35) or Lifetime ($150), then follow the checkout flow for access and setup instructions.',
      },
      {
        step: 'Step 3',
        title: 'Configure ESP, radar, and keys',
        desc: 'Enable only the overlays you can read, set a panic key, and save a config before joining a live server.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Built for The Isle on Windows PC.',
    subtitle: 'Check status after every Evrima or Easy Anti-Cheat update before you launch.',
    items: [
      'Windows 10 & 11',
      'The Isle Evrima',
      'Easy Anti-Cheat',
      'Steam PC',
      'Intel / AMD',
      'Cloud DMA listed',
      'Saveable configs',
      'English / Russian menus',
    ],
  },
  cheats: {
    eyebrow: 'The Isle product',
    title: 'The Isle hacks',
    subtitle: 'ESP, radar, and aim assistance for The Isle on Windows PC, with monthly and lifetime plans.',
    viewAll: 'View store details',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'The Isle',
        name: 'Isle Hacks',
        title: 'The Isle Hacks',
        desc: 'The Isle hacks for Windows PC with player ESP, dinosaur ESP, health information, radar, and optional aim assistance.',
        features: ['Player ESP', 'Dinosaur ESP', 'Health ESP', 'Radar', 'Aim assistance', 'Resource markers'],
        more: 18,
        href: productBase,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Store',
    title: 'The Isle store',
    subtitle: 'Compare monthly and lifetime Isle Hacks plans for The Isle on Windows PC.',
    viewAll: 'View store',
    get: 'Get',
    explore: 'Explore',
    items: [],
  },
  blog: {
    eyebrow: 'Intel',
    title: 'Guides and updates',
    subtitle: 'The Isle mechanics, ESP terminology, radar notes, Evrima patches, and Windows PC setup.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic to find ESP explainers, compatibility notes, and plan comparisons.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Guides',
        title: 'The Isle hacks for Evrima: what to review first',
        slug: 'the-isle-hacks-evrima',
        image: '/images/gameplay/isle-forest-esp.png',
        desc: 'A practical overview of The Isle hacks on the Evrima branch, including ESP, radar, and plan choices.',
        date: 'Oct 8, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Features',
        title: 'The Isle player ESP: boxes, names, and distance',
        slug: 'the-isle-player-esp',
        image: '/images/gameplay/isle-forest-horn.png',
        desc: 'How player ESP presents nearby survivors with box, name, and distance information.',
        date: 'Oct 7, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Features',
        title: 'The Isle dinosaur ESP and species information',
        slug: 'the-isle-dinosaur-esp',
        image: '/images/gameplay/isle-plains-health.png',
        desc: 'Dinosaur ESP, species labels, growth, and why creature information matters on Evrima.',
        date: 'Oct 6, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Features',
        title: 'The Isle health ESP: health, stamina, and growth',
        slug: 'the-isle-health-esp',
        image: '/images/gameplay/isle-forest-radar.png',
        desc: 'What health ESP adds when you need fight-critical stats before committing to a hunt.',
        date: 'Oct 5, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Features',
        title: 'The Isle aimbot and aim assistance options',
        slug: 'the-isle-aimbot',
        image: '/images/gameplay/isle-plains-esp.png',
        desc: 'What aim assistance is listed for, and why it should stay optional after you check status.',
        date: 'Oct 4, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'The Isle hacks PC setup on Windows',
        slug: 'the-isle-hacks-pc-setup',
        image: '/images/gameplay/isle-forest-species.png',
        desc: 'Windows PC requirements, Evrima-only notes, and a conservative first-run configuration.',
        date: 'Oct 3, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Features',
        title: 'The Isle radar features for local rotations',
        slug: 'the-isle-radar-features',
        image: '/images/gameplay/isle-forest-esp.png',
        desc: 'How radar complements ESP when you need nearby player and dinosaur cues.',
        date: 'Oct 2, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'The Isle ESP terminology: player, dinosaur, and world overlays',
        slug: 'the-isle-esp-terminology',
        image: '/images/gameplay/isle-forest-horn.png',
        desc: 'Plain-language definitions for player ESP, dinosaur ESP, health ESP, and resource markers.',
        date: 'Oct 1, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Updates',
        title: 'The Isle Easy Anti-Cheat compatibility notes',
        slug: 'the-isle-compatibility-eac',
        image: '/images/gameplay/isle-plains-health.png',
        desc: 'What Easy Anti-Cheat means for The Isle Evrima and how to treat status after a patch.',
        date: 'Sep 30, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Isle Hacks monthly vs lifetime plans',
        slug: 'the-isle-monthly-vs-lifetime',
        image: '/images/gameplay/isle-forest-radar.png',
        desc: 'Compare the $35 monthly plan and the $150 lifetime plan before checkout.',
        date: 'Sep 29, 2026',
        readTime: '4 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Grouped so you can tune mid-hunt',
    subtitle: 'Modules stay in familiar categories: vision, creatures, radar, combat, world, and profiles.',
    items: [
      { num: '01', label: 'Vision', title: 'Player ESP that stays readable', desc: 'Box, name, distance, direction, and snapline options in one vision group.' },
      { num: '02', label: 'Creatures', title: 'Dinosaur and species info', desc: 'Animal ESP, species labels, growth, stamina, and corpse markers.' },
      { num: '03', label: 'Radar', title: 'Nearby threat cues', desc: 'Radar for local player and dinosaur awareness beside the ESP overlay.' },
      { num: '04', label: 'Aim', title: 'Optional aim assistance', desc: 'Aim assist stays a separate combat toggle—leave it off if you only want information.' },
      { num: '05', label: 'World', title: 'Food, water, and gore', desc: 'Resource markers for fruit, water, gore, and corpses with a max-distance filter.' },
      { num: '06', label: 'Profiles', title: 'Colors, keys, and saves', desc: 'Custom ESP colors, menu key, panic key, and saveable configs.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'a saved config.',
    subtitle: 'A straight path from reviewing The Isle compatibility to a profile you can reuse.',
    ctaLabel: 'See current plans',
    ctaHref: productBase,
    ctaSecondary: 'Read setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check current status',
        desc: 'Read the status page on islehacks.org after any Evrima or Easy Anti-Cheat update.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose monthly or lifetime',
        desc: 'Select the $35 monthly plan or the $150 lifetime plan, then continue to checkout.',
      },
      {
        num: '03',
        phase: 'Setup',
        title: 'Follow Windows PC instructions',
        desc: 'Use the vendor setup notes for Evrima. Confirm Cloud DMA requirements if full functionality is listed.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save a conservative profile',
        desc: 'Enable the ESP and radar options you can actually read, then save the config.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how The Isle plays.',
    items: [
      { num: '01', title: 'Patch days matter', desc: 'Evrima updates can change compatibility. Check status before you launch after a patch.' },
      { num: '02', title: 'Start with information modules', desc: 'Player ESP, dinosaur ESP, and radar are easier to evaluate than turning every combat option on at once.' },
      { num: '03', title: 'Ask support with details', desc: 'Include order email, Windows version, and the exact error text when you need setup help.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Isle Hacks support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Ask about plans, features, and access before you buy.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email support',
        desc: 'Purchase, setup, and compatibility questions.',
        linkLabel: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Plans, ESP, compatibility, and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Status and setup',
        desc: 'Review compatibility notes and the setup page.',
        linkLabel: 'View status',
        href: '/status/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on islehacks.org or through the checkout partner.' },
      { title: 'Platform', desc: 'Windows 10 or 11, plus whether you are on the Evrima branch.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader, Steam, or Easy Anti-Cheat.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, plans, and features—without vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if The Isle hacks are currently compatible?',
        a: 'Use the status page on islehacks.org before purchase or launch, especially after an Evrima or Easy Anti-Cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Checkout provides access and setup instructions. Follow those notes for Windows PC and the Evrima branch before launching The Isle.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party The Isle software?',
        a: 'Yes. Any third-party modification can conflict with Easy Anti-Cheat and may lead to account action. You use this software at your own risk.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'The Isle on Windows 10/11 PC. The current listing is Evrima-only. macOS and Linux are not listed.',
      },
      {
        num: '05',
        q: 'What plans are available?',
        a: 'Monthly access is $35 (P30D). Lifetime access is $150 (P99Y). Both are priced in USD.',
      },
      {
        num: '06',
        q: 'Where can I review features and pricing?',
        a: 'The store page lists monthly and lifetime plans, available features, and the checkout path.',
      },
    ],
  },
  footer: {
    tagline: 'The Isle hacks — ESP, radar, and plans for Windows PC. islehacks.org',
    explore: 'Explore',
    exploreLinks: [
      { href: '/store/', label: 'Products', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read The Isle intel', ariaLabel: 'Blog' },
      { href: '/forum/', label: 'Community forum', ariaLabel: 'Forum' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
      { href: '/features/', label: 'Feature overview', ariaLabel: 'Features' },
    ],
    support: 'Get help',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Isle Hacks',
      description:
        'Isle Hacks publishes The Isle feature notes, plans, setup guidance, and status information at islehacks.org.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Isle Hacks is a Windows PC resource for players reviewing The Isle hacks, including ESP, radar, and aim assistance options. We publish feature descriptions, plan details, and compatibility notes so you can evaluate the product before checkout.',
            'The Isle and related names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'The site covers available features from the current product listing, monthly and lifetime plans, setup requirements, and Easy Anti-Cheat compatibility notes for the Evrima branch.',
            'Feature availability can change after game or anti-cheat updates. Check the status page before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, setup errors, or checkout are handled through the Support page and email. Include your order email, Windows version, and The Isle branch when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Isle Hacks handles analytics, cookies, and contact data when you use islehacks.org.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on islehacks.org.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for Isle Hacks products and islehacks.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 2026. By using islehacks.org or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to The Isle software listed on the store page. Plans are Monthly ($35, P30D) and Lifetime ($150, P99Y), billed in USD.',
            'Feature lists describe what is included at the time of publication. Modules can change when The Isle or Easy Anti-Cheat updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. islehacks.org does not process or store payment card numbers.',
            'After purchase, follow the setup instructions provided in the checkout flow before launching The Isle.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account penalties, or issues caused by ignoring setup notes or launching while status indicates the build is unavailable.',
            'If the product does not work as described on a supported setup—The Isle Evrima on Windows 10/11, current access from checkout, and status not showing an outage when you started—contact us through the Support page. Include your order email, Windows version, game branch, and screenshots or exact error text.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for The Isle can conflict with game updates and Easy Anti-Cheat. You use this software at your own risk, including possible account action.',
            'Check the status page before every session. Do not launch while a build is marked unavailable after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or setup questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Isle Hacks Support',
      description:
        'Get support for Isle Hacks purchase, setup, and compatibility questions at islehacks.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Try Now',
    homeAria: 'Isle Hacks home',
    checkoutAria: 'Try Now',
    discordAria: 'View Isle Hacks plans',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
