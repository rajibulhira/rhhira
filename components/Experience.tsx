"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { t } = useApp();
  const x = t.experience;

  return (
    <section id="experience" aria-labelledby="experience-title" className="section bg-surface/60">
      <div className="container-x">
        <SectionHeading id="experience-title" kicker={x.kicker} title={x.title} intro={x.intro} />

        <ol className="relative mt-14 space-y-8 border-l border-line pl-8 sm:pl-12">
          {x.items.map((it, i) => (
            <Reveal key={`${it.role}-${i}`} as="li" delay={i * 120} className="relative">
              <span
                className="absolute -left-[calc(2rem+7px)] top-6 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-bg sm:-left-[calc(3rem+7px)]"
                aria-hidden="true"
              />
              <article
                className={`card p-6 sm:p-8 ${it.placeholder ? "border-dashed" : ""}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white dark:bg-steel">
                      <Icon name="briefcase" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink sm:text-xl">{it.role}</h3>
                      <p className="mt-0.5 text-base font-medium text-accent">{it.org}</p>
                    </div>
                  </div>
                  <p className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">{it.period}</p>
                </div>
                <p className={`mt-5 text-base leading-relaxed ${it.placeholder ? "italic text-muted" : "text-ink/90"}`}>{it.description}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
