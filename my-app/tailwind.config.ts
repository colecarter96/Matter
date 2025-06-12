import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)"],
        chivo: ["var(--font-chivo)"],
        pathway: ["var(--font-pathway-gothic)"],
        comico: ["var(--font-comico)"],
        clash: ["var(--font-clash)"],
        rx100: ["var(--font-rx100)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
