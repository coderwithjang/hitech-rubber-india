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
          DEFAULT: "#5C8D19",
          light: "#78b821",
          dark: "#456a12",
        },
        background: {
          DEFAULT: "#FAF9F6",
          surface: "#F4F1EA",
        },
        charcoal: {
          DEFAULT: "#231F20",
          dark: "#111111",
          light: "#333333"
        },
        text: {
          DEFAULT: "#231F20",
          muted: "#666666",
        }
      },
      fontFamily: {
        sans: ["Calibri", "Candara", "Segoe UI", "Optima", "Arial", "sans-serif"],
        display: ["Calibri", "Candara", "Segoe UI", "serif"],
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
