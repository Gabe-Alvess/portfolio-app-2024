"use client";

import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { Navbar, NavbarContent, NavbarItem, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { LangSwitch } from "./LangSwitch";

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

  const selectNavItem = (item: string) => {
    let navItemClass = "nav-item";

    if (currentPath === item) {
      navItemClass = "selected-nav-item";
    }

    return navItemClass;
  };

  const selectMenuItem = (item: string) => {
    let menuItemClass = "nav-menu-item";

    if (currentPath === item) {
      menuItemClass = "selected-menu-item";
    }

    return menuItemClass;
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      isBordered
      shouldHideOnScroll
      className="font-poppins border-foreground"
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
          <Link className={selectNavItem("#Home")} href="#Home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={selectNavItem("#About")} href="#About">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={selectNavItem("#Skills")} href="#Skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={selectNavItem("#Game")} href="#Game">
            Game
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={selectNavItem("#Projects")} href="#Projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={selectNavItem("#Contact")} href="#Contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem>
          <LangSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              size="lg"
              href={"#" + item}
              color="foreground"
              onClick={() => setIsMenuOpen(false)}
              className={selectMenuItem("#" + item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
