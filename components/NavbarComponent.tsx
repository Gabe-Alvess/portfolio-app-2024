"use client";

import { Logo } from "./Logo";
import { LangSwitch } from "./LangSwitch";
import { ThemeSwitch } from "./ThemeSwitch";
import { useEffect, useState } from "react";
import { Navbar, NavbarContent, NavbarItem, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";

type Props = {
  currentPage: string;
};

const NavbarComponent = (props: Props) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Game", "Projects", "Contact"];

  useEffect(() => {
    setCurrentPage(props.currentPage);
  }, [props.currentPage]);

  const selectNavItem = (item: string) => {
    let navItemClass = "nav-item";

    if (currentPage === item) {
      navItemClass = "selected-nav-item";
    }

    return navItemClass;
  };

  const selectMenuItem = (item: string) => {
    let menuItemClass = "nav-menu-item";

    if (currentPage === item) {
      menuItemClass = "selected-menu-item";
    }

    return menuItemClass;
  };

  const scrollTo = (pageId: string) => {
    const targetPage = document.querySelector(`#${pageId}`);
    targetPage?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      isBordered
      className="border-foreground"
    >
      <NavbarContent className="flex sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="w-12 h-11 rounded-none border-1 border-foreground sm:hidden"
        />
      </NavbarContent>

      <NavbarBrand>
        <Logo />
        <p className="font-semibold text-3xl pl-1">Alves.</p>
      </NavbarBrand>

      <NavbarContent justify="center" className="hidden sm:flex gap-4">
        <NavbarItem>
          <button onClick={() => scrollTo("home")} className={selectNavItem("home")}>
            Home
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => scrollTo("about")} className={selectNavItem("about")}>
            About
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => scrollTo("skills")} className={selectNavItem("skills")}>
            Skills
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => scrollTo("game")} className={selectNavItem("game")}>
            Game
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => scrollTo("projects")} className={selectNavItem("projects")}>
            Projects
          </button>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => scrollTo("contact")} className={selectNavItem("contact")}>
            Contact
          </button>
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

      <NavbarMenu className="justify-center gap-20 items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="" key={`${item}-${index}`}>
            <button
              color="foreground"
              onClick={() => {
                setIsMenuOpen(false),
                  setTimeout(() => {
                    scrollTo(item.toLowerCase());
                  }, 400);
              }}
              className={selectMenuItem(item.toLowerCase())}
            >
              {item}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
