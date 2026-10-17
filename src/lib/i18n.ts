import { useSearch } from "@tanstack/react-router";

export type Lang = "ar" | "en";
export type T = { ar: string; en: string };

export function useLang(): Lang {
  const search = useSearch({ strict: false }) as { lang?: string };
  return search.lang === "en" ? "en" : "ar";
}

/** Search params to keep the current language on internal links. */
export function langSearch(lang: Lang): { lang?: "en" } {
  return lang === "en" ? { lang: "en" } : {};
}

export function tr(t: T, lang: Lang) {
  return t[lang];
}
