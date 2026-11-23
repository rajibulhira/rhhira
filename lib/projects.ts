/**
 * PROJECT GALLERY DATA — edit this file to add, remove or change projects.
 *
 * To add a project:
 *   1. Copy your image into  public/images/projects/  (JPG/WebP/PNG, ideally ~1600px wide, under 400 KB).
 *   2. Add an entry below and set `image` to e.g. "/images/projects/my-building.webp".
 *   3. Commit and push — GitHub Actions rebuilds and publishes the site.
 *
 * Entries with `image: null` show a blueprint-style placeholder card instead of a photo.
 * The three entries below are PLACEHOLDERS — replace them with your real projects.
 */

export type Project = {
  id: string;
  category: "structural" | "architectural";
  title: { en: string; bn: string };
  location: { en: string; bn: string };
  year: string;
  description: { en: string; bn: string };
  /** Path under /public, e.g. "/images/projects/tower-a.webp". Use null for a placeholder card. */
  image: string | null;
  /** Describe the image for screen readers. */
  imageAlt?: { en: string; bn: string };
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "project-1",
    category: "structural",
    title: {
      en: "[Structural project title]",
      bn: "[স্ট্রাকচারাল প্রকল্পের নাম]",
    },
    location: { en: "[City / Area]", bn: "[শহর / এলাকা]" },
    year: "[Year]",
    description: {
      en: "[Describe the building, your role, the structural system and the software used (e.g. ETABS, SAFE).]",
      bn: "[ভবন, আপনার ভূমিকা, স্ট্রাকচারাল সিস্টেম এবং ব্যবহৃত সফটওয়্যার (যেমন ETABS, SAFE) সম্পর্কে লিখুন।]",
    },
    image: null,
    placeholder: true,
  },
  {
    id: "project-2",
    category: "architectural",
    title: {
      en: "[Architectural project title]",
      bn: "[স্থাপত্য প্রকল্পের নাম]",
    },
    location: { en: "[City / Area]", bn: "[শহর / এলাকা]" },
    year: "[Year]",
    description: {
      en: "[Describe the building type, planning approach and design intent.]",
      bn: "[ভবনের ধরন, পরিকল্পনা পদ্ধতি এবং নকশার উদ্দেশ্য লিখুন।]",
    },
    image: null,
    placeholder: true,
  },
  {
    id: "project-3",
    category: "structural",
    title: {
      en: "[Foundation design project title]",
      bn: "[ফাউন্ডেশন ডিজাইন প্রকল্পের নাম]",
    },
    location: { en: "[City / Area]", bn: "[শহর / এলাকা]" },
    year: "[Year]",
    description: {
      en: "[Describe the foundation type and design considerations.]",
      bn: "[ফাউন্ডেশনের ধরন এবং ডিজাইনের বিবেচ্য বিষয় লিখুন।]",
    },
    image: null,
    placeholder: true,
  },
];
