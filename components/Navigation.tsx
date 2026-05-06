"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/o-nas", label: "O nás" },
  { href: "/sluzby", label: "Služby" },
  { href: "/akce", label: "Akce" },
  { href: "/reference", label: "Reference" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                  transparent
                    ? "bg-white/20 text-white"
                    : "bg-navy-900 text-white"
                }`}
                style={{ backgroundColor: transparent ? "rgba(255,255,255,0.2)" : "#0c1b33" }}
              >
                A
              </div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors ${
                  transparent ? "text-white" : "text-navy-900"
                }`}
                style={{ color: transparent ? "white" : "#0c1b33" }}
              >
                AMEPRA
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? transparent
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-navy-900"
                      : transparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  style={
                    active && !transparent
                      ? { color: "#0c1b33" }
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className="ml-3 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: transparent ? "rgba(255,255,255,0.15)" : "#0c1b33",
                color: "white",
                border: transparent ? "1px solid rgba(255,255,255,0.3)" : "none",
              }}
            >
              Kontaktujte nás
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              transparent
                ? "text-white hover:bg-white/10"
                : "text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                } ${transparent ? "bg-white" : "bg-slate-700"}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                } ${transparent ? "bg-white" : "bg-slate-700"}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2.5" : ""
                } ${transparent ? "bg-white" : "bg-slate-700"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-slate-100`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center text-white"
            style={{ backgroundColor: "#0c1b33" }}
          >
            Kontaktujte nás
          </Link>
        </nav>
      </div>
    </header>
  );
}
