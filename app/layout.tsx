import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import NavbarComponent from "@/components/NavbarComponent";

export const metadata: Metadata = {
  title: "Gabriel Alves - Junior Java Developer",
  description: "A portfolio website, where I showcase my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
