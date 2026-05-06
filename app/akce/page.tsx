import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Akce – AMEPRA",
  description: "Přehled nadcházejících kongresů, konferencí a webinářů pořádaných agenturou AMEPRA i archiv proběhlých akcí.",
};

const upcoming = [
  {
    month: "ČVN", monthFull: "Červen", year: "2026", day: "10–12",
    category: "Kongres", color: "#4080FF",
    title: "Výroční kongres české kardiologické společnosti",
    location: "Congress Centre Praha",
    description: "Prestižní odborná akce pro kardiologickou komunitu. Sympozia, workshopy a postgraduální kurzy.",
  },
  {
    month: "ZÁŘ", monthFull: "Září", year: "2026", day: "18",
    category: "Symposium", color: "#C8A96E",
    title: "Satelitní symposium — moderní onkologická terapie",
    location: "Hotel International Brno",
    description: "Odborné setkání zaměřené na nejnovější pokroky v onkologické terapii s mezinárodními řečníky.",
  },
  {
    month: "ŘÍJ", monthFull: "Říjen", year: "2026", day: "24",
    category: "Webinář", color: "#5DBD6E",
    title: "Digitální vzdělávání pro lékaře primární péče",
    location: "Online",
    description: "Interaktivní vzdělávací program s akreditací ČLK pro lékaře v primární péči.",
  },
];

const past = [
  { year: "2025", events: ["Kongres České diabetologické společnosti – Praha", "Symposium o imunoterapii – Hradec Králové", "Webinářová série pro farmaceutické zástupce", "Výroční konference ČSIM – Ostrava"] },
  { year: "2024", events: ["Kongres neurologie – Praha", "Workshop klinické farmakologie", "Mezinárodní symposium hematologie", "Výstava zdravotnické techniky – Brno"] },
  { year: "2023", events: ["Kongres revmatologie – České Budějovice", "Satelitní sympozia ASCO Praha", "E-learning platforma pro lékaře – spuštění", "Hybridní konference endokrinologie"] },
];

export default function EventsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden noise-overlay" style={{ background: "#06080E" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 80% 30%, rgba(64,128,255,0.07), transparent)" }} />
        <div className="absolute bottom-0 left-0 font-display font-bold leading-none select-none pointer-events-none" style={{ fontSize: "clamp(150px, 25vw, 360px)", color: "rgba(64,128,255,0.04)", lineHeight: 0.8 }}>2026</div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 pt-48">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#C8A96E" }}>Kalendář akcí</p>
            <h1 className="font-display font-bold leading-[0.95]" style={{ fontSize: "clamp(56px, 9vw, 120px)", color: "#F0EDE6" }}>
              Nadcházející<br /><em className="not-italic" style={{ color: "#4080FF" }}>akce.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg mt-8 max-w-xl" style={{ color: "rgba(240,237,230,0.5)" }}>
              Přehled plánovaných kongresů, sympozií a webinářů i výběr z naší bohaté historie.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* UPCOMING — bold card per event */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-5">
            {upcoming.map((ev, i) => (
              <FadeIn key={ev.title} delay={i * 0.1}>
                <div
                  className="group grid grid-cols-12 gap-6 p-8 md:p-10 rounded-3xl transition-all duration-300"
                  style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {/* Date block */}
                  <div className="col-span-12 md:col-span-2 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                    <div
                      className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${ev.color}15`, border: `1px solid ${ev.color}30` }}
                    >
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ev.color }}>{ev.month}</span>
                      <span className="font-display text-2xl font-bold leading-tight" style={{ color: "#F0EDE6" }}>{ev.day}</span>
                      <span className="text-xs" style={{ color: "rgba(240,237,230,0.3)" }}>{ev.year}</span>
                    </div>
                  </div>

                  {/* Category + Title */}
                  <div className="col-span-12 md:col-span-5">
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3" style={{ backgroundColor: `${ev.color}15`, color: ev.color }}>
                      {ev.category}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-bold" style={{ color: "#F0EDE6" }}>{ev.title}</h3>
                  </div>

                  {/* Description + location */}
                  <div className="col-span-12 md:col-span-5">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#C8A96E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className="text-sm font-medium" style={{ color: "#C8A96E" }}>{ev.location}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,230,0.45)" }}>{ev.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHIVE — years as bold anchors */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#06080E" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Archiv</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-20" style={{ color: "#F0EDE6" }}>Proběhlé akce</h2>
          </FadeIn>
          {past.map((yg, yi) => (
            <FadeIn key={yg.year} delay={yi * 0.1}>
              <div className="mb-16">
                <div className="flex items-baseline gap-8 mb-8">
                  <span className="font-display font-bold" style={{ fontSize: "clamp(64px, 8vw, 110px)", color: "rgba(200,169,110,0.12)", lineHeight: 1 }}>{yg.year}</span>
                  <div className="flex-1 h-px" style={{ backgroundColor: "rgba(200,169,110,0.1)" }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-4">
                  {yg.events.map((ev, ei) => (
                    <FadeIn key={ev} delay={yi * 0.1 + ei * 0.05}>
                      <div className="p-5 rounded-2xl transition-colors duration-300 hover:border-[rgba(200,169,110,0.2)]" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="w-1 h-6 rounded-full mb-4" style={{ backgroundColor: "rgba(200,169,110,0.3)" }} />
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,230,0.55)" }}>{ev}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #080C18, #0C1525)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,169,110,0.06), transparent)" }} />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <FadeIn>
            <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#F0EDE6", lineHeight: 1.1 }}>
              Plánujete<br /><em className="not-italic shimmer-gold">vlastní akci?</em>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>Obraťte se na nás a připravíme nezapomenutelnou akci.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
