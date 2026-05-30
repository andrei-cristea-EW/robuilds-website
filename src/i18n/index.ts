import ro from './ro.json';
import en from './en.json';

export type Locale = 'ro' | 'en';

const dicts = { ro, en } as const;

export function t(locale: Locale) {
  return dicts[locale];
}

export function altLocale(locale: Locale): Locale {
  return locale === 'ro' ? 'en' : 'ro';
}

export function localePath(locale: Locale, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === 'ro') return '/' + clean;
  return '/en/' + clean;
}
