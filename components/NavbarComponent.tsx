"use client";

import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { Navbar, NavbarContent, NavbarItem, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";

export default function NavbarComponent() {
  const [selected, setSelected] = useState("Home");
  const [currentPath, setCurrentPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Game", "Projects", "Contact"];

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSelectedItem = (item: string) => {
    let itemClasses = "nav-item-anim";

    if (item === selected) {
      itemClasses = "item-selected";
    } else if (currentPath === `#${selected}`) {
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
          <Link onClick={() => setSelected("Home")} className={handleSelectedItem("Home")} href="#Home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={() => setSelected("About")} className={handleSelectedItem("About")} href="#About">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={() => setSelected("Skills")} className={handleSelectedItem("Skills")} href="#Skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={() => setSelected("Game")} className={handleSelectedItem("Game")} href="#Game">
            Game
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={() => setSelected("Projects")} className={handleSelectedItem("Projects")} href="#Projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={() => setSelected("Contact")} className={handleSelectedItem("Contact")} href="#Contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem>
          <p className="text-lg">{currentPath}</p>
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
