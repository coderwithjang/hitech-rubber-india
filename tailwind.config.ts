import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#01696f",
          light: "#0b8b91",
          dark: "#0a565c",
        },
        background: {
          DEFAULT: "#FAF9F6",
          surface: "#F4F1EA",
        },
        charcoal: {
          DEFAULT: "#1f2937",
          dark: "#111827",
          light: "#374151"
        },
        text: {
          DEFAULT: "#1f2937",
          muted: "#6B7280",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'premium-hover': '0 10px 40px -4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
