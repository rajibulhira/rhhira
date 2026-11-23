"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { Icon, FacebookIcon, WhatsAppIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { asset, site } from "@/lib/site";

export function Contact() {
  const { t } = useApp();
  const c = t.contact;
  const k = site.contact;

  const items = [
    {
      label: c.whatsapp,
      value: k.whatsappDisplay,
      href: k.whatsappUrl,
      external: true,
      icon: <WhatsAppIcon className="h-6 w-6" />,
    },
    {
      label: c.email,
      value: k.email,
      href: k.emailUrl,
      external: false,
      icon: <Icon name="mail" className="h-6 w-6" />,
    },
    {
      label: c.facebook,
      value: k.facebookUrl.replace(/^https?:\/\//, ""),
      href: k.facebookUrl,
      external: true,
      icon: <FacebookIcon className="h-6 w-6" />,
    },
    {
      label: c.companyFacebook,
      value: k.companyFacebookUrl.replace(/^https?:\/\//, ""),
      href: k.companyFacebookUrl,
      external: true,
      icon: <FacebookIcon className="h-6 w-6" />,
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="container-x">
        <SectionHeading id="contact-title" kicker={c.kicker} title={c.title} intro={c.intro} />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.label} as="li" delay={i * 80} className="min-w-0">
              <a
                href={it.href}
                {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="card group flex items-center gap-5 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-white transition group-hover:bg-steel dark:bg-steel dark:group-hover:bg-white dark:group-hover:text-navy">
                  {it.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-accent">{it.label}</span>
                  <span className="mt-1 block truncate text-base font-semibold text-ink sm:text-lg">{it.value}</span>
                </span>
                <Icon name={it.external ? "external" : "arrow-right"} className="h-5 w-5 shrink-0 text-muted transition group-hover:text-accent" />
                <span className="sr-only">{c.open}</span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={k.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#1FA855] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#178a45] hover:shadow-lift"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {c.cta}
          </a>
          <a href={asset(site.cvPath)} download={site.cvFileName} className="btn btn-ghost">
            <Icon name="download" className="h-4 w-4" />
            {t.ui.downloadCv}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
