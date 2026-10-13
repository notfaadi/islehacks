export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Hunts', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

export function forumCategoryKey(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export function forumCategoryPath(name?: string) {
  if (!name || name === 'all') return '/forum/';
  return `/forum/?category=${forumCategoryKey(name)}`;
}

export function forumCommunityHandle(name: string) {
  return `d/${name.toLowerCase().replaceAll(' ', '')}`;
}

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-does-player-esp-include',
    title: 'What does player ESP include in the guide?',
    upvotes: 71,
    excerpt: 'A short breakdown of box, name, distance, and direction options covered by the player ESP guide.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle player ESP guide',
    sourcePath: '/blog/the-isle-player-esp/',
    answer: 'The guide covers box, name, distance, direction, snapline, and visible-check options. Exact toggles depend on the current build.',
    detail: 'It recommends a short max-distance filter so the overlay stays readable on busy Evrima servers.',
    tip: 'Start with box and distance. Add names only if you can still track scent and stamina UI.',
  }),
  guideDiscussion({
    slug: 'how-to-read-dinosaur-esp',
    title: 'How should I read dinosaur ESP on the first hunt?',
    upvotes: 54,
    excerpt: 'Species and growth matter more than turning every creature marker on at once.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle dinosaur ESP guide',
    sourcePath: '/blog/the-isle-dinosaur-esp/',
    answer: 'Use species labels and growth first so you can tell a threat from a food source. Corpse and NPC markers can stay off until you need them.',
    detail: 'Pair dinosaur ESP with a short radar range if you only need to know that something is close.',
    tip: 'If the screen feels crowded, reduce range before changing colors.',
  }),
  guideDiscussion({
    slug: 'is-aim-assistance-required',
    title: 'Do I need aim assistance to use Isle Hacks?',
    upvotes: 41,
    excerpt: 'Aim assistance is listed as optional. ESP and radar can run without it.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle aimbot guide',
    sourcePath: '/blog/the-isle-aimbot/',
    answer: 'No. Aim assistance is a separate combat toggle. Silent aim and triggerbot are not listed.',
    detail: 'Check the status page after an Evrima update before enabling combat modules.',
    tip: 'Build a readable ESP profile first, then decide whether you want aim assistance.',
  }),
  guideDiscussion({
    slug: 'windows-pc-setup-order',
    title: 'What is the first-run setup order on Windows PC?',
    upvotes: 38,
    excerpt: 'Status, Evrima branch, conservative ESP, then a saved config.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle hacks PC setup',
    sourcePath: '/blog/the-isle-hacks-pc-setup/',
    answer: 'Confirm status and the Evrima branch, follow vendor setup notes, then enable player ESP, dinosaur ESP, and radar.',
    detail: 'The vendor lists Cloud DMA as required for full functionality. Confirm that at checkout if you need the complete set.',
    tip: 'Set a panic key before joining a populated server.',
  }),
  guideDiscussion({
    slug: 'how-to-keep-health-esp-readable',
    title: 'How do I keep health ESP readable in a fight?',
    upvotes: 36,
    excerpt: 'Health, stamina, and growth help only if the overlay stays short enough to read.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle health ESP: health, stamina, and growth',
    sourcePath: '/blog/the-isle-health-esp/',
    answer: 'Keep health and stamina on, then add growth only if you still have room around the target.',
    detail: 'A short max-distance filter keeps the fight UI from covering nearby scent and stamina bars.',
    tip: 'If two readouts overlap, drop growth first. Health and stamina decide whether you stay in the fight.',
  }),
  guideDiscussion({
    slug: 'what-radar-range-to-start-with',
    title: 'What radar range should I start with?',
    upvotes: 33,
    excerpt: 'A short local range is easier to trust than a map-wide ping on the first hunt.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle radar features for local rotations',
    sourcePath: '/blog/the-isle-radar-features/',
    answer: 'Start with a short local range so radar confirms what is already near you instead of drawing the whole server.',
    detail: 'Widen range only after you can still hear, scent, and read stamina without chasing every ping.',
    tip: 'Pair radar with species labels so a nearby ping is a threat, a food source, or something you can ignore.',
  }),
  guideDiscussion({
    slug: 'what-does-world-overlay-mean',
    title: 'What does world overlay mean in ESP terminology?',
    upvotes: 28,
    excerpt: 'A quick split between player, dinosaur, and world information from the terminology guide.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle ESP terminology: player, dinosaur, and world overlays',
    sourcePath: '/blog/the-isle-esp-terminology/',
    answer: 'World overlay covers points of interest, corpses, and other mapped objects that are not a living player or dinosaur.',
    detail: 'Turn it on after player and dinosaur ESP are readable. Extra world markers make a crowded server harder to scan.',
    tip: 'Learn the three groups first: player, dinosaur, then world. Add one group at a time.',
  }),
  guideDiscussion({
    slug: 'can-i-use-isle-hacks-on-a-laptop',
    title: 'Can I use Isle Hacks on a Windows laptop?',
    upvotes: 25,
    excerpt: 'The listing is Windows PC. Confirm the Evrima branch and vendor setup notes before you buy.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'The Isle hacks PC setup on Windows',
    sourcePath: '/blog/the-isle-hacks-pc-setup/',
    answer: 'Windows 10 or 11 laptops can be used if they meet the vendor Windows PC notes. The store does not list a separate laptop build.',
    detail: 'Confirm the Evrima Steam branch, then follow the same conservative ESP order you would use on a desktop.',
    tip: 'If the laptop cannot keep a stable overlay, reduce radar range and dinosaur labels before changing colors.',
  }),
  guideDiscussion({
    slug: 'what-to-check-before-a-populated-server',
    title: 'What should I check before joining a populated server?',
    upvotes: 31,
    excerpt: 'Status, panic key, and a readable ESP profile come before a busy Evrima server.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle hacks PC setup on Windows',
    sourcePath: '/blog/the-isle-hacks-pc-setup/',
    answer: 'Confirm current status, save a conservative ESP profile, and set a panic key before you queue into a populated server.',
    detail: 'A quiet area is a better first test than a full server if you are still choosing distance caps.',
    tip: 'If the overlay feels crowded, leave and reduce range. Do not add modules in the middle of a hunt.',
  }),
  guideDiscussion({
    slug: 'how-to-choose-esp-colors',
    title: 'How should I choose ESP colors for the first hunt?',
    upvotes: 19,
    excerpt: 'Readable contrast matters more than matching every species with a unique color.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle player ESP: boxes, names, and distance',
    sourcePath: '/blog/the-isle-player-esp/',
    answer: 'Pick one high-contrast color for players and one for dinosaurs. Extra colors can wait until the overlay is already readable.',
    detail: 'If names and boxes share a color, you will lose the target in forest or night lighting.',
    tip: 'Change one color at a time, then test in the same biome so you can tell whether the change helped.',
  }),
  guideDiscussion({
    slug: 'does-lifetime-freeze-compatibility',
    title: 'Does a lifetime plan freeze Easy Anti-Cheat compatibility?',
    upvotes: 44,
    excerpt: 'Duration and price change. Patch-day checks stay the same on both plans.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Isle Hacks monthly vs lifetime plans',
    sourcePath: '/blog/the-isle-monthly-vs-lifetime/',
    answer: 'No. Lifetime is a longer access window, not a promise that a later Evrima or Easy Anti-Cheat update will stay compatible.',
    detail: 'Re-check the status page after patches on monthly or lifetime. The listed modules are the same.',
    tip: 'Choose lifetime only if you already want longer access. Compatibility still has to be confirmed after updates.',
  }),
  guideDiscussion({
    slug: 'what-is-cloud-dma-for',
    title: 'What does Cloud DMA mean on the setup page?',
    upvotes: 27,
    excerpt: 'The vendor lists Cloud DMA as required for the full feature set. Confirm that before checkout.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'The Isle hacks PC setup on Windows',
    sourcePath: '/blog/the-isle-hacks-pc-setup/',
    answer: 'Cloud DMA is the vendor hardware path listed for full functionality. The site does not treat it as optional if you want the complete module set.',
    detail: 'Confirm the requirement at checkout and in the current setup notes. A Windows PC install alone is not the whole checklist.',
    tip: 'If you only need to review overlays first, read the feature and status pages before you buy extra hardware.',
  }),
  guideDiscussion({
    slug: 'how-to-practice-esp-in-a-quiet-area',
    title: 'How can I practice ESP without joining a full server?',
    upvotes: 24,
    excerpt: 'A quiet area makes distance caps and species labels easier to judge.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle hacks for Evrima: what to review first',
    sourcePath: '/blog/the-isle-hacks-evrima/',
    answer: 'Load a quieter area first, enable player ESP and dinosaur ESP, then walk a short loop while you adjust distance.',
    detail: 'Once names and species stay readable, add radar. A full server hides whether the profile is actually usable.',
    tip: 'Save the profile before you join a populated server so you can return to the quieter setup.',
  }),
  guideDiscussion({
    slug: 'what-does-patch-day-status-mean',
    title: 'What does patch-day status actually tell me?',
    upvotes: 39,
    excerpt: 'Status is a current compatibility note, not a permanent undetected label.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'The Isle Easy Anti-Cheat compatibility notes',
    sourcePath: '/blog/the-isle-compatibility-eac/',
    answer: 'Patch-day status tells you whether the current listing is marked available after the latest Evrima or Easy Anti-Cheat change.',
    detail: 'If status is unknown or unavailable, wait. Game-client EAC repair is a different problem from product availability.',
    tip: 'Check status, then test in a quiet area. Do not treat an older “working” note as current.',
  }),
  guideDiscussion({
    slug: 'how-to-tell-threat-from-food',
    title: 'How do I tell a threat from a food source on dinosaur ESP?',
    upvotes: 48,
    excerpt: 'Species and growth matter more than turning every creature marker on.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle dinosaur ESP and species information',
    sourcePath: '/blog/the-isle-dinosaur-esp/',
    answer: 'Read species first, then growth. A large carnivore at short range is a different decision than a small herbivore on the same radar ping.',
    detail: 'Corpse and NPC markers can stay off until you are looking for food or a specific body.',
    tip: 'If every dinosaur looks the same, you have too many markers on. Keep species and growth, drop the rest.',
  }),
  guideDiscussion({
    slug: 'should-i-enable-snaplines-first',
    title: 'Should I enable snaplines on the first ESP setup?',
    upvotes: 18,
    excerpt: 'Box and distance are enough for a first readable profile.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle player ESP: boxes, names, and distance',
    sourcePath: '/blog/the-isle-player-esp/',
    answer: 'No. Start with box and distance. Snaplines and names can wait until you still have a clear view of the character and stamina UI.',
    detail: 'Snaplines help only after you already know who is nearby. They add clutter on a forest hunt.',
    tip: 'Add names next, then snaplines. Change one toggle per test loop.',
  }),
  guideDiscussion({
    slug: 'what-should-i-send-to-support',
    title: 'What should I include when I contact support?',
    upvotes: 16,
    excerpt: 'Order email, Windows version, Evrima branch, and the exact error save a back-and-forth.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Isle Hacks Support',
    sourcePath: '/support/',
    answer: 'Include the checkout email, Windows 10 or 11, whether you are on Evrima, and the exact loader, Steam, or Easy Anti-Cheat message.',
    detail: 'A screenshot of the error is more useful than “it does not work.” Status and setup notes can answer patch questions before you write in.',
    tip: 'Check FAQ and status first. If you still need help, the Support page lists checkout chat and email.',
  }),
  guideDiscussion({
    slug: 'are-resource-markers-listed',
    title: 'Are fruit, water, and corpse markers listed?',
    upvotes: 34,
    excerpt: 'Resource ESP is on the current listing. Treat it as an optional world overlay.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle ESP terminology',
    sourcePath: '/blog/the-isle-esp-terminology/',
    answer: 'Yes. Fruit, water, corpse, and gore markers are listed as optional world overlays.',
    detail: 'Enable them after player and dinosaur ESP are readable on Evrima.',
    tip: 'Use max-distance filters so resource markers do not cover combat readouts.',
  }),
  guideDiscussion({
    slug: 'are-silent-aim-or-triggerbot-listed',
    title: 'Are silent aim or triggerbot listed on Isle Hacks?',
    upvotes: 40,
    excerpt: 'Those modules are not on the current listing. Aim assistance is the combat option that is listed.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle aimbot and aim assistance options',
    sourcePath: '/blog/the-isle-aimbot/',
    answer: 'Silent aim and triggerbot are not listed. Aim assistance is optional combat help when the build includes it.',
    detail: 'Check status after Evrima or Easy Anti-Cheat updates before enabling combat modules.',
    tip: 'Build a readable ESP profile first, then decide whether you want aim assistance.',
  }),
  guideDiscussion({
    slug: 'can-i-preview-overlays',
    title: 'Can I preview overlays before checkout?',
    upvotes: 52,
    excerpt: 'The preview gallery shows ESP, radar, and health layers from the current listing.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'The Isle Hacks Preview',
    sourcePath: '/preview/',
    answer: 'Use the preview gallery and feature pages to review listed modules before you buy.',
    detail: 'Screenshots show player ESP, dinosaur ESP, health readouts, and radar examples from the current build.',
    tip: 'Compare the store plan list with the preview gallery so you know what both plans include.',
  }),
  guideDiscussion({
    slug: 'does-it-run-on-macos',
    title: 'Does the current listing work on macOS or Linux?',
    upvotes: 26,
    excerpt: 'The listing is Windows 10/11 PC and Evrima-only. macOS and Linux are not listed.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'The Isle hacks PC setup on Windows',
    sourcePath: '/blog/the-isle-hacks-pc-setup/',
    answer: 'No. The vendor listing is Windows 10 and 11 on PC with the Evrima branch.',
    detail: 'macOS and Linux installs are not listed as supported platforms.',
    tip: 'Confirm the Steam branch and Windows version before checkout.',
  }),
  guideDiscussion({
    slug: 'forum-or-blog',
    title: 'How is the forum different from The Isle intel?',
    upvotes: 21,
    excerpt: 'The blog is the long-form guide. The forum is short Q&A that points back to those guides.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'The Isle Intel',
    sourcePath: '/blog/',
    answer: 'Blog articles are long-form guides. Forum threads summarize common questions with links to the source article.',
    detail: 'Use the blog for setup order and terminology. Use the forum for quick answers tied to a guide.',
    tip: 'Start on the blog index if you are new; use forum search for a specific question.',
  }),
  guideDiscussion({
    slug: 'how-to-get-setup-help',
    title: 'How do I get setup help after checkout?',
    upvotes: 19,
    excerpt: 'Include order email, Windows version, Evrima branch, and the exact error text.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Isle Hacks Support',
    sourcePath: '/support/',
    answer: 'Open the Support page with your checkout email, Windows build, Evrima branch, and exact error message.',
    detail: 'Screenshots of loader, Steam, or Easy Anti-Cheat errors speed up troubleshooting.',
    tip: 'Check status and FAQ first so support can focus on your specific setup error.',
  }),
  guideDiscussion({
    slug: 'is-cloud-dma-required',
    title: 'Is Cloud DMA required for the listed features?',
    upvotes: 33,
    excerpt: 'The vendor lists Cloud DMA for full functionality. Confirm that before you buy.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'The Isle hacks PC setup on Windows',
    sourcePath: '/blog/the-isle-hacks-pc-setup/',
    answer: 'The vendor notes Cloud DMA for full functionality. Confirm that in checkout and setup notes.',
    detail: 'Windows PC install alone may not cover the complete module set if DMA is required.',
    tip: 'Read the setup page before you buy hardware or a lifetime plan.',
  }),
  guideDiscussion({
    slug: 'radar-or-esp-first',
    title: 'Should I start with radar or ESP boxes?',
    upvotes: 45,
    excerpt: 'Radar is a local cue. ESP identifies the contact. Most first-run profiles use both at short range.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle radar features for local rotations',
    sourcePath: '/blog/the-isle-radar-features/',
    answer: 'Start with player ESP box and distance, then add a short-range radar ring.',
    detail: 'Radar tells you something is nearby; ESP tells you who or what it is.',
    tip: 'Keep both ranges short on your first Evrima session.',
  }),
  guideDiscussion({
    slug: 'should-i-set-a-panic-key',
    title: 'Should I set a panic key before joining a server?',
    upvotes: 37,
    excerpt: 'Yes. Save a conservative profile and a panic key before a populated Evrima server.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle hacks PC setup on Windows',
    sourcePath: '/blog/the-isle-hacks-pc-setup/',
    answer: 'Set a panic key and save a minimal ESP profile before you join a busy server.',
    detail: 'Practice in a quiet area first so you know the toggle works.',
    tip: 'Test the panic key once per patch day after status checks.',
  }),
  guideDiscussion({
    slug: 'status-page-or-store',
    title: 'Should I trust the store page or the status page?',
    upvotes: 42,
    excerpt: 'The store lists modules and plans. Status is the live compatibility check after Evrima or Easy Anti-Cheat updates.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'The Isle Status',
    sourcePath: '/status/',
    answer: 'Use the store for plans and listed modules. Use status for current compatibility after patches.',
    detail: 'A module can stay on the store list while status marks the build unavailable after an update.',
    tip: 'Check status on patch days even if your saved profile worked yesterday.',
  }),
  guideDiscussion({
    slug: 'what-do-esp-terms-mean',
    title: 'What do the ESP terms mean in the glossary?',
    upvotes: 30,
    excerpt: 'Box, name, distance, snapline, and visible-check each answer a different question on Evrima.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle ESP terminology',
    sourcePath: '/blog/the-isle-esp-terminology/',
    answer: 'Player ESP marks humans. Dinosaur ESP marks creatures. World overlays mark resources and corpses.',
    detail: 'Each toggle answers a different question—who, what species, and what object.',
    tip: 'Enable one group at a time until the overlay stays readable.',
  }),
  guideDiscussion({
    slug: 'what-to-review-before-buying',
    title: 'What should I review before buying Isle Hacks?',
    upvotes: 58,
    excerpt: 'Features, plans, status, and setup—in that order—before you open checkout.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'The Isle hacks for Evrima',
    sourcePath: '/blog/the-isle-hacks-evrima/',
    answer: 'Review features, compare monthly and lifetime plans, check status, then read setup notes.',
    detail: 'Confirm Evrima on Windows PC and Cloud DMA notes if you need the full module set.',
    tip: 'Open checkout only after status shows the build is available for your branch.',
  }),
  guideDiscussion({
    slug: 'when-to-enable-health-esp',
    title: 'When should I turn health ESP on?',
    upvotes: 35,
    excerpt: 'Health, stamina, and growth are useful before a fight—not as a default overlay.',
    category: 'Guides & Hunts',
    categoryTone: 'blue',
    sourceTitle: 'The Isle health ESP: health, stamina, and growth',
    sourcePath: '/blog/the-isle-health-esp/',
    answer: 'Enable health ESP when you are deciding whether to engage, not on every casual rotation.',
    detail: 'Pair health readouts with a short max distance so fight UI stays readable.',
    tip: 'Drop growth readouts first if the overlay feels crowded.',
  }),
];

export function getForumPost(slug: string) {
  return forumPosts.find((post) => post.slug === slug);
}

export const forumPosts: ForumPost[] = [
  ...additionalGuidePosts,
  {
    slug: 'evrima-or-legacy',
    category: 'General',
    categoryTone: 'purple',
    title: 'Does the current listing work on Legacy The Isle?',
    excerpt: 'The store notes Evrima-only. Sharing what that means before checkout.',
    author: 'guide_team',
    age: '3 days ago',
    commentsCount: 2,
    upvotes: 29,
    flair: 'Compatibility',
    sourceTitle: 'The Isle hacks for Evrima',
    sourcePath: '/blog/the-isle-hacks-evrima/',
    body: [
      'The current vendor listing is Evrima-only. Do not assume the same access works on a Legacy install.',
      'Confirm the Steam branch before you buy. After a patch, re-check the status page even if you stayed on Evrima.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 2,
        body: 'If Steam is on the wrong branch, setup notes for Evrima will not apply.',
      },
    ],
  },
  {
    slug: 'eac-after-patch',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'What should I do after an Evrima or Easy Anti-Cheat update?',
    excerpt: 'Compatibility can change after a patch. Status first, launch second.',
    author: 'guide_team',
    age: '4 days ago',
    commentsCount: 2,
    upvotes: 46,
    flair: 'Status',
    sourceTitle: 'The Isle Easy Anti-Cheat notes',
    sourcePath: '/blog/the-isle-compatibility-eac/',
    body: [
      'The Isle Evrima launches through Easy Anti-Cheat. After a patch, treat compatibility as unknown until you re-check status.',
      'This community does not treat “undetected” as a permanent label. Stop if a build is marked unavailable.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 3,
        body: 'Game-client EAC install errors are different from product setup errors. Repair The Isle files first if the game itself will not launch.',
      },
    ],
  },
  {
    slug: 'monthly-or-lifetime',
    category: 'Community',
    categoryTone: 'green',
    title: 'Monthly or lifetime: which plan matches a short trial?',
    excerpt: 'Same listed features, different duration and price.',
    author: 'guide_team',
    age: '5 days ago',
    commentsCount: 1,
    upvotes: 22,
    flair: 'Plans',
    sourceTitle: 'Isle Hacks monthly vs lifetime',
    sourcePath: '/blog/the-isle-monthly-vs-lifetime/',
    body: [
      'Monthly is $35 for 30 days. Lifetime is $150. Both list the same ESP, radar, and aim assistance modules.',
      'Choose monthly if you want to evaluate the overlay first. Choose lifetime only if you already want longer access.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 1,
        body: 'A lifetime plan does not freeze Easy Anti-Cheat. Re-check status after updates either way.',
      },
    ],
  },
];
