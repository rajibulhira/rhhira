"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const { t } = useApp();
  const s = t.skills;

  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="container-x">
        <SectionHeading id="skills-title" kicker={s.kicker} title={s.title} intro={s.intro} />

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{s.softwareTitle}</h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.software.map((sw, i) => (
            <Reveal
              key={sw.name}
              as="li"
              delay={i * 80}
              className="card group relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-navy group-hover:text-white dark:group-hover:bg-steel">
                <Icon name="layers" className="h-5 w-5" />
              </span>
              <h4 className="mt-5 font-display text-xl font-semibold text-ink">{sw.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{sw.text}</p>
            </Reveal>
          ))}
        </ul>

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{s.expertiseTitle}</h3>
        <ul className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {s.expertise.map((ex, i) => (
            <Reveal key={ex.name} as="li" delay={i * 100} className="relative bg-card p-7">
              <span className="font-display text-3xl font-bold text-accent/30">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="mt-3 text-lg font-semibold text-ink">{ex.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{ex.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
