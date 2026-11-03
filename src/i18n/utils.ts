import { defaultLang, languages, translatedRoutes, ui, type Lang, type UIKey } from './ui';

const normalize = (path: string) => {
  const clean = path.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
};

/** Language of the current URL: /ja/... is Japanese, everything else English. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

/** Translation lookup that falls back to English for any missing key. */
export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Strip the language prefix: /ja/analysis -> /analysis, /ja -> /. */
export function getRoutePath(pathname: string): string {
  const path = normalize(pathname);
  for (const lang of Object.keys(languages)) {
    if (lang === defaultLang) continue;
    if (path === `/${lang}`) return '/';
    if (path.startsWith(`/${lang}/`)) return path.slice(lang.length + 1);
  }
  return path;
}

export function hasTranslation(route: string): boolean {
  return translatedRoutes.includes(normalize(route));
}

/** Build the URL of an English route in a given language. */
export function localizePath(route: string, lang: Lang): string {
  const path = normalize(route);
  if (lang === defaultLang) return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

/**
 * Internal link for a page in the reader's language. If the page has no
 * Japanese edition yet, the English URL is returned, so the reader is never
 * sent to a 404.
 */
export function localizedHref(route: string, lang: Lang): string {
  if (lang === defaultLang || /^https?:/.test(route)) return route;
  return hasTranslation(route) ? localizePath(route, lang) : route;
}

/**
 * Every language edition of the current page, for hreflang tags and the
 * language switcher. Returns only English when no Japanese edition exists.
 */
export function getAlternates(pathname: string): { lang: Lang; path: string }[] {
  const route = getRoutePath(pathname);
  const alternates: { lang: Lang; path: string }[] = [{ lang: defaultLang, path: route }];
  if (hasTranslation(route)) {
    for (const lang of Object.keys(languages) as Lang[]) {
      if (lang !== defaultLang) alternates.push({ lang, path: localizePath(route, lang) });
    }
  }
  return alternates;
}
