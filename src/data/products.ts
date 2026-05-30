export type Variant = { label: { ro: string; en: string }; price: number };

export type Product = {
  slug: string;
  name: string;
  price: number;          // "from" price = min variant, or the single price
  priceFrom?: boolean;    // render "de la / from"
  status: 'available' | 'sold_out';
  category: string;       // CATEGORIES key
  images: string[];       // base paths, NO extension; [0] = hero, rest = gallery
  blurb: { ro: string; en: string };
  variants?: Variant[];
};

export const CATEGORIES = [
  {
    key: 'tail-lights',
    title: { ro: 'Stopuri 3D', en: '3D-printed tail-lights' },
    blurb: {
      ro: 'Făcute de noi. Mai ieftine și mai arătoase decât stopurile second-hand, ușor și rapid de montat, mereu pe stoc.',
      en: 'Made by us. Cheaper and better-looking than second-hand tail-lights, quick and easy to fit, always in stock.',
    },
  },
] as const;

const WITH_KIT = { ro: 'Cu kit lumini', en: 'With light kit' };
const NO_LIGHTS = { ro: 'Fără lumini', en: 'Without lights' };

export const PRODUCTS: Product[] = [
  {
    slug: 'stopuri-3d-bmw-e46',
    name: 'Stopuri 3D BMW E46',
    price: 290,
    priceFrom: true,
    status: 'available',
    category: 'tail-lights',
    images: ['/images/shop/tail-e46-2', '/images/shop/tail-e46-1', '/images/shop/tail-e46-3', '/images/shop/tail-e46-4'],
    blurb: {
      ro: 'Stopuri printate 3D pentru BMW E46 Coupé. Montaj rapid, aspect agresiv.',
      en: '3D-printed tail-lights for the BMW E46 Coupé. Quick fit, aggressive look.',
    },
    variants: [
      { label: WITH_KIT, price: 420 },
      { label: NO_LIGHTS, price: 290 },
    ],
  },
  {
    slug: 'stopuri-3d-bmw-e36',
    name: 'Stopuri 3D BMW E36',
    price: 290,
    status: 'available',
    category: 'tail-lights',
    images: ['/images/shop/tail-e36-1', '/images/shop/tail-e36-2', '/images/shop/tail-e36-3', '/images/shop/tail-e36-4'],
    blurb: {
      ro: 'Stopuri printate 3D pentru BMW E36. Montaj rapid, aspect agresiv.',
      en: '3D-printed tail-lights for the BMW E36. Quick fit, aggressive look.',
    },
  },
  {
    slug: 'stopuri-3d-bmw-f22',
    name: 'Stopuri 3D BMW F22',
    price: 490,
    priceFrom: true,
    status: 'available',
    category: 'tail-lights',
    images: ['/images/shop/tail-f22-6', '/images/shop/tail-f22-2', '/images/shop/tail-f22-7', '/images/shop/tail-f22-1', '/images/shop/tail-f22-3', '/images/shop/tail-f22-4', '/images/shop/tail-f22-5'],
    blurb: {
      ro: 'Stopuri printate 3D pentru BMW F22. Montaj rapid, aspect agresiv.',
      en: '3D-printed tail-lights for the BMW F22. Quick fit, aggressive look.',
    },
    variants: [
      { label: WITH_KIT, price: 550 },
      { label: NO_LIGHTS, price: 490 },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
