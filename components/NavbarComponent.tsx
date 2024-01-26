"use client";

import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { Navbar, NavbarContent, NavbarItem, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";

export default function NavbarComponent() {
  const [currentPath, setCurrentPath] = useState("#Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Game", "Projects", "Contact"];

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    if (currentPath === "") {
      setCurrentPath("#Home");
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [currentPath]);

  const handleSelectedItemBasedOnPath = (item: string) => {
    let itemClasses = "nav-item-anim";

    if (currentPath === item) {
      itemClasses = "item-selected";
    }

    return itemClasses;
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      isBordered
      shouldHideOnScroll
      className="font-poppins font-semibold border-b-foreground"
    >
      <NavbarContent className="flex sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="w-12 h-11 rounded-none border-1 border-foreground sm:hidden"
        />
      </NavbarContent>

      <NavbarBrand>
        <Logo />
        <p className="font-montserrat font-bold text-2xl pl-1">Alves.</p>
      </NavbarBrand>

      <NavbarContent justify="center" className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link className={handleSelectedItemBasedOnPath("#Home")} href="#Home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={handleSelectedItemBasedOnPath("#About")} href="#About">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={handleSelectedItemBasedOnPath("#Skills")} href="#Skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={handleSelectedItemBasedOnPath("#Game")} href="#Game">
            Game
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={handleSelectedItemBasedOnPath("#Projects")} href="#Projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={handleSelectedItemBasedOnPath("#Contact")} href="#Contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem>
          <p className="text-lg">EN▾</p>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full font-poppins justify-center p-2 hover:text-success dark:hover:text-primary"
              href={item === "Home" ? "#" : "#" + item}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
