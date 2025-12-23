import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "var(--font-tajawal)", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-tajawal)", "sans-serif"],
      },
      colors: {
        // Brand Colors (Derived from Logo - estimated)
        primary: {
          DEFAULT: "#1e3a8a", // Deep Blue
          light: "#3b82f6",
          dark: "#172554",
        },
        secondary: {
          DEFAULT: "#10b981", // Emerald/Teal
          light: "#34d399",
          dark: "#047857",
        },
        accent: "#f59e0b", // Gold/Amber for highlights
        dark: "#0f172a",
        light: "#f8fafc",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
