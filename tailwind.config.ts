import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        oswald: "'Oswald', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
      textShadow: {
        default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwind-scrollbar"),
    "tailwindcss-textshadow",
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f2f1ef",
            primary: "#161513",
            secondary: "#e94d35",
            // focus: "#e94d35",
          },
        },
        dark: {},
      },
    }),
  ],
};
export default config;
