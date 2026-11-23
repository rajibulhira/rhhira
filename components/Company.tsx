"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { Icon, FacebookIcon } from "./Icons";
import { SectionHeading, isPlaceholder } from "./SectionHeading";
import { StructuralFrame } from "./Art";
import { asset, site } from "@/lib/site";

export function Company() {
  const { t } = useApp();
  const c = t.company;

  return (
    <section id="company" aria-labelledby="company-title" className="section relative isolate overflow-hidden bg-navy text-white">
      <div className="blueprint pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <StructuralFrame className="pointer-events-none absolute -right-10 top-10 -z-10 h-[460px] w-auto text-steel/20" />

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="company-title" kicker={c.kicker} title={c.title} light />
            <Reveal delay={80}>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white/90">
                <Icon name="badge" className="h-4 w-4 text-steel" />
                {site.fullName} — {c.role}
              </p>
            </Reveal>
            <div className="mt-6 space-y-4">
              {c.paragraphs.map((p, i) => (
                <Reveal key={i} delay={120 + i * 80}>
                  <p
                    className={
                      isPlaceholder(p)
                        ? "rounded-xl border border-dashed border-white/20 px-4 py-3 text-base italic text-white/60"
                        : "text-base leading-relaxed text-white/80 sm:text-lg"
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={260}>
              <a
                href={site.contact.companyFacebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-8 bg-white text-navy shadow-soft hover:-translate-y-0.5 hover:bg-steel hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
                {c.visit}
                <Icon name="external" className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* Official logo — used as supplied, on a white card so its colours stay true */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-3xl bg-white p-8 shadow-lift sm:p-10">
              <img
                src={asset(site.images.logo)}
                alt={`${site.company} — ${site.companyTagline}`}
                width={900}
                height={585}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-steel">{c.servicesTitle}</h3>
          </Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.map((s, i) => (
              <Reveal
                key={s.name}
                as="li"
                delay={i * 80}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-steel/60 hover:bg-white/[0.07]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-steel/20 text-steel">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <h4 className="mt-4 text-lg font-semibold text-white">{s.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
