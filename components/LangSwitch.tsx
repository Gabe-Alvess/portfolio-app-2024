"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";

type Props = {};

export const LangSwitch = (props: Props) => {
  const [currentLang, setCurrentLang] = useState("NL");

  const removeSelectedLang = (lang: string) => {
    return lang === currentLang ? "hidden" : "";
  };

  const removeMenuSeparator = () => {
    if (currentLang === "FR" || currentLang === "EN") return "hidden";
    else return "block";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="lang-menu-trigger">
        {currentLang} <CaretDownIcon className="text-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setCurrentLang("NL")} className={removeSelectedLang("NL")}>
          NL
        </DropdownMenuItem>
        <DropdownMenuSeparator className={currentLang === "NL" ? "hidden" : "block"} />
        <DropdownMenuItem onClick={() => setCurrentLang("FR")} className={removeSelectedLang("FR")}>
          FR
        </DropdownMenuItem>
        <DropdownMenuSeparator className={removeMenuSeparator()} />
        <DropdownMenuItem onClick={() => setCurrentLang("EN")} className={removeSelectedLang("EN")}>
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
