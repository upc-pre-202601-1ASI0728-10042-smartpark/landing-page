import { useCallback, useState } from "react";
import { content, type Content, type Locale } from "@/data/content";

export function useLanguage(initial: Locale = "es") {
  const [locale, setLocale] = useState<Locale>(initial);
  const t: Content = content[locale];

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  return { locale, setLocale, toggleLocale, t };
}
