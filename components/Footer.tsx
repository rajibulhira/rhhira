"use client";

import { useApp } from "./Providers";
import { Icon, FacebookIcon, WhatsAppIcon } from "./Icons";
import { asset, sectionIds, site } from "@/lib/site";

export function Footer() {
  const { t } = useApp();
  const f = t.footer;
  const k = site.contact;
  const year = new Date().getFullYear();

  const social =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-steel hover:bg-steel hover:text-white";

  return (
    <footer className="relative overflow-hidden bg-[#0a1a2d] text-white/80">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="brand-wordmark font-display text-2xl font-bold tracking-[0.06em] text-white">{site.brand}</p>
            <p className="mt-1 text-sm text-steel">{f.tagline}</p>
            <a href="#company" className="mt-6 inline-block rounded-lg bg-white p-3" aria-label={site.company}>
              <img
                src={asset(site.images.logo)}
                alt={`${site.company} logo`}
                width={900}
                height={585}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto"
              />
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">{f.explore}</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="transition hover:text-white">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">{f.connect}</p>
            <div className="mt-4 flex gap-2.5">
              <a href={k.whatsappUrl} target="_blank" rel="noopener noreferrer" className={social} aria-label="WhatsApp">
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a href={k.emailUrl} className={social} aria-label="Email">
                <Icon name="mail" className="h-4 w-4" />
              </a>
              <a href={k.facebookUrl} target="_blank" rel="noopener noreferrer" className={social} aria-label="Facebook — personal">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={k.companyFacebookUrl} target="_blank" rel="noopener noreferrer" className={social} aria-label="Facebook — Dhaka Building Planner" title="Dhaka Building Planner — Facebook page">
                <Icon name="building" className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 break-all text-sm">{k.email}</p>
            <p className="mt-1 text-sm">{k.whatsappDisplay}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
          <p>
            © {year} {site.fullName}. {f.rights} {f.built}
          </p>
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-white/80 transition hover:text-white">
            {t.ui.backToTop}
            <Icon name="arrow-up" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
