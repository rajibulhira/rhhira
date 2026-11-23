/**
 * Core, language-independent site facts.
 * Edit this file to change contact links, brand name, etc. Everything on the site reads from here.
 */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public asset path with the GitHub Pages base path (needed for plain <a href> / <img>). */
export const asset = (path: string) => `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const site = {
  brand: "ENGR. RH HIRA",
  fullName: "Engr. Md. Rajibul Huq Hira",
  company: "Dhaka Building Planner",
  companyTagline: "Architecture. Engineering. Design.",

  contact: {
    whatsappDisplay: "+880 1973-664377",
    whatsappUrl: "https://wa.me/8801973664377",
    email: "engr.rajibulhuqhira@gmail.com",
    emailUrl: "mailto:engr.rajibulhuqhira@gmail.com",
    facebookUrl: "https://facebook.com/rajibul.huqhira",
    // NOTE: handle is spelled exactly as provided ("buidling"). If the page's real handle is
    // "dhakabuildingplanner", change it here and every link on the site updates.
    companyFacebookUrl: "https://facebook.com/dhakabuidlingplanner",
  },

  // Put your CV PDF at public/cv/Engr-RH-Hira-CV.pdf (replace the placeholder file).
  cvPath: "/cv/Engr-RH-Hira-CV.pdf",
  cvFileName: "Engr-RH-Hira-CV.pdf",

  images: {
    portrait: "/images/hira-portrait.webp",
    logo: "/images/dbp-logo-trimmed.webp", // original artwork, only empty margin trimmed + downscaled
    logoPng: "/images/dbp-logo-trimmed.png",
    og: "/images/og-image.jpg",
  },
} as const;

export const sectionIds = [
  "home",
  "about",
  "education",
  "experience",
  "skills",
  "projects",
  "company",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
export type Lang = "en" | "bn";
