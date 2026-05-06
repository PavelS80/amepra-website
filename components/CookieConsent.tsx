"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "amepra_cookie_consent";

type Consent = "all" | "necessary" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | "loading">("loading");

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setConsent(localStorage.getItem(STORAGE_KEY) as Consent | null); }, []);

  const accept = (level: "all" | "necessary") => {
    localStorage.setItem(STORAGE_KEY, level);
    setConsent(level);
    // Enable GA if full consent given
    if (level === "all" && typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("cookie-consent-granted"));
    }
  };

  if (consent !== null) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 rounded-2xl shadow-2xl p-6"
      style={{
        backgroundColor: "white",
        border: "1px solid #e2e8f0",
        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      }}
      role="dialog"
      aria-label="Nastavení cookies"
    >
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "#eff6ff" }}
        >
          <svg className="w-4 h-4" style={{ color: "#1e73be" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-bold mb-1" style={{ color: "#0c1b33" }}>
            Používáme cookies
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
            Cookies nám pomáhají zlepšovat web a analyzovat návštěvnost. Analytické cookies jsou aktivovány pouze s vaším souhlasem.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => accept("all")}
          className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#0c1b33" }}
        >
          Přijmout vše
        </button>
        <button
          onClick={() => accept("necessary")}
          className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all hover:bg-slate-100"
          style={{ color: "#475569", border: "1px solid #e2e8f0" }}
        >
          Pouze nezbytné
        </button>
      </div>

      <p className="mt-3 text-center text-xs" style={{ color: "#94a3b8" }}>
        Více informací v{" "}
        <a href="#" className="underline hover:no-underline" style={{ color: "#64748b" }}>
          zásadách cookies
        </a>
      </p>
    </div>
  );
}
