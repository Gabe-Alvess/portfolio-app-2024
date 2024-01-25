"use client";

import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import { useTheme } from "next-themes";

type Props = {};

export const ThemeSwitch = (props: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};
