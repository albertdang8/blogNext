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
        primaryDark: "#170a1c",
        accentDark: "#00916E",
        primaryLight: "#d3b99f",
        accentLight: "#1c5d99",
      },
    },
  },
  plugins: [],
};
export default config;
