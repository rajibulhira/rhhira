import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  intro,
  light = false,
  id,
}: {
  kicker: string;
  title: string;
  intro?: string;
  light?: boolean;
  id?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className={`kicker ${light ? "kicker-light" : ""}`}>{kicker}</p>
      <h2
        id={id}
        className={`mt-4 text-3xl font-semibold leading-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/70" : "text-muted"}`}>{intro}</p>}
    </Reveal>
  );
}

/** True when a content string is an editable [placeholder]. */
export const isPlaceholder = (s: string) => /^\s*\[.*\]\s*$/s.test(s);
