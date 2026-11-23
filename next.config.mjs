/** @type {import('next').NextConfig} */

// When deployed to a GitHub *project* page (username.github.io/repo-name) the site lives under a
// sub-path. The GitHub Actions workflow sets NEXT_PUBLIC_BASE_PATH automatically; locally it is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export", // fully static site -> works on GitHub Pages, Netlify, Vercel, any static host
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true }, // required for static export
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
