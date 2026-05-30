export type Product = {
  slug: string;
  name: string;
  price: number;
  priceFrom?: boolean;
  status: 'available' | 'sold_out';
  category: 'apparel' | 'parts';
  // First image is hero; rest are gallery.
  images: string[];
  blurb: { ro: string; en: string };
};

export const PRODUCTS: Product[] = [
  {
    slug: 'tokyo-sunset-tee',
    name: 'Tokyo Sunset',
    price: 167,
    status: 'available',
    category: 'apparel',
    images: ['/images/drift-cone-hit-smoke.webp'],
    blurb: {
      ro: 'Tricou ediție limitată. Inspirat de nopțile pe pistă.',
      en: 'Limited-edition tee. Inspired by late nights on track.',
    },
  },
  {
    slug: 'signature-tee',
    name: 'Signature',
    price: 155,
    status: 'available',
    category: 'apparel',
    images: ['/images/drift-action-pakelo-track.webp'],
    blurb: {
      ro: 'Tricoul oficial al echipei. Bumbac greu, print rezistent.',
      en: 'Official team tee. Heavy cotton, durable print.',
    },
  },
  {
    slug: 'sapca-robuilds-team',
    name: 'Șapcă RoBuilds Team',
    price: 120,
    status: 'sold_out',
    category: 'apparel',
    images: ['/images/team-paddock-group.webp'],
    blurb: {
      ro: 'Șapcă cu broderie echipă. Stoc epuizat — revenim cu noul lot.',
      en: 'Embroidered team cap. Sold out — restocking soon.',
    },
  },
  {
    slug: 'kit-rigidizare-punte-spate-e46',
    name: 'Kit rigidizare punte spate BMW E46',
    price: 420,
    status: 'sold_out',
    category: 'parts',
    images: ['/images/bmw-e46-night-rear.webp'],
    blurb: {
      ro: 'Kit complet pentru rigidizarea punții spate. Testat la curse.',
      en: 'Complete rear subframe reinforcement kit. Race-tested.',
    },
  },
  {
    slug: 'stopuri-drift-e46-coupe',
    name: 'Stopuri pentru drift BMW E46 Coupe',
    price: 340,
    priceFrom: true,
    status: 'available',
    category: 'parts',
    images: ['/images/bmw-e46-night-rear.webp'],
    blurb: {
      ro: 'Stopuri dedicate pentru drift, cu efect de "smoke trail". Lumini LED puternice.',
      en: 'Drift-spec tail lights with strong LED output for smoke-trail visibility.',
    },
  },
  {
    slug: 'frana-de-mana-universala',
    name: 'Frână de mână universală',
    price: 420,
    priceFrom: true,
    status: 'available',
    category: 'parts',
    images: ['/images/bmw-e46-night-side.webp'],
    blurb: {
      ro: 'Frână de mână hidraulică universală. Montaj rapid, fiabilitate de competiție.',
      en: 'Universal hydraulic handbrake. Quick install, race-grade reliability.',
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
