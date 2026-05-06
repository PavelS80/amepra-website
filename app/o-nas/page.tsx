import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "O nás – AMEPRA",
  description: "Více než 16 let exkluzivně v zdravotnictví. Poznejte historii, hodnoty a tým marketingové agentury AMEPRA.",
};

const milestones = [
  { year: "2008", event: "Založení společnosti AMEPRA v Praze" },
  { year: "2010", event: "Rozšíření portfolia o digitální komunikaci" },
  { year: "2014", event: "Přesah na mezinárodní kongresy v rámci EU" },
  { year: "2018", event: "Zavedení hybridních formátů a živých přenosů" },
  { year: "2020", event: "Úspěšný přechod na plně online formáty (COVID-19)" },
  { year: "2022", event: "Spuštění VR aplikací pro medicínské vzdělávání" },
  { year: "2024", event: "Přes 100 úspěšně realizovaných kongresů" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO — full viewport, massive typography */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden noise-overlay" style={{ background: "#06080E" }}>
        {/* Giant background year */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none font-display font-bold leading-none"
          style={{ fontSize: "clamp(160px, 28vw, 380px)", color: "rgba(200,169,110,0.04)", whiteSpace: "nowrap" }}
        >
          2008
        </div>
        {/* Diagonal gold accent line */}
        <div className="absolute top-0 right-0 w-px h-full opacity-20" style={{ background: "linear-gradient(to bottom, transparent, #C8A96E 40%, transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-24 pt-48">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#C8A96E" }}>O společnosti</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold leading-[0.95] mb-0" style={{ fontSize: "clamp(64px, 10vw, 140px)", color: "#F0EDE6" }}>
              Zdravotnictví<br />
              <em className="not-italic shimmer-gold">je náš svět.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="mt-10 max-w-xl">
              <p className="text-lg leading-relaxed" style={{ color: "rgba(240,237,230,0.5)" }}>
                Od roku 2008 se pohybujeme výhradně v prostoru zdravotnického marketingu. Žádné kompromisy, žádné odbočky — jen hluboká specializace, která přináší výsledky.
              </p>
            </div>
          </FadeIn>

          {/* Stats inline */}
          <FadeIn delay={0.35}>
            <div className="flex flex-wrap gap-12 mt-16 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                { to: 16, suffix: "+", label: "let na trhu" },
                { to: 100, suffix: "+", label: "kongresů" },
                { to: 50, suffix: "+", label: "klientů" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-5xl font-bold gradient-text mb-1">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <p className="text-sm" style={{ color: "rgba(240,237,230,0.4)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MANIFESTO — bold editorial section */}
      <section className="py-32 md:py-40" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <FadeIn>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Naše poslání</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]" style={{ color: "#F0EDE6" }}>
                  Specializace,<br />která<br /><em className="not-italic shimmer-gold">rozhoduje.</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-8 space-y-8">
              {[
                { lead: "Exkluzivní focus.", body: "AMEPRA funguje výhradně v zdravotnickém sektoru. Tento záměrný výběr nám umožňuje hluboce rozumět regulatornímu prostředí, potřebám lékařů i logice farmaceutického trhu." },
                { lead: "Etika v centru.", body: "Respektujeme etické kodexy a regulatorní požadavky. V prostředí, kde každé sdělení musí projít přísným schválením, je naše zkušenost neocenitelnou výhodou." },
                { lead: "Partnerství místo dodavatelství.", body: "Spolupracujeme s farmaceutickými společnostmi, odbornými lékařskými společnostmi, státními institucemi a zdravotnickými neziskovými organizacemi jako skuteční partneři." },
                { lead: "Inovace s rozvahou.", body: "VR aplikace, hybridní akce, interaktivní platformy — integrujeme nejnovější formáty tam, kde skutečně přinášejí hodnotu, ne proto, aby to vypadalo moderně." },
              ].map((item, i) => (
                <FadeIn key={item.lead} delay={i * 0.1}>
                  <div className="p-8 rounded-2xl" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <h3 className="font-display text-xl font-bold mb-3" style={{ color: "#C8A96E" }}>{item.lead}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,230,0.55)" }}>{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE — bold vertical with huge years */}
      <section className="py-32 overflow-hidden" style={{ backgroundColor: "#06080E" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Historie</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-20" style={{ color: "#F0EDE6" }}>Naše milníky</h2>
          </FadeIn>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.06}>
                <div
                  className="group grid grid-cols-12 gap-6 py-8 transition-colors duration-300"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* Year — huge */}
                  <div className="col-span-3 md:col-span-2">
                    <span
                      className="font-display font-bold transition-colors duration-300 group-hover:text-[#C8A96E]"
                      style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "rgba(200,169,110,0.2)", lineHeight: 1 }}
                    >
                      {m.year}
                    </span>
                  </div>
                  {/* Dot */}
                  <div className="col-span-1 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150" style={{ backgroundColor: "#C8A96E", opacity: 0.4 }} />
                  </div>
                  {/* Event */}
                  <div className="col-span-8 md:col-span-9 flex items-center">
                    <p className="text-lg md:text-xl font-medium transition-colors duration-300 group-hover:text-white" style={{ color: "rgba(240,237,230,0.6)" }}>{m.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #080C18, #0C1525)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,169,110,0.06), transparent)" }} />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <FadeIn>
            <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#F0EDE6", lineHeight: 1.05 }}>
              Chcete s námi<br /><em className="not-italic shimmer-gold">spolupracovat?</em>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>Ozvěte se nám a probereme vaše potřeby.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt" className="px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
              <Link href="/sluzby" className="px-8 py-4 rounded-xl text-sm font-medium btn-outline">Naše služby</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
