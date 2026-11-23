"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { content, type Content } from "@/lib/content";
import type { Lang } from "@/lib/site";

type Theme = "light" | "dark";

type Ctx = {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  toggleLang: () => void;
  t: Content;
};

const AppContext = createContext<Ctx | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLang] = useState<Lang>("en");

  // Read persisted preferences after mount (the <head> script has already applied the theme class, so no flash).
  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "bn" || saved === "en") setLang(saved);
    } catch {
      /* storage unavailable — keep defaults */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "bn" : "en";
      try {
        localStorage.setItem("lang", next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, lang, toggleLang, t: content[lang] }),
    [theme, toggleTheme, lang, toggleLang],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <Providers>");
  return ctx;
}
