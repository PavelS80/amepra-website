import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMEPRA – Marketingová a produkční agentura pro zdravotnictví",
  description:
    "AMEPRA je přední marketingová a produkční agentura exkluzivně zaměřená na zdravotnický sektor. Pořádáme kongresy, konference, symposia a zajišťujeme komplexní komunikaci pro farmaceutické společnosti.",
  keywords:
    "amepra, zdravotnictví, marketing, produkce, kongres, konference, farmacie, digitální komunikace",
  openGraph: {
    title: "AMEPRA – Marketingová a produkční agentura pro zdravotnictví",
    description:
      "Přes 16 let zkušeností v exkluzivním zaměření na zdravotnický sektor.",
    url: "https://www.amepra.cz",
    siteName: "AMEPRA",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
