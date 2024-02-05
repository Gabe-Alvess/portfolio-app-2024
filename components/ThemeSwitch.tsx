"use client";

import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {};

export const ThemeSwitch = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        className="focus:text-warning dark:focus:text-primary"
      >
        <SunIcon />
        <MoonIcon />
      </button>
    </div>
  );
};
