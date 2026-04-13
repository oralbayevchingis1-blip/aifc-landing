import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "ru" | "en";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "aifc-landing-language";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ru" || saved === "en") return saved;
    return "ru";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLanguage must be used within I18nProvider");
  return ctx;
}
