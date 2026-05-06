import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AMEPRA – Marketingová a produkční agentura pro zdravotnictví",
  description:
    "AMEPRA je přední marketingová a produkční agentura exkluzivně zaměřená na zdravotnický sektor. Pořádáme kongresy, konference, symposia a zajišťujeme komplexní komunikaci pro farmaceutické společnosti.",
  keywords: "amepra, zdravotnictví, marketing, produkce, kongres, konference, farmacie, digitální komunikace",
  openGraph: {
    title: "AMEPRA – Marketingová a produkční agentura pro zdravotnictví",
    description: "Přes 16 let zkušeností v exkluzivním zaměření na zdravotnický sektor.",
    url: "https://www.amepra.cz",
    siteName: "AMEPRA",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" style={{ backgroundColor: "#06080E", color: "#F0EDE6" }}>
        <Analytics />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
