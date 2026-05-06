"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled || menuOpen
            ? "rgba(6, 8, 14, 0.92)"
            : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled || menuOpen
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="AMEPRA"
                width={130}
                height={48}
                className="h-9 w-auto transition-opacity duration-300 group-hover:opacity-80"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group"
                    style={{ color: active ? "#F0EDE6" : "rgba(240,237,230,0.5)" }}
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                      {link.label}
                    </span>
                    {active && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/kontakt"
                className="ml-4 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 btn-gold"
              >
                Kontaktujte nás
              </Link>
            </nav>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "rgba(240,237,230,0.7)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 space-y-1.5">
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 9 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="block h-0.5 bg-current"
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 bg-current"
                />
                <motion.span
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -9 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="block h-0.5 bg-current"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden pt-20"
            style={{ backgroundColor: "rgba(6,8,14,0.97)", backdropFilter: "blur(20px)" }}
          >
            <nav className="px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-4 rounded-xl text-base font-medium transition-colors"
                    style={{
                      color: pathname === link.href ? "#F0EDE6" : "rgba(240,237,230,0.5)",
                      backgroundColor: pathname === link.href ? "rgba(255,255,255,0.06)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-4">
                <Link
                  href="/kontakt"
                  className="block px-4 py-4 rounded-xl text-sm font-semibold text-center btn-gold"
                >
                  Kontaktujte nás
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
