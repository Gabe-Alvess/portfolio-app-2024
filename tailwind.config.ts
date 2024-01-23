import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        philosopher: "'Philosopher', sans-serif;",
        lemonada: "'Lemonada', cursive",
      },
      textShadow: {
        default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), ("tailwindcss-textshadow")],
};
export default config;
