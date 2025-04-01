import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 300ms ease-out",
        slideUp: "slideUp 300ms ease-in",
      },
      keyframes: {
        slideDown: {
          from: { opacity: "0", height: "0px" },
          to: { opacity: "1", height: "var(--radix-collapsible-content-height)" },
        },
        slideUp: {
          from: { opacity: "1", height: "var(--radix-collapsible-content-height)" },
          to: { opacity: "0", height: "0px" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "data-[state=open]:animate-slideDown",
    "data-[state=closed]:animate-slideUp"
  ],
};

export default config;
