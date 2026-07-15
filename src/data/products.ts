export type Variant = { label: { ro: string; en: string }; price: number };

export type Product = {
  slug: string;
  name: string | { ro: string; en: string };
  price?: number;         // "from" price = min variant, or the single price; omit for "price on request"
  priceFrom?: boolean;    // render "de la / from"
  status: 'available' | 'sold_out';
  category: string;       // CATEGORIES key
  images: string[];       // base paths, NO extension; [0] = hero, rest = gallery
  blurb: { ro: string; en: string };
  description?: { ro: string[]; en: string[] };  // detail-page paragraphs
  variants?: Variant[];
};

export const CATEGORIES = [
  {
    key: 'tail-lights',
    title: { ro: 'Stopuri 3D', en: '3D-printed tail-lights' },
    blurb: {
      ro: 'Produse de noi. Mai ieftine și mai frumoase decât stopurile second-hand, ușor și rapid de montat, mereu pe stoc.',
      en: 'Made by us. Cheaper and better-looking than second-hand tail-lights, quick and easy to fit, always in stock.',
    },
  },
  {
    key: 'parts-3d',
    title: { ro: 'Alte Produse', en: 'Other products' },
    blurb: {
      ro: 'Produse de competiție concepute și produse de noi.',
      en: 'Race products we design and make ourselves.',
    },
  },
] as const;

const WITH_KIT = { ro: 'Cu kit lumini', en: 'With light kit' };
const NO_LIGHTS = { ro: 'Fără lumini', en: 'Without lights' };

export const PRODUCTS: Product[] = [
  {
    slug: 'stopuri-3d-bmw-e46',
    name: { ro: 'Stopuri 3D BMW E46', en: '3D Tail-Lights BMW E46' },
    price: 290,
    priceFrom: true,
    status: 'available',
    category: 'tail-lights',
    images: ['/images/shop/tail-e46-1', '/images/shop/tail-e46-2', '/images/shop/tail-e46-3'],
    blurb: {
      ro: 'Stopuri printate 3D pentru BMW E46 Coupé. Ieftine, ușor și rapid de montat, mereu pe stoc.',
      en: '3D-printed tail-lights for the BMW E46 Coupé. Affordable, quick and easy to fit, always in stock.',
    },
    variants: [
      { label: WITH_KIT, price: 420 },
      { label: NO_LIGHTS, price: 290 },
    ],
  },
  {
    slug: 'stopuri-3d-bmw-e36',
    name: { ro: 'Stopuri 3D BMW E36', en: '3D Tail-Lights BMW E36' },
    price: 290,
    status: 'available',
    category: 'tail-lights',
    images: ['/images/shop/tail-e36-1', '/images/shop/tail-e36-2', '/images/shop/tail-e36-3', '/images/shop/tail-e36-4'],
    blurb: {
      ro: 'Stopuri printate 3D pentru BMW E36. Ieftine, ușor și rapid de montat, mereu pe stoc.',
      en: '3D-printed tail-lights for the BMW E36. Affordable, quick and easy to fit, always in stock.',
    },
  },
  {
    slug: 'stopuri-3d-bmw-f22',
    name: { ro: 'Stopuri 3D BMW F22', en: '3D Tail-Lights BMW F22' },
    price: 490,
    priceFrom: true,
    status: 'available',
    category: 'tail-lights',
    images: ['/images/shop/tail-f22-6', '/images/shop/tail-f22-2', '/images/shop/tail-f22-7', '/images/shop/tail-f22-1', '/images/shop/tail-f22-3', '/images/shop/tail-f22-4', '/images/shop/tail-f22-5'],
    blurb: {
      ro: 'Stopuri printate 3D pentru BMW F22. Ieftine, ușor și rapid de montat, mereu pe stoc.',
      en: '3D-printed tail-lights for the BMW F22. Affordable, quick and easy to fit, always in stock.',
    },
    variants: [
      { label: WITH_KIT, price: 550 },
      { label: NO_LIGHTS, price: 490 },
    ],
  },
  {
    slug: 'cutie-diferential-quick-change',
    name: { ro: 'Cutie Pinioane QC Diff', en: 'QC Diff Gearset Box' },
    price: 190,
    status: 'available',
    category: 'parts-3d',
    images: ['/images/shop/qc-box-2', '/images/shop/qc-box-1'],
    blurb: {
      ro: 'Cutie de diferențial Quick-Change, printată 3D. Se poate personaliza pentru rapoartele tale.',
      en: '3D-printed quick-change differential gearbox. Customisable for your specific ratios.',
    },
  },
  {
    slug: 'kit-rigidizare-punte-spate-e46',
    name: { ro: 'Kit Rigidizare Punte Spate — BMW E46', en: 'Rear Subframe Reinforcement Kit — BMW E46' },
    price: 390,
    status: 'available',
    category: 'parts-3d',
    images: ['/images/shop/reinforce-1', '/images/shop/reinforce-2'],
    blurb: {
      ro: 'Plăci din oțel de 3 mm pentru ranforsarea punții spate. Previn fisurarea caroseriei.',
      en: '3 mm steel plates that reinforce the rear subframe mounts and prevent chassis cracking.',
    },
    description: {
      ro: [
        'Ruperea punctelor de prindere a punții spate este o problemă foarte comună la BMW E46.',
        'Kit-ul nostru pentru rigidizare rezolvă această problemă prin ranforsarea punții.',
        'Plăcile sunt făcute din oțel cu grosime de 3 mm și sunt proiectate să rigidizeze caroseria în zonele unde se atașează puntea, astfel distribuind forțele la care sunt supuse pe o suprafață mai mare.',
        'Acest kit este absolut necesar mașinilor de competiție, dar este recomandat și mașinilor de stradă pentru prevenirea fisurării caroseriei. Se pot fixa fie prin sudură MIG/TIG, fie prin sudură chimică.',
        'Recomandăm și oferim montare profesională.',
      ],
      en: [
        'Cracked rear subframe mounting points are a very common problem on the BMW E46.',
        'Our reinforcement kit solves this by strengthening the subframe mounting area.',
        "The plates are made from 3 mm steel and designed to stiffen the chassis where the subframe attaches, spreading the loads it's subjected to over a larger area.",
        'This kit is essential for competition cars and also recommended for street cars to prevent chassis cracking. They can be fitted either by MIG/TIG welding or with structural adhesive.',
        'We recommend and offer professional installation.',
      ],
    },
  },
  {
    slug: 'clante-portiera-universale',
    name: { ro: 'Clanțe Universale de Portieră', en: 'Universal Door Handles' },
    price: 190,
    status: 'available',
    category: 'parts-3d',
    images: [
      '/images/shop/door-handle-1',
      '/images/shop/door-handle-5',
      '/images/shop/door-handle-7',
      '/images/shop/door-handle-8',
      '/images/shop/door-handle-9',
      '/images/shop/door-handle-11',
      '/images/shop/door-handle-2',
      '/images/shop/door-handle-3',
      '/images/shop/door-handle-4',
      '/images/shop/door-handle-6',
      '/images/shop/door-handle-10',
    ],
    blurb: {
      ro: 'Clanțe plate universale, compatibile cu sistemul de închidere de BMW E46. Se montează pe orice tip de portieră.',
      en: 'Flat universal door handles, compatible with the BMW E46 latch system. Fit any door material.',
    },
    description: {
      ro: [
        'Clanțe de portieră universale, cu profil complet plat, gândite pentru portierele ușoare de competiție din fibră de sticlă, carbon-kevlar sau carbon.',
        'Sunt făcute compatibile cu sistemul de închidere (broasca) de BMW E46, așa că se leagă direct la mecanismul original, fără adaptări complicate.',
        'Fiind complet plate, se pot aplica pe orice material de portieră și pe practic orice mașină — soluția ideală după ce ai renunțat la panoul de ușă din serie.',
        'Se pot realiza în orice combinație de culori, ca să se potrivească cu interiorul sau livrea mașinii tale.',
      ],
      en: [
        'Universal door handles with a completely flat profile, designed for lightweight motorsport doors made from fiberglass, carbon-kevlar or full carbon.',
        'They are made compatible with the BMW E46 door latch system, so they connect straight to the factory-style mechanism with no awkward adapting.',
        "Because they're completely flat, they can be fitted to any door material and to virtually any car — the ideal solution once you've stripped out the standard door card.",
        'They can be made in any colour combination to match your interior or your car livery.',
      ],
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productName(p: Product, locale: 'ro' | 'en'): string {
  return typeof p.name === 'string' ? p.name : p.name[locale];
}
