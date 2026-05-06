import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Reference – AMEPRA",
  description: "Case studies, ohlasy klientů a portfolio projektů agentury AMEPRA ze zdravotnického sektoru.",
};

const cases = [
  { category: "Kongres", title: "Výroční kongres s mezinárodní účastí", description: "Organizace třídenního odborného kongresu s 800+ účastníky, 40 přednášejícími a 12 satelitními sympoziemi. Kompletní zajištění od místa konání po gala večer.", metrics: ["800+ účastníků", "40 přednášejících", "12 sympozií", "3 dny"] },
  { category: "Digitální komunikace", title: "Série vzdělávacích webinářů s akreditací", description: "Roční vzdělávací program pro lékaře. 24 webinářů, vlastní platforma s certifikací, průměrná účast 350 lékařů na webinář.", metrics: ["24 webinářů", "350 účastníků", "Akreditace ČLK", "Vlastní platforma"] },
  { category: "Reklama", title: "Komunikační kampaň — uvedení nového léku", description: "Kreativní strategie a realizace kampaně pro HCP. Tiskové materiály, online kampaň, edukační materiály a kongresová prezentace.", metrics: ["Multi-channel", "HCP targeting", "Reg. schválení", "3 měsíce"] },
];

const testimonials = [
  { quote: "Spolupráce s AMEPRA přinesla našemu kongresu novou úroveň profesionality. Od logistiky po vědecký program — vše proběhlo bez problémů.", author: "Prof. MUDr. Jan Novák", role: "Předseda vědeckého výboru", org: "Česká kardiologická společnost" },
  { quote: "AMEPRA rozumí specifickému prostředí farmaceutického průmyslu. Jejich kreativní kampaně respektují regulatorní požadavky a přitom jsou skutečně efektivní.", author: "Mgr. Petra Horáčková", role: "Marketing Director", org: "Farmaceutická společnost" },
  { quote: "Technické zajištění bylo na světové úrovni. Hybridní formát s živým přenosem zvládli perfektně — účastníci z celé Evropy.", author: "MUDr. Tomáš Blaha", role: "Organizátor konference", org: "Odborná společnost neurologie" },
];

export default function ReferencePage() {
  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden noise-overlay" style={{ background: "linear-gradient(160deg, #06080E 0%, #0A1220 60%, #06080E 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 20% 70%, rgba(200,169,110,0.06), transparent)" }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Portfolio</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6" style={{ color: "#F0EDE6" }}>Reference</h1>
            <p className="text-lg max-w-2xl" style={{ color: "rgba(240,237,230,0.5)" }}>Přes 16 let budujeme důvěru skrze výsledky. Prohlédněte si ukázky naší práce a ohlasy spokojených klientů.</p>
          </FadeIn>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn><p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Vybrané projekty</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F0EDE6" }}>Case studies</h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {cases.map((cs, i) => (
              <FadeIn key={cs.title} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden glass-card flex flex-col h-full">
                  <div className="h-1" style={{ background: "linear-gradient(90deg, #A08040, #C8A96E, #E2C07C)" }} />
                  <div className="p-7 flex flex-col flex-1">
                    <span className="text-[10px] font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#C8A96E" }}>{cs.category}</span>
                    <h3 className="font-display text-lg font-bold mb-3 flex-1" style={{ color: "#F0EDE6" }}>{cs.title}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(240,237,230,0.5)" }}>{cs.description}</p>
                    <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                      {cs.metrics.map((m) => (
                        <span key={m} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: "rgba(200,169,110,0.08)", color: "#C8A96E", border: "1px solid rgba(200,169,110,0.15)" }}>{m}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#06080E" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Co říkají klienti</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F0EDE6" }}>Ohlasy partnerů</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.1}>
                <div className="p-8 rounded-2xl glass-card">
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} className="w-4 h-4" style={{ color: "#C8A96E" }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="font-display text-sm italic leading-relaxed mb-6" style={{ color: "rgba(240,237,230,0.65)" }}>&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg, #A08040, #C8A96E)", color: "#06080E" }}>
                      {t.author.charAt(t.author.lastIndexOf(" ") + 1)}
                    </div>
                    <div>
                      <div className="text-sm font-bold" style={{ color: "#F0EDE6" }}>{t.author}</div>
                      <div className="text-xs" style={{ color: "rgba(240,237,230,0.35)" }}>{t.role}, {t.org}</div>
                    </div>
                  </div>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Staňte se naším dalším úspěchem</h2>
            <p className="mb-8" style={{ color: "rgba(240,237,230,0.5)" }}>Rádi přidáme váš projekt do portfolia.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
