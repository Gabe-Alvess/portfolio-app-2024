"use client";

import { Logo } from "./Logo";
import { useState } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Skills", "Game", "Projects", "Contact"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      isBordered
      shouldHideOnScroll
      className="font-poppins font-semibold border-b-primary"
    >
      <NavbarBrand>
        <Logo />
        <p className="font-montserrat font-bold text-2xl pl-1">Alves.</p>
      </NavbarBrand>

      <NavbarContent justify="center" className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link className="nav-item-anim" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="nav-item-anim" href="/About">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="nav-item-anim" href="/Skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="nav-item-anim" href="/Game">
            Game
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="nav-item-anim" href="/Projects">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="flex sm:hidden">
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="w-12 h-11 rounded-none border-1 border-primary sm:hidden"
        />
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Link className="font-medium border-1 border-primary py-2 px-5 contact-anim" href="/Contact">
            Let&apos;s Talk
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full font-poppins justify-center p-2 hover:text-secondary"
              href={item === "Home" ? "/" : "/" + item}
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
