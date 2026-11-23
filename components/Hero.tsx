"use client";

import { useApp } from "./Providers";
import { Icon } from "./Icons";
import { StructuralFrame } from "./Art";
import { asset, site } from "@/lib/site";

export function Hero() {
  const { t } = useApp();
  const h = t.hero;

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 sm:pt-36">
      {/* Architectural background */}
      <div className="blueprint fade-mask pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-[620px] w-[620px] rounded-full bg-steel/10 blur-3xl dark:bg-steel/15"
        aria-hidden="true"
      />
      <StructuralFrame className="pointer-events-none absolute -left-16 bottom-0 -z-10 hidden h-[420px] w-auto text-steel/25 lg:block" />

      <div className="container-x grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Text */}
        <div className="lg:col-span-7">
          <p className="kicker animate-[fadeUp_.7s_both]">{h.eyebrow}</p>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-bold leading-[1.1] text-navy dark:text-white sm:text-5xl lg:text-[3.5rem]"
          >
            <span className="block text-2xl font-medium text-muted sm:text-3xl">{h.greetingLead}</span>
            <span className="mt-1 block">{h.name}</span>
          </h1>

          <div className="mt-6 flex items-center gap-3" aria-hidden="true">
            <span className="h-0.5 w-20 origin-left animate-drawline bg-accent" />
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{h.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              {h.explore}
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {h.contact}
            </a>
            <a
              href={asset(site.cvPath)}
              download={site.cvFileName}
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              <Icon name="download" className="h-4 w-4" />
              {t.ui.downloadCv}
            </a>
          </div>

          {/* Credentials */}
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {h.facts.map((f) => (
              <div key={f.label} className="bg-card/90 p-4 backdrop-blur">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{f.label}</dt>
                <dd className="mt-1.5 text-sm font-semibold leading-snug text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait in an architectural arch frame */}
        <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md">
          {/* offset frame lines */}
          <div
            className="absolute -inset-3 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-3xl border border-accent/40"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-navy shadow-lift">
            <img
              src={asset(site.images.portrait)}
              alt="Portrait of Engr. Md. Rajibul Huq Hira"
              width={1269}
              height={1536}
              fetchPriority="high"
              className="h-full w-full origin-[50%_30%] scale-[1.22] object-cover object-[50%_0%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/80 to-transparent" aria-hidden="true" />
          </div>

          {/* Floating credential card */}
          <div className="absolute -bottom-5 -left-3 animate-floaty rounded-2xl border border-line bg-card p-4 shadow-lift sm:-left-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white dark:bg-steel">
                <Icon name="building" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold leading-tight text-ink">{h.cardTitle}</p>
                <p className="mt-0.5 text-xs text-muted">{h.cardLine}</p>
              </div>
            </div>
          </div>

          {/* Dimension tick, purely decorative */}
          <div className="absolute -right-6 top-1/3 hidden h-40 items-center sm:flex" aria-hidden="true">
            <div className="relative h-full w-px bg-accent/50">
              <span className="absolute -left-1.5 top-0 h-px w-3 bg-accent/70" />
              <span className="absolute -left-1.5 bottom-0 h-px w-3 bg-accent/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
