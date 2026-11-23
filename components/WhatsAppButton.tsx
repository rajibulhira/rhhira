"use client";

import { useApp } from "./Providers";
import { WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  const { t } = useApp();
  return (
    <a
      href={site.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.ui.whatsapp}
      className="no-print group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lift transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        {t.ui.whatsapp}
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-lift transition duration-300 group-hover:scale-105 group-hover:bg-[#178a45]">
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#1FA855]/40 [animation-duration:2.8s]" aria-hidden="true" />
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
