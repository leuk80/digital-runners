import { ui, defaultLang } from './ui';
import type { Lang, UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang][key] ?? ui[defaultLang][key]) as string;
  };
}

/** Returns the equivalent path in the target language */
export function getAlternatePath(currentPath: string, targetLang: Lang): string {
  const segments = currentPath.split('/').filter(Boolean);
  if (segments.length === 0) return `/${targetLang}/`;

  const [currentLang, ...rest] = segments;
  if (currentLang in ui) {
    return rest.length > 0 ? `/${targetLang}/${rest.join('/')}` : `/${targetLang}/`;
  }
  return `/${targetLang}/`;
}

export type { Lang, UIKey };
