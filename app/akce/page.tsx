import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Akce – AMEPRA",
  description: "Přehled nadcházejících kongresů, konferencí a webinářů pořádaných agenturou AMEPRA i archiv proběhlých akcí.",
};

const upcoming = [
  { date: "Červen 2026", category: "Kongres", title: "Výroční kongres české kardiologické společnosti", location: "Praha, Congress Centre", description: "Prestižní odborná akce pro kardiologickou komunitu. Sympozia, workshopy a postgraduální kurzy." },
  { date: "Září 2026", category: "Symposium", title: "Satelitní symposium — moderní onkologická terapie", location: "Brno, Hotel International", description: "Odborné setkání zaměřené na nejnovější pokroky v onkologické terapii s mezinárodními řečníky." },
  { date: "Říjen 2026", category: "Webinář", title: "Digitální vzdělávání pro lékaře primární péče", location: "Online", description: "Interaktivní vzdělávací program s akreditací ČLK pro lékaře v primární péči." },
];

const past = [
  { year: "2025", events: ["Kongres České diabetologické společnosti – Praha", "Symposium o imunoterapii – Hradec Králové", "Webinářová série pro farmaceutické zástupce", "Výroční konference ČSIM – Ostrava"] },
  { year: "2024", events: ["Kongres neurologie – Praha", "Workshop klinické farmakologie", "Mezinárodní symposium hematologie", "Výstava zdravotnické techniky – Brno"] },
  { year: "2023", events: ["Kongres revmatologie – České Budějovice", "Satelitní sympozia ASCO Praha", "E-learning platforma pro lékaře – spuštění", "Hybridní konference endokrinologie"] },
];

const categoryColor: Record<string, string> = {
  Kongres: "rgba(64,128,255,0.15)",
  Symposium: "rgba(200,169,110,0.15)",
  Webinář: "rgba(100,200,100,0.12)",
};
const categoryText: Record<string, string> = {
  Kongres: "#4080FF",
  Symposium: "#C8A96E",
  Webinář: "#5DBD6E",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden noise-overlay" style={{ background: "linear-gradient(160deg, #06080E 0%, #0A1220 60%, #06080E 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 80% 30%, rgba(64,128,255,0.06), transparent)" }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Plánované a proběhlé</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6" style={{ color: "#F0EDE6" }}>Akce</h1>
            <p className="text-lg max-w-2xl" style={{ color: "rgba(240,237,230,0.5)" }}>Přehled nadcházejících akcí a výběr z naší bohaté historie realizovaných projektů.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn><p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Nadcházející akce</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F0EDE6" }}>Připravované projekty</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {upcoming.map((ev, i) => (
              <FadeIn key={ev.title} delay={i * 0.1}>
                <div className="group p-7 rounded-2xl h-full glass-card flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: categoryColor[ev.category] || "rgba(255,255,255,0.08)", color: categoryText[ev.category] || "#F0EDE6" }}>{ev.category}</span>
                    <span className="text-xs font-medium" style={{ color: "rgba(240,237,230,0.35)" }}>{ev.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 flex-1" style={{ color: "#F0EDE6" }}>{ev.title}</h3>
                  <div className="flex items-center gap-1.5 mb-3">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#C8A96E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    <span className="text-xs" style={{ color: "rgba(240,237,230,0.4)" }}>{ev.location}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,230,0.45)" }}>{ev.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: "#06080E" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn><p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Archiv</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F0EDE6" }}>Proběhlé akce</h2>
          </FadeIn>
          <div className="space-y-10">
            {past.map((yg, yi) => (
              <FadeIn key={yg.year} delay={yi * 0.08}>
                <h3 className="font-display text-xl font-bold mb-4 pb-3" style={{ color: "#C8A96E", borderBottom: "1px solid rgba(200,169,110,0.15)" }}>{yg.year}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {yg.events.map((ev) => (
                    <div key={ev} className="flex items-start gap-2.5 p-4 rounded-xl" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#C8A96E", opacity: 0.6 }} />
                      <span className="text-sm" style={{ color: "rgba(240,237,230,0.55)" }}>{ev}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #080C18, #0C1525)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,169,110,0.06), transparent)" }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Plánujete vlastní akci?</h2>
            <p className="mb-8" style={{ color: "rgba(240,237,230,0.5)" }}>Obraťte se na nás a připravíme nezapomenutelnou akci.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
