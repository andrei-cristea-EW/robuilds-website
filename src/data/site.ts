export const SITE = {
  name: 'RO Builds Motorsport',
  shortName: 'RO Builds',
  url: 'https://robuilds.ro',
  email: 'robuilds.motorsport@gmail.com',
  phone: '+40 741 220 600',
  phoneDigits: '+40741220600',
  whatsappDigits: '40741220600',
  whatsappUrl: 'https://wa.me/40741220600',
  form230Url: 'https://formular230.ro/asociatia-club-sportiv-rbuilds-motorsport',
};

export const SOCIALS = [
  {
    key: 'youtube',
    label: 'YouTube',
    handle: '@robuilds',
    url: 'https://www.youtube.com/@robuilds',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@ro.builds',
    url: 'https://www.instagram.com/ro.builds',
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    handle: '@ro_builds',
    url: 'https://tiktok.com/@ro_builds',
  },
] as const;

export const PARTNERS = [
  { key: 'pakelo', name: 'Pakelo Lubricants', logo: '/logos/partners/pakelo.png', url: 'https://www.pakelo.com' },
  { key: 'temco', name: 'Temco', logo: '/logos/partners/temco.png', url: '' },
  { key: 'best-wrap', name: 'Best Wrap', logo: '/logos/partners/best-wrap.png', url: '' },
  { key: 'hidro-transfer', name: 'Hidro Transfer', logo: '/logos/partners/hidro-transfer.png', url: '' },
  { key: 'wolf', name: 'Wolf Engineering', logo: '/logos/partners/wolf-engineering.png', url: '' },
  { key: 'digital-mob', name: 'Digital M.O.B', logo: '/logos/partners/digital-mob.png', url: 'https://www.digitalmob.ro' },
] as const;

export const TEAM = [
  {
    key: 'andrei',
    photo: '/images/team/andrei.webp',
    photoFallback: '/images/team/andrei.jpg',
    instagram: '',
  },
  {
    key: 'razvan',
    photo: '/images/team/razvan.webp',
    photoFallback: '/images/team/razvan.jpg',
    instagram: '',
  },
  {
    key: 'alex',
    photo: '/images/team/alex.webp',
    photoFallback: '/images/team/alex.jpg',
    instagram: '',
  },
  {
    key: 'radu',
    photo: '/images/team/radu.webp',
    photoFallback: '/images/team/radu.jpg',
    instagram: '',
  },
] as const;

export const REACH = [
  { key: 'unique', value: 25.8, unit: 'M' },
  { key: 'ig_reach', value: 42, unit: 'M' },
  { key: 'tv', value: 12.9, unit: 'M' },
  { key: 'radio', value: 2.4, unit: 'M' },
  { key: 'attendance', value: 11.2, unit: 'K' },
  { key: 'yt_subs', value: 6.3, unit: 'K' },
  { key: 'ig_followers', value: 3.7, unit: 'K' },
  { key: 'tt_followers', value: 1.2, unit: 'K' },
] as const;

export const RESULTS_ORDER = ['y2024', 'y2025', 'y2026', 'future'] as const;
