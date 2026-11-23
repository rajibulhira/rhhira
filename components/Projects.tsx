"use client";

import { useEffect, useRef, useState } from "react";
import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";
import { BlueprintArt } from "./Art";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/lib/projects";
import { asset } from "@/lib/site";

type Filter = "all" | Project["category"];

function Thumb({ p, alt, eager = false }: { p: Project; alt: string; eager?: boolean }) {
  if (!p.image) return <BlueprintArt variant={p.category} />;
  return (
    <img
      src={asset(p.image)}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
  );
}

export function Projects() {
  const { t, lang } = useApp();
  const pr = t.projects;
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);
  const tabs: { id: Filter; label: string }[] = [
    { id: "all", label: pr.filters.all },
    { id: "structural", label: pr.filters.structural },
    { id: "architectural", label: pr.filters.architectural },
  ];

  const openProject = (p: Project) => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setSelected(p);
  };

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (selected && !d.open) d.showModal();
    if (!selected && d.open) d.close();
  }, [selected]);

  const alt = (p: Project) => p.imageAlt?.[lang] ?? p.title[lang];

  return (
    <section id="projects" aria-labelledby="projects-title" className="section bg-surface/60">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="projects-title" kicker={pr.kicker} title={pr.title} intro={pr.intro} />

          <div role="tablist" aria-label={pr.title} className="flex gap-1 rounded-full border border-line bg-card p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === tab.id ? "bg-navy text-white dark:bg-steel" : "text-muted hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} as="li" delay={i * 80}>
              <button
                type="button"
                onClick={() => openProject(p)}
                className="card group block w-full overflow-hidden text-left transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
                aria-label={`${p.title[lang]} — ${t.ui.viewDetails}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <Thumb p={p} alt={alt(p)} />
                  <span className="absolute left-3 top-3 rounded-full bg-bg/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent backdrop-blur">
                    {pr.categoryLabel[p.category]}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className={`text-lg font-semibold ${p.placeholder ? "italic text-muted" : "text-ink"}`}>{p.title[lang]}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                    <Icon name="pin" className="h-3.5 w-3.5" />
                    {p.location[lang]} · {p.year}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">{p.description[lang]}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {t.ui.viewDetails}
                    <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-sm text-muted">{pr.addYourOwn}</p>
      </div>

      {/* Lightbox / details (native <dialog>: focus trap + Esc handled by the browser) */}
      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={() => {
          setSelected(null);
          lastFocus.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto w-[min(960px,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] overflow-hidden rounded-2xl border border-line bg-card p-0 text-ink shadow-lift"
      >
        {selected && (
          <div className="grid max-h-[calc(100dvh-2rem)] overflow-y-auto md:grid-cols-5">
            <div className="relative aspect-[4/3] bg-navy md:col-span-3 md:aspect-auto md:min-h-[420px]">
              <Thumb p={selected} alt={alt(selected)} eager />
            </div>
            <div className="p-6 sm:p-8 md:col-span-2">
              <p className="kicker">{pr.categoryLabel[selected.category]}</p>
              <h3 id="project-dialog-title" className="mt-3 text-2xl font-semibold">
                {selected.title[lang]}
              </h3>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-accent">{pr.locationLabel}</dt>
                  <dd className="mt-1 text-ink">{selected.location[lang]}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-accent">{pr.yearLabel}</dt>
                  <dd className="mt-1 text-ink">{selected.year}</dd>
                </div>
              </dl>
              <p className="mt-5 text-base leading-relaxed text-ink/90">{selected.description[lang]}</p>
              {selected.placeholder && (
                <p className="mt-5 rounded-lg border border-dashed border-line px-3 py-2 text-xs italic text-muted">{pr.placeholderNote}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={t.ui.close}
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg/90 text-ink shadow-soft backdrop-blur transition hover:text-accent"
            >
              <Icon name="x" />
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}
