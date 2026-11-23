"use client";

import { useEffect, useState } from "react";
import { useApp } from "./Providers";
import { Icon } from "./Icons";
import { asset, sectionIds, site, type SectionId } from "@/lib/site";

export function Header() {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  // Header shadow after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id as SectionId);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Close the mobile menu with Escape; lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const iconBtn =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink transition hover:border-accent hover:text-accent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 shadow-soft backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {t.ui.skip}
      </a>

      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8">
        {/* Brand: personal wordmark + organization logo */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <a href="#home" className="group flex flex-col leading-none" aria-label={`${site.brand} — ${t.nav.home}`}>
            <span className="brand-wordmark font-display text-lg font-bold tracking-[0.06em] text-navy dark:text-white sm:text-xl">{site.brand}</span>
            <span className="mt-1.5 hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:block">
              {lang === "en" ? "Civil & Structural Engineer" : t.footer.tagline}
            </span>
          </a>
          <span className="hidden h-8 w-px bg-line md:block" aria-hidden="true" />
          <a
            href="#company"
            className="hidden items-center rounded-md md:flex dark:bg-white dark:px-2 dark:py-0.5"
            aria-label={site.company}
          >
            <img
              src={asset(site.images.logo)}
              alt={`${site.company} logo`}
              width={900}
              height={585}
              className="h-11 w-auto"
              decoding="async"
            />
          </a>
        </div>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden min-[1320px]:block">
          <ul className="flex items-center gap-1">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "page" : undefined}
                  className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition-colors ${
                    active === id ? "text-accent" : "text-muted hover:text-ink"
                  }`}
                >
                  {t.nav[id]}
                  <span
                    className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left rounded bg-accent transition-transform duration-300 ${
                      active === id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className={`${iconBtn} w-auto px-3.5 text-xs font-bold`}
            aria-label={t.ui.language.switchTo}
            lang={lang === "en" ? "bn" : "en"}
          >
            {t.ui.language.label}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className={iconBtn}
            aria-label={theme === "dark" ? t.ui.theme.toLight : t.ui.theme.toDark}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`${iconBtn} min-[1320px]:hidden`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.ui.menu.close : t.ui.menu.open}
          >
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="min-[1320px]:hidden"
      >
        <nav aria-label="Mobile" className="container-x max-h-[calc(100dvh-4rem)] overflow-y-auto pb-8 pt-2">
          <ul className="divide-y divide-line">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? "page" : undefined}
                  className={`flex items-center justify-between py-4 text-lg font-semibold ${
                    active === id ? "text-accent" : "text-ink"
                  }`}
                >
                  {t.nav[id]}
                  <Icon name="arrow-right" className="h-4 w-4 opacity-50" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-4 rounded-xl border border-line bg-card p-4">
            <span className="rounded-md dark:bg-white dark:px-2 dark:py-0.5">
              <img src={asset(site.images.logo)} alt={`${site.company} logo`} width={900} height={585} className="h-10 w-auto" decoding="async" />
            </span>
            <a href={asset(site.cvPath)} download={site.cvFileName} className="btn btn-primary ml-auto !px-4 !py-2.5">
              <Icon name="download" className="h-4 w-4" />
              {t.ui.downloadCv}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
