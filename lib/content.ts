/**
 * ALL TEXT ON THE WEBSITE LIVES HERE (English + Bengali).
 *
 * Anything written in [square brackets] is an editable placeholder — replace it with your real
 * information. Nothing in this file claims experience, awards, certifications or clients that
 * were not provided.
 */
import type { SectionId, Lang } from "./site";

export type Content = {
  nav: Record<SectionId, string>;
  ui: {
    skip: string;
    downloadCv: string;
    theme: { toDark: string; toLight: string };
    language: { label: string; switchTo: string };
    menu: { open: string; close: string };
    whatsapp: string;
    viewDetails: string;
    close: string;
    all: string;
    backToTop: string;
  };
  hero: {
    eyebrow: string;
    greetingLead: string;
    name: string;
    intro: string;
    explore: string;
    contact: string;
    facts: { label: string; value: string }[];
    cardTitle: string;
    cardLine: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    objectivesTitle: string;
    objectives: { title: string; text: string }[];
  };
  education: {
    kicker: string;
    title: string;
    degreeLabel: string;
    degree: string;
    institution: string;
    period: string;
    note: string;
    membershipLabel: string;
    membership: string;
    membershipOrg: string;
    membershipId: string;
    membershipNote: string;
  };
  experience: {
    kicker: string;
    title: string;
    intro: string;
    items: { role: string; org: string; period: string; description: string; placeholder?: boolean }[];
  };
  skills: {
    kicker: string;
    title: string;
    intro: string;
    softwareTitle: string;
    expertiseTitle: string;
    software: { name: string; text: string }[];
    expertise: { name: string; text: string }[];
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
    filters: { all: string; structural: string; architectural: string };
    categoryLabel: { structural: string; architectural: string };
    locationLabel: string;
    yearLabel: string;
    placeholderNote: string;
    addYourOwn: string;
  };
  company: {
    kicker: string;
    title: string;
    role: string;
    paragraphs: string[];
    servicesTitle: string;
    services: { name: string; text: string }[];
    visit: string;
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    whatsapp: string;
    email: string;
    facebook: string;
    companyFacebook: string;
    open: string;
    cta: string;
  };
  footer: {
    tagline: string;
    explore: string;
    connect: string;
    rights: string;
    built: string;
  };
};

const en: Content = {
  nav: {
    home: "Home",
    about: "About",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    company: "Dhaka Building Planner",
    contact: "Contact",
  },
  ui: {
    skip: "Skip to main content",
    downloadCv: "Download CV",
    theme: { toDark: "Switch to dark mode", toLight: "Switch to light mode" },
    language: { label: "বাংলা", switchTo: "Switch to Bengali" },
    menu: { open: "Open menu", close: "Close menu" },
    whatsapp: "Chat on WhatsApp",
    viewDetails: "View details",
    close: "Close",
    all: "All",
    backToTop: "Back to top",
  },
  hero: {
    eyebrow: "Civil Engineer | Structural Engineer",
    greetingLead: "Hello, I'm",
    name: "Engr. Md. Rajibul Huq Hira.",
    intro:
      "A Civil Engineer passionate about structural engineering, building design and creating safe, functional and sustainable structures.",
    explore: "Explore My Work",
    contact: "Contact Me",
    facts: [
      { label: "Education", value: "B.Sc. in Civil Engineering, IUBAT" },
      { label: "Membership", value: "AMIEB — Institution of Engineers, Bangladesh" },
      { label: "Co-Founder", value: "Dhaka Building Planner" },
    ],
    cardTitle: "Structural Engineer",
    cardLine: "Co-Founder, Dhaka Building Planner",
  },
  about: {
    kicker: "About Me",
    title: "Engineering safe, functional and sustainable structures",
    paragraphs: [
      "I am Engr. Md. Rajibul Huq Hira, a Civil Engineer from Bangladesh with a B.Sc. in Civil Engineering from IUBAT. My focus is structural engineering and building design — the discipline of making sure a building stands safely, works well for the people who use it, and respects the resources used to build it.",
      "I am an Associate Member of the Institution of Engineers, Bangladesh (AMIEB) and Co-Founder and Structural Engineer at Dhaka Building Planner, where architecture, engineering and design come together under one roof.",
      "[Add one or two personal sentences here — what drew you to structural engineering, or the kind of work you most enjoy.]",
    ],
    objectivesTitle: "Professional objectives",
    objectives: [
      {
        title: "Safe by design",
        text: "Produce structural designs where safety and code compliance come first, backed by sound analysis.",
      },
      {
        title: "Functional & sustainable",
        text: "Balance strength, usability and efficient use of materials in every building I work on.",
      },
      {
        title: "Grow the practice",
        text: "Build Dhaka Building Planner into a trusted name for planning, structural design and engineering drawings.",
      },
      {
        title: "Keep learning",
        text: "Deepen expertise in structural analysis and foundation design through practice and professional membership.",
      },
    ],
  },
  education: {
    kicker: "Education & Membership",
    title: "Academic foundation and professional standing",
    degreeLabel: "Academic qualification",
    degree: "B.Sc. in Civil Engineering",
    institution: "International University of Business Agriculture and Technology (IUBAT)",
    period: "[Years attended, e.g. 20XX – 20XX]",
    note: "[Optional: thesis topic, CGPA, or relevant coursework]",
    membershipLabel: "Professional membership",
    membership: "Associate Member (AMIEB)",
    membershipOrg: "Institution of Engineers, Bangladesh (IEB)",
    membershipId: "[Membership number]",
    membershipNote: "[Optional: year of enrolment]",
  },
  experience: {
    kicker: "Experience",
    title: "Professional experience",
    intro: "Roles and training that shaped my practice.",
    items: [
      {
        role: "Co-Founder & Structural Engineer",
        org: "Dhaka Building Planner",
        period: "[Start year] – Present",
        description:
          "Leading structural engineering work at Dhaka Building Planner, an architecture, engineering and design practice. [Add key responsibilities.]",
      },
      {
        role: "Intern, Civil / Structural Engineering",
        org: "[Organization name]",
        period: "[Duration, e.g. Month 20XX – Month 20XX]",
        description: "[Describe what you worked on during your internship and what you learned.]",
        placeholder: true,
      },
    ],
  },
  skills: {
    kicker: "Skills",
    title: "Tools and technical expertise",
    intro: "The software and engineering disciplines I work with.",
    softwareTitle: "Software",
    expertiseTitle: "Engineering expertise",
    software: [
      { name: "ETABS", text: "3D structural analysis and design of multi-storey building systems." },
      { name: "SAFE", text: "Design of slabs, mats and foundation systems." },
      { name: "AutoCAD", text: "Architectural and structural drafting and detailing." },
      { name: "ASDIP Foundation", text: "Design and checking of footings and foundations." },
    ],
    expertise: [
      { name: "Structural Analysis", text: "Evaluating how loads travel through a structure to size members safely." },
      { name: "Foundation Design", text: "Selecting and designing foundations suited to the structure and site." },
      { name: "Building Planning", text: "Coordinating layouts so buildings are functional, efficient and buildable." },
    ],
  },
  projects: {
    kicker: "Projects",
    title: "Architectural and structural work",
    intro: "A selection of planning, design and structural engineering projects.",
    filters: { all: "All", structural: "Structural", architectural: "Architectural" },
    categoryLabel: { structural: "Structural", architectural: "Architectural" },
    locationLabel: "Location",
    yearLabel: "Year",
    placeholderNote: "Placeholder — add your project image and details in lib/projects.ts",
    addYourOwn: "Project images and descriptions are easy to update — see the README.",
  },
  company: {
    kicker: "Dhaka Building Planner",
    title: "Architecture. Engineering. Design.",
    role: "Co-Founder & Structural Engineer",
    paragraphs: [
      "Dhaka Building Planner is the professional organization I co-founded to bring architecture, engineering and design together — from building planning to structural design and engineering drawings.",
      "[Add a short description of the company: when it was founded, who it serves, and what makes its approach different.]",
    ],
    servicesTitle: "Professional services",
    services: [
      { name: "Building Planning", text: "Functional, well-coordinated layouts for residential and commercial buildings." },
      { name: "Architectural Design", text: "Design development that balances form, use and site." },
      { name: "Structural Analysis & Design", text: "Analysis and design of building structures using ETABS and related tools." },
      { name: "Foundation Design", text: "Foundation systems designed to suit the structure and ground conditions." },
      { name: "Engineering Drawings", text: "Clear, detailed drawings prepared in AutoCAD." },
    ],
    visit: "Visit our Facebook page",
  },
  contact: {
    kicker: "Contact",
    title: "Let's talk about your project",
    intro:
      "For structural design, building planning or engineering consultation, reach out directly — WhatsApp is the fastest way.",
    whatsapp: "WhatsApp",
    email: "Email",
    facebook: "Facebook — Personal",
    companyFacebook: "Facebook — Dhaka Building Planner",
    open: "Open",
    cta: "Message on WhatsApp",
  },
  footer: {
    tagline: "Civil & Structural Engineer",
    explore: "Explore",
    connect: "Connect",
    rights: "All rights reserved.",
    built: "Built with care in Bangladesh.",
  },
};

const bn: Content = {
  nav: {
    home: "হোম",
    about: "পরিচিতি",
    education: "শিক্ষা",
    experience: "অভিজ্ঞতা",
    skills: "দক্ষতা",
    projects: "প্রকল্প",
    company: "ঢাকা বিল্ডিং প্ল্যানার",
    contact: "যোগাযোগ",
  },
  ui: {
    skip: "মূল কনটেন্টে যান",
    downloadCv: "সিভি ডাউনলোড",
    theme: { toDark: "ডার্ক মোডে যান", toLight: "লাইট মোডে যান" },
    language: { label: "English", switchTo: "ইংরেজিতে দেখুন" },
    menu: { open: "মেনু খুলুন", close: "মেনু বন্ধ করুন" },
    whatsapp: "হোয়াটসঅ্যাপে মেসেজ করুন",
    viewDetails: "বিস্তারিত দেখুন",
    close: "বন্ধ করুন",
    all: "সব",
    backToTop: "উপরে যান",
  },
  hero: {
    eyebrow: "সিভিল ইঞ্জিনিয়ার | স্ট্রাকচারাল ইঞ্জিনিয়ার",
    greetingLead: "হ্যালো, আমি",
    name: "ইঞ্জিনিয়ার মো. রাজিবুল হক হীরা।",
    intro:
      "আমি একজন সিভিল ইঞ্জিনিয়ার। স্ট্রাকচারাল ইঞ্জিনিয়ারিং, ভবন নকশা এবং নিরাপদ, কার্যকর ও টেকসই স্থাপনা নির্মাণে আমার গভীর আগ্রহ।",
    explore: "আমার কাজ দেখুন",
    contact: "যোগাযোগ করুন",
    facts: [
      { label: "শিক্ষা", value: "বিএসসি ইন সিভিল ইঞ্জিনিয়ারিং, আইইউবিএটি" },
      { label: "সদস্যপদ", value: "এএমআইইবি — ইনস্টিটিউশন অব ইঞ্জিনিয়ার্স, বাংলাদেশ" },
      { label: "সহ-প্রতিষ্ঠাতা", value: "ঢাকা বিল্ডিং প্ল্যানার" },
    ],
    cardTitle: "স্ট্রাকচারাল ইঞ্জিনিয়ার",
    cardLine: "সহ-প্রতিষ্ঠাতা, ঢাকা বিল্ডিং প্ল্যানার",
  },
  about: {
    kicker: "আমার সম্পর্কে",
    title: "নিরাপদ, কার্যকর ও টেকসই স্থাপনার প্রকৌশল",
    paragraphs: [
      "আমি ইঞ্জিনিয়ার মো. রাজিবুল হক হীরা, বাংলাদেশের একজন সিভিল ইঞ্জিনিয়ার। আইইউবিএটি থেকে সিভিল ইঞ্জিনিয়ারিংয়ে বিএসসি সম্পন্ন করেছি। স্ট্রাকচারাল ইঞ্জিনিয়ারিং ও ভবন নকশা আমার মূল কাজের ক্ষেত্র — যেন একটি ভবন নিরাপদে দাঁড়িয়ে থাকে, ব্যবহারকারীর জন্য কার্যকর হয় এবং নির্মাণ সম্পদের যথাযথ ব্যবহার নিশ্চিত হয়।",
      "আমি ইনস্টিটিউশন অব ইঞ্জিনিয়ার্স, বাংলাদেশ (আইইবি)-এর অ্যাসোসিয়েট সদস্য (এএমআইইবি) এবং ঢাকা বিল্ডিং প্ল্যানারের সহ-প্রতিষ্ঠাতা ও স্ট্রাকচারাল ইঞ্জিনিয়ার, যেখানে স্থাপত্য, প্রকৌশল ও নকশা একসাথে কাজ করে।",
      "[এখানে ব্যক্তিগত এক-দুটি বাক্য যোগ করুন — স্ট্রাকচারাল ইঞ্জিনিয়ারিংয়ে কী আপনাকে আকৃষ্ট করেছে, বা কোন ধরনের কাজ আপনার সবচেয়ে প্রিয়।]",
    ],
    objectivesTitle: "পেশাগত লক্ষ্য",
    objectives: [
      {
        title: "নকশাতেই নিরাপত্তা",
        text: "সঠিক বিশ্লেষণের ভিত্তিতে নিরাপত্তা ও কোড মেনে স্ট্রাকচারাল ডিজাইন তৈরি করা।",
      },
      {
        title: "কার্যকর ও টেকসই",
        text: "প্রতিটি ভবনে শক্তি, ব্যবহারযোগ্যতা ও উপকরণের দক্ষ ব্যবহারের ভারসাম্য রাখা।",
      },
      {
        title: "প্রতিষ্ঠানকে এগিয়ে নেওয়া",
        text: "পরিকল্পনা, স্ট্রাকচারাল ডিজাইন ও ইঞ্জিনিয়ারিং ড্রয়িংয়ের জন্য ঢাকা বিল্ডিং প্ল্যানারকে একটি আস্থার নাম হিসেবে গড়ে তোলা।",
      },
      {
        title: "শেখা চালিয়ে যাওয়া",
        text: "অনুশীলন ও পেশাগত সদস্যপদের মাধ্যমে স্ট্রাকচারাল অ্যানালাইসিস ও ফাউন্ডেশন ডিজাইনে দক্ষতা বাড়ানো।",
      },
    ],
  },
  education: {
    kicker: "শিক্ষা ও সদস্যপদ",
    title: "একাডেমিক ভিত্তি ও পেশাগত অবস্থান",
    degreeLabel: "শিক্ষাগত যোগ্যতা",
    degree: "বিএসসি ইন সিভিল ইঞ্জিনিয়ারিং",
    institution: "ইন্টারন্যাশনাল ইউনিভার্সিটি অব বিজনেস অ্যাগ্রিকালচার অ্যান্ড টেকনোলজি (আইইউবিএটি)",
    period: "[অধ্যয়নের বছর, যেমন ২০XX – ২০XX]",
    note: "[ঐচ্ছিক: থিসিসের বিষয়, সিজিপিএ বা গুরুত্বপূর্ণ কোর্স]",
    membershipLabel: "পেশাগত সদস্যপদ",
    membership: "অ্যাসোসিয়েট সদস্য (এএমআইইবি)",
    membershipOrg: "ইনস্টিটিউশন অব ইঞ্জিনিয়ার্স, বাংলাদেশ (আইইবি)",
    membershipId: "[সদস্য নম্বর]",
    membershipNote: "[ঐচ্ছিক: সদস্যপদ গ্রহণের বছর]",
  },
  experience: {
    kicker: "অভিজ্ঞতা",
    title: "পেশাগত অভিজ্ঞতা",
    intro: "যে দায়িত্ব ও প্রশিক্ষণ আমার কাজকে গড়ে তুলেছে।",
    items: [
      {
        role: "সহ-প্রতিষ্ঠাতা ও স্ট্রাকচারাল ইঞ্জিনিয়ার",
        org: "ঢাকা বিল্ডিং প্ল্যানার",
        period: "[শুরুর বছর] – বর্তমান",
        description:
          "স্থাপত্য, প্রকৌশল ও নকশা প্রতিষ্ঠান ঢাকা বিল্ডিং প্ল্যানারে স্ট্রাকচারাল ইঞ্জিনিয়ারিং কাজের নেতৃত্ব। [মূল দায়িত্বগুলো যোগ করুন।]",
      },
      {
        role: "ইন্টার্ন, সিভিল / স্ট্রাকচারাল ইঞ্জিনিয়ারিং",
        org: "[প্রতিষ্ঠানের নাম]",
        period: "[সময়কাল, যেমন মাস ২০XX – মাস ২০XX]",
        description: "[ইন্টার্নশিপে কী কাজ করেছেন এবং কী শিখেছেন তা লিখুন।]",
        placeholder: true,
      },
    ],
  },
  skills: {
    kicker: "দক্ষতা",
    title: "সফটওয়্যার ও কারিগরি দক্ষতা",
    intro: "যেসব সফটওয়্যার ও প্রকৌশল বিষয়ে আমি কাজ করি।",
    softwareTitle: "সফটওয়্যার",
    expertiseTitle: "প্রকৌশল দক্ষতা",
    software: [
      { name: "ETABS", text: "বহুতল ভবনের ত্রিমাত্রিক স্ট্রাকচারাল অ্যানালাইসিস ও ডিজাইন।" },
      { name: "SAFE", text: "স্ল্যাব, ম্যাট ও ফাউন্ডেশন সিস্টেমের ডিজাইন।" },
      { name: "AutoCAD", text: "স্থাপত্য ও স্ট্রাকচারাল ড্রাফটিং এবং ডিটেইলিং।" },
      { name: "ASDIP Foundation", text: "ফুটিং ও ফাউন্ডেশনের ডিজাইন ও যাচাই।" },
    ],
    expertise: [
      { name: "স্ট্রাকচারাল অ্যানালাইসিস", text: "কাঠামোর ভেতর দিয়ে লোড কীভাবে চলে তা বিশ্লেষণ করে নিরাপদ সদস্য নির্বাচন।" },
      { name: "ফাউন্ডেশন ডিজাইন", text: "কাঠামো ও সাইটের উপযোগী ফাউন্ডেশন নির্বাচন ও ডিজাইন।" },
      { name: "বিল্ডিং প্ল্যানিং", text: "কার্যকর, দক্ষ ও বাস্তবায়নযোগ্য ভবন লেআউট সমন্বয়।" },
    ],
  },
  projects: {
    kicker: "প্রকল্প",
    title: "স্থাপত্য ও স্ট্রাকচারাল কাজ",
    intro: "পরিকল্পনা, নকশা ও স্ট্রাকচারাল ইঞ্জিনিয়ারিং প্রকল্পের একটি নির্বাচিত সংগ্রহ।",
    filters: { all: "সব", structural: "স্ট্রাকচারাল", architectural: "স্থাপত্য" },
    categoryLabel: { structural: "স্ট্রাকচারাল", architectural: "স্থাপত্য" },
    locationLabel: "অবস্থান",
    yearLabel: "বছর",
    placeholderNote: "প্লেসহোল্ডার — lib/projects.ts ফাইলে আপনার প্রকল্পের ছবি ও তথ্য যোগ করুন",
    addYourOwn: "প্রকল্পের ছবি ও বিবরণ সহজেই আপডেট করা যায় — README দেখুন।",
  },
  company: {
    kicker: "ঢাকা বিল্ডিং প্ল্যানার",
    title: "আর্কিটেকচার। ইঞ্জিনিয়ারিং। ডিজাইন।",
    role: "সহ-প্রতিষ্ঠাতা ও স্ট্রাকচারাল ইঞ্জিনিয়ার",
    paragraphs: [
      "ঢাকা বিল্ডিং প্ল্যানার আমার সহ-প্রতিষ্ঠিত পেশাগত প্রতিষ্ঠান, যেখানে ভবন পরিকল্পনা থেকে স্ট্রাকচারাল ডিজাইন ও ইঞ্জিনিয়ারিং ড্রয়িং পর্যন্ত স্থাপত্য, প্রকৌশল ও নকশা একসাথে কাজ করে।",
      "[প্রতিষ্ঠান সম্পর্কে সংক্ষিপ্ত বিবরণ যোগ করুন: কবে শুরু, কাদের সেবা দেয় এবং কাজের ধরনের বিশেষত্ব কী।]",
    ],
    servicesTitle: "পেশাগত সেবা",
    services: [
      { name: "বিল্ডিং প্ল্যানিং", text: "আবাসিক ও বাণিজ্যিক ভবনের কার্যকর ও সমন্বিত লেআউট।" },
      { name: "আর্কিটেকচারাল ডিজাইন", text: "রূপ, ব্যবহার ও সাইটের ভারসাম্য রেখে নকশা উন্নয়ন।" },
      { name: "স্ট্রাকচারাল অ্যানালাইসিস ও ডিজাইন", text: "ETABS ও সংশ্লিষ্ট টুল দিয়ে ভবনের কাঠামো বিশ্লেষণ ও ডিজাইন।" },
      { name: "ফাউন্ডেশন ডিজাইন", text: "কাঠামো ও মাটির অবস্থার উপযোগী ফাউন্ডেশন সিস্টেম।" },
      { name: "ইঞ্জিনিয়ারিং ড্রয়িং", text: "AutoCAD-এ প্রস্তুত স্পষ্ট ও বিস্তারিত ড্রয়িং।" },
    ],
    visit: "আমাদের ফেসবুক পেজ দেখুন",
  },
  contact: {
    kicker: "যোগাযোগ",
    title: "আপনার প্রকল্প নিয়ে কথা বলি",
    intro:
      "স্ট্রাকচারাল ডিজাইন, ভবন পরিকল্পনা বা ইঞ্জিনিয়ারিং পরামর্শের জন্য সরাসরি যোগাযোগ করুন — হোয়াটসঅ্যাপ সবচেয়ে দ্রুত মাধ্যম।",
    whatsapp: "হোয়াটসঅ্যাপ",
    email: "ইমেইল",
    facebook: "ফেসবুক — ব্যক্তিগত",
    companyFacebook: "ফেসবুক — ঢাকা বিল্ডিং প্ল্যানার",
    open: "খুলুন",
    cta: "হোয়াটসঅ্যাপে মেসেজ করুন",
  },
  footer: {
    tagline: "সিভিল ও স্ট্রাকচারাল ইঞ্জিনিয়ার",
    explore: "অন্বেষণ",
    connect: "যোগাযোগ",
    rights: "সর্বস্বত্ব সংরক্ষিত।",
    built: "বাংলাদেশে যত্নের সাথে তৈরি।",
  },
};

export const content: Record<Lang, Content> = { en, bn };
