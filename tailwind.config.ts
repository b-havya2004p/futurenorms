import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B1E6E", // Vision Purple
        secondary: "#5B2D8E", // Secondary Purple
        accent: "#D4A017", // Gold Accent
        lavender: "#F8F5FF", // Lavender Background
        dark: "#0f172a",
      },
      fontFamily: {
        heading: ["Trebuchet MS", "sans-serif"],
        tagline: ["Georgia", "serif"],
        body: ["Calibri", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
