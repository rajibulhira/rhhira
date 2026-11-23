import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/sora";
import "@fontsource/hind-siliguri/400.css";
import "@fontsource/hind-siliguri/500.css";
import "@fontsource/hind-siliguri/600.css";
import "@fontsource/hind-siliguri/700.css";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SITE_URL, site } from "@/lib/site";

const title = "ENGR. RH HIRA — Civil & Structural Engineer | Dhaka, Bangladesh";
const description =
  "Portfolio of Engr. Md. Rajibul Huq Hira, B.Sc. Civil Engineer (IUBAT), Associate Member of the Institution of Engineers, Bangladesh (AMIEB) and Co-Founder & Structural Engineer at Dhaka Building Planner. Structural analysis, foundation design and building planning.";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: { default: title, template: "%s | ENGR. RH HIRA" },
  description,
  applicationName: "ENGR. RH HIRA",
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  keywords: [
    "Civil Engineer Bangladesh",
    "Structural Engineer Dhaka",
    "Structural design",
    "Foundation design",
    "ETABS",
    "SAFE",
    "AutoCAD",
    "ASDIP Foundation",
    "Building planning",
    "Dhaka Building Planner",
    "Rajibul Huq Hira",
    "AMIEB",
    "IUBAT",
  ],
  // Absolute URLs on purpose: on a GitHub project page SITE_URL already includes "/repo-name",
  // and relative URLs would drop that sub-path.
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    siteName: "ENGR. RH HIRA",
    title,
    description,
    locale: "en_US",
    images: [{ url: `${SITE_URL}${site.images.og}`, width: 1200, height: 630, alt: "Dhaka Building Planner — Architecture. Engineering. Design." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE_URL}${site.images.og}`],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1624" },
  ],
};

// Applies the saved/system theme before first paint to avoid a light→dark flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: site.fullName,
      alternateName: "ENGR. RH HIRA",
      jobTitle: "Civil Engineer & Structural Engineer",
      email: site.contact.email,
      telephone: site.contact.whatsappDisplay,
      url: SITE_URL,
      alumniOf: { "@type": "CollegeOrUniversity", name: "International University of Business Agriculture and Technology (IUBAT)" },
      memberOf: { "@type": "Organization", name: "Institution of Engineers, Bangladesh (IEB)" },
      worksFor: { "@id": `${SITE_URL}/#company` },
      knowsAbout: ["Structural analysis", "Foundation design", "Building planning", "ETABS", "SAFE", "AutoCAD", "ASDIP Foundation"],
      sameAs: [site.contact.facebookUrl],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#company`,
      name: site.company,
      slogan: site.companyTagline,
      founder: { "@id": `${SITE_URL}/#person` },
      sameAs: [site.contact.companyFacebookUrl],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
