"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { SectionHeading, isPlaceholder } from "./SectionHeading";

export function About() {
  const { t } = useApp();
  const a = t.about;

  return (
    <section id="about" aria-labelledby="about-title" className="section bg-surface/60">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading id="about-title" kicker={a.kicker} title={a.title} />
          <div className="mt-8 space-y-5">
            {a.paragraphs.map((p, i) =>
              isPlaceholder(p) ? (
                <Reveal key={i} delay={i * 80}>
                  <p className="rounded-xl border border-dashed border-line px-4 py-3 text-base italic leading-relaxed text-muted">{p}</p>
                </Reveal>
              ) : (
                <Reveal key={i} delay={i * 80}>
                  <p className="text-base leading-relaxed text-ink/90 sm:text-lg">{p}</p>
                </Reveal>
              ),
            )}
          </div>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{a.objectivesTitle}</h3>
          </Reveal>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {a.objectives.map((o, i) => (
              <Reveal key={o.title} as="li" delay={i * 90} className="card group relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="font-display text-4xl font-bold text-accent/25 transition-colors group-hover:text-accent/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-3 text-lg font-semibold text-ink">{o.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{o.text}</p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
