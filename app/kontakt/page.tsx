import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Kontakt – AMEPRA",
  description: "Kontaktujte agenturu AMEPRA. Španělská 1073/10, Praha 2. Tel: +420 221 180 260. E-mail: info@amepra.cz.",
};

export default function ContactPage() {
  return (
    <>
      {/* FULL-SCREEN SPLIT LAYOUT */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — dark, bold contact info */}
        <div
          className="relative flex flex-col justify-between px-8 sm:px-12 lg:px-16 pt-36 pb-16 overflow-hidden"
          style={{ backgroundColor: "#06080E" }}
        >
          {/* Decorative orb */}
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
          <div className="absolute top-1/2 right-0 w-px h-1/2 -translate-y-1/2 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.15), transparent)" }} />

          {/* Top content */}
          <div className="relative z-10">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#C8A96E" }}>Jsme tu pro vás</p>
              <h1 className="font-display font-bold leading-[0.95] mb-10" style={{ fontSize: "clamp(48px, 7vw, 96px)", color: "#F0EDE6" }}>
                Pojďme<br /><em className="not-italic shimmer-gold">mluvit.</em>
              </h1>
            </FadeIn>

            <div className="space-y-8 mt-6">
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(200,169,110,0.5)" }}>Telefon</p>
                  <a href="tel:+420221180260" className="font-display text-2xl md:text-3xl font-bold transition-colors hover:text-[#C8A96E]" style={{ color: "#F0EDE6" }}>
                    +420 221 180 260
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(200,169,110,0.5)" }}>E-mail</p>
                  <a href="mailto:info@amepra.cz" className="font-display text-2xl md:text-3xl font-bold transition-colors hover:text-[#C8A96E]" style={{ color: "#F0EDE6" }}>
                    info@amepra.cz
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(200,169,110,0.5)" }}>Adresa</p>
                  <p className="font-display text-xl md:text-2xl font-bold" style={{ color: "#F0EDE6" }}>
                    Španělská 1073/10<br />
                    <span style={{ color: "rgba(240,237,230,0.5)" }}>120 00 Praha 2</span>
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Bottom — hours + map link */}
          <div className="relative z-10 mt-16">
            <FadeIn delay={0.3}>
              <div className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.12)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(200,169,110,0.5)" }}>Pracovní doba</p>
                    <p className="text-base font-semibold" style={{ color: "#F0EDE6" }}>Po – Pá: 9:00 – 18:00</p>
                  </div>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#5DBD6E" }} />
                </div>
                <a
                  href="https://maps.google.com/?q=Španělská+1073/10,+Praha+2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                  style={{ color: "#C8A96E" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  Otevřít v Google Maps →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* RIGHT — form section */}
        <div
          className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24"
          style={{ backgroundColor: "#090D1A" }}
        >
          <FadeIn direction="left" delay={0.1}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Napište nám</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: "#F0EDE6" }}>Pošlete zprávu</h2>
            <p className="text-sm mb-10" style={{ color: "rgba(240,237,230,0.45)" }}>Ozveme se do 24 hodin v pracovní dny.</p>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
