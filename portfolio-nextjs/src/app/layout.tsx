import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Kanan Dave | Software Developer",
  description:
    "Portfolio of Kanan Dave - Software Developer specializing in React, Node.js, AI, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
