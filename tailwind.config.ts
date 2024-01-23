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
        philosopher: "'Philosopher', sans-serif;",
        lemonada: "'Lemonada', cursive",
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
            // background: "rgb(165, 243, 252)",
            // foreground: "rgb(251, 207, 232)",
            primary: {
              // DEFAULT: "#11D1BE",
              // foreground: "#000000",
            },
            // focus: "#11D1BE",
          },
        },
        dark: {
          colors: {
            // background: "rgb(3, 105, 161)",
            // foreground: "rgb(251, 207, 232)",
            primary: {
              // DEFAULT: "#11D1BE",
              // foreground: "#000000",
            },
            // focus: "#11D1BE",
          },
        },
      },
    }),
  ],
};
export default config;
