"use client";

import "./globals.css";
import Game from "./game/Game";
import About from "./about/About";
import Skills from "./skills/Skills";
import { Providers } from "./providers";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import { useEffect, useRef, useState } from "react";
import NavbarComponent from "@/components/NavbarComponent";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentPage(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    const pageRefs = [homeRef, aboutRef, skillsRef, gameRef, projectsRef, contactRef];

    pageRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Gabriel Alves - Junior Java Developer</title>
        <meta name="description" content="A portfolio website, where I showcase my projects and skills." />
      </head>
      <body>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <NavbarComponent currentPage={currentPage} />
          <section id="home" ref={homeRef}>
            {children}
          </section>
          <section id="about" ref={aboutRef}>
            <About />
          </section>
          <section id="skills" ref={skillsRef}>
            <Skills />
          </section>
          <section id="game" ref={gameRef}>
            <Game />
          </section>
          <section id="projects" ref={projectsRef}>
            <Projects />
          </section>
          <section id="contact" ref={contactRef}>
            <Contact />
          </section>
          <ScrollTopButton currentPage={currentPage} />
        </Providers>
      </body>
    </html>
  );
}
