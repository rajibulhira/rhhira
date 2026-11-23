import type { Config } from "tailwindcss";

const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette
        navy: "#10243B",
        steel: "#527FA3",
        charcoal: "#263238",
        // Theme-aware tokens (defined in globals.css, switch automatically in dark mode)
        bg: withAlpha("--bg"),
        surface: withAlpha("--surface"),
        card: withAlpha("--card"),
        ink: withAlpha("--ink"),
        muted: withAlpha("--muted"),
        line: withAlpha("--line"),
        accent: withAlpha("--accent"),
      },
      fontFamily: {
        sans: ["'Manrope Variable'", "'Hind Siliguri'", "system-ui", "sans-serif"],
        display: ["'Sora Variable'", "'Hind Siliguri'", "system-ui", "sans-serif"],
        bn: ["'Hind Siliguri'", "'Manrope Variable'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgb(16 36 59 / 0.06), 0 12px 32px -12px rgb(16 36 59 / 0.18)",
        lift: "0 2px 4px rgb(16 36 59 / 0.08), 0 24px 48px -16px rgb(16 36 59 / 0.28)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        drawline: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        drawline: "drawline 1.2s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
