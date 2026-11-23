"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";
import { SectionHeading, isPlaceholder } from "./SectionHeading";

function Field({ text, strong = false }: { text: string; strong?: boolean }) {
  if (isPlaceholder(text)) {
    return <p className="mt-2 inline-block rounded-md border border-dashed border-line px-2.5 py-1 text-sm italic text-muted">{text}</p>;
  }
  return <p className={strong ? "mt-1 text-xl font-semibold text-ink" : "mt-2 text-sm text-muted"}>{text}</p>;
}

export function Education() {
  const { t } = useApp();
  const e = t.education;

  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <div className="container-x">
        <SectionHeading id="education-title" kicker={e.kicker} title={e.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="card relative overflow-hidden p-8">
            <div className="blueprint-fine absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white dark:bg-steel">
                <Icon name="cap" className="h-6 w-6" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{e.degreeLabel}</p>
              <Field text={e.degree} strong />
              <p className="mt-2 text-base font-medium text-ink/90">{e.institution}</p>
              <Field text={e.period} />
              <Field text={e.note} />
            </div>
          </Reveal>

          <Reveal delay={120} className="card relative overflow-hidden p-8">
            <div className="blueprint-fine absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white dark:bg-steel">
                <Icon name="badge" className="h-6 w-6" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{e.membershipLabel}</p>
              <Field text={e.membership} strong />
              <p className="mt-2 text-base font-medium text-ink/90">{e.membershipOrg}</p>
              <Field text={e.membershipId} />
              <Field text={e.membershipNote} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
