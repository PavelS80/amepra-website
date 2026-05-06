import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Reference – AMEPRA",
  description: "Case studies, ohlasy klientů a portfolio projektů agentury AMEPRA ze zdravotnického sektoru.",
};

const cases = [
  {
    category: "Kongres", size: "large",
    title: "Výroční kongres s mezinárodní účastí",
    description: "Organizace třídenního odborného kongresu s 800+ účastníky, 40 přednášejícími a 12 satelitními sympoziemi. Kompletní zajištění od místa konání po gala večer.",
    metrics: [{ val: "800+", label: "účastníků" }, { val: "40", label: "přednášejících" }, { val: "12", label: "sympozií" }, { val: "3", label: "dny" }],
  },
  {
    category: "Digitální komunikace", size: "small",
    title: "Série vzdělávacích webinářů s akreditací",
    description: "Roční vzdělávací program pro lékaře. 24 webinářů, vlastní platforma s certifikací.",
    metrics: [{ val: "24", label: "webinářů" }, { val: "350", label: "účastníků/web." }],
  },
  {
    category: "Reklama", size: "small",
    title: "Komunikační kampaň — uvedení nového léku",
    description: "Kreativní strategie a realizace kampaně pro HCP. Multi-channel přístup, regulatorní schválení.",
    metrics: [{ val: "3", label: "měsíce" }, { val: "Multi", label: "channel" }],
  },
];

const testimonials = [
  {
    quote: "Spolupráce s AMEPRA přinesla našemu kongresu novou úroveň profesionality. Od logistiky po vědecký program — vše proběhlo bez problémů.",
    author: "Prof. MUDr. Jan Novák",
    role: "Předseda vědeckého výboru",
    org: "Česká kardiologická společnost",
    initial: "N",
  },
  {
    quote: "AMEPRA rozumí specifickému prostředí farmaceutického průmyslu. Jejich kreativní kampaně respektují regulatorní požadavky a přitom jsou skutečně efektivní.",
    author: "Mgr. Petra Horáčková",
    role: "Marketing Director",
    org: "Farmaceutická společnost",
    initial: "H",
  },
  {
    quote: "Technické zajištění bylo na světové úrovni. Hybridní formát s živým přenosem zvládli perfektně — účastníci z celé Evropy.",
    author: "MUDr. Tomáš Blaha",
    role: "Organizátor konference",
    org: "Odborná společnost neurologie",
    initial: "B",
  },
];

export default function ReferencePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden noise-overlay" style={{ background: "#06080E" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 70% at 20% 60%, rgba(200,169,110,0.06), transparent)" }} />
        {/* Big background text */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 font-display font-bold select-none pointer-events-none leading-none" style={{ fontSize: "clamp(120px, 20vw, 280px)", color: "rgba(200,169,110,0.04)" }}>REF</div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 pt-48">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#C8A96E" }}>Portfolio</p>
            <h1 className="font-display font-bold leading-[0.95]" style={{ fontSize: "clamp(56px, 9vw, 128px)", color: "#F0EDE6" }}>
              Výsledky,<br /><em className="not-italic shimmer-gold">které mluví.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg mt-8 max-w-xl" style={{ color: "rgba(240,237,230,0.5)" }}>
              Přes 16 let budujeme důvěru skrze výsledky. Prohlédněte si ukázky naší práce.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CASE STUDIES — asymmetric layout */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Vybrané projekty</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: "#F0EDE6" }}>Case studies</h2>
          </FadeIn>

          {/* Large featured case */}
          <FadeIn>
            <div className="rounded-3xl overflow-hidden mb-5" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="h-1.5" style={{ background: "linear-gradient(90deg, #A08040, #C8A96E, #E2C07C, #C8A96E)" }} />
              <div className="p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest mb-4 block" style={{ color: "#C8A96E" }}>{cases[0].category}</span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-5" style={{ color: "#F0EDE6" }}>{cases[0].title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,230,0.55)" }}>{cases[0].description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {cases[0].metrics.map((m) => (
                    <div key={m.label} className="p-6 rounded-2xl text-center" style={{ backgroundColor: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.12)" }}>
                      <div className="font-display text-4xl font-bold mb-1 gradient-text">{m.val}</div>
                      <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(200,169,110,0.6)" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Two smaller cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cases.slice(1).map((cs, i) => (
              <FadeIn key={cs.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl overflow-hidden" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="h-1" style={{ background: "linear-gradient(90deg, #A08040, #C8A96E)" }} />
                  <div className="p-8">
                    <span className="text-[10px] font-semibold uppercase tracking-widest mb-3 block" style={{ color: "#C8A96E" }}>{cs.category}</span>
                    <h3 className="font-display text-xl font-bold mb-3" style={{ color: "#F0EDE6" }}>{cs.title}</h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(240,237,230,0.5)" }}>{cs.description}</p>
                    <div className="flex gap-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                      {cs.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display text-2xl font-bold gradient-text">{m.val}</div>
                          <div className="text-xs" style={{ color: "rgba(240,237,230,0.35)" }}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — large editorial quotes */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#06080E" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="mb-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Co říkají klienti</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "#F0EDE6" }}>Ohlasy partnerů</h2>
            </div>
          </FadeIn>

          <div className="space-y-0">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.1}>
                <div
                  className="group py-12 md:py-16 grid grid-cols-12 gap-8 transition-all duration-300"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* Large quote mark */}
                  <div className="col-span-12 md:col-span-1 flex items-start">
                    <span className="font-display text-7xl leading-none select-none" style={{ color: "rgba(200,169,110,0.15)" }}>&ldquo;</span>
                  </div>
                  {/* Quote */}
                  <div className="col-span-12 md:col-span-7">
                    <blockquote className="font-display text-xl md:text-2xl font-medium leading-relaxed mb-6" style={{ color: "rgba(240,237,230,0.8)" }}>
                      {t.quote}
                    </blockquote>
                  </div>
                  {/* Author */}
                  <div className="col-span-12 md:col-span-4 flex md:justify-end items-start md:pt-2">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg, #A08040, #C8A96E)", color: "#06080E" }}>
                        {t.initial}
                      </div>
                      <div>
                        <div className="text-sm font-bold" style={{ color: "#F0EDE6" }}>{t.author}</div>
                        <div className="text-xs mt-0.5" style={{ color: "rgba(240,237,230,0.4)" }}>{t.role}</div>
                        <div className="text-xs" style={{ color: "rgba(200,169,110,0.5)" }}>{t.org}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #080C18, #0C1525)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,169,110,0.06), transparent)" }} />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <FadeIn>
            <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#F0EDE6", lineHeight: 1.1 }}>
              Staňte se naším<br /><em className="not-italic shimmer-gold">dalším úspěchem.</em>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>Rádi přidáme váš projekt do portfolia.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
