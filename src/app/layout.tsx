import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/data/site";

// Self-hosted variable font: one 27kB file covers the whole 200–800 range and
// avoids a third-party request on first paint.
const sans = localFont({
  src: "./fonts/plus-jakarta-sans-latin-wght-normal.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-sans",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kanandave.com"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.intro,
  keywords: [
    "product designer",
    "UI/UX designer",
    "brand designer",
    "design systems",
    "frontend engineer",
    "Kanan Dave",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.role}`,
    description: site.intro,
    siteName: site.name,
    images: [
      { url: site.portraitStudio, width: 820, height: 820, alt: site.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.intro,
    images: [site.portraitStudio],
  },
};

export const viewport: Viewport = {
  themeColor: "#EEF1F7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
