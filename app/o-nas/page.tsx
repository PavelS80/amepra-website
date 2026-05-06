import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "O nás – AMEPRA",
  description: "Více než 16 let exkluzivně v zdravotnictví. Poznejte historii, hodnoty a tým marketingové agentury AMEPRA.",
};

const values = [
  { title: "Etický přístup", description: "Respektujeme etické kodexy a regulatorní požadavky platné ve zdravotnictví. Pracujeme transparentně a odpovědně." },
  { title: "Odbornost", description: "Náš tým tvoří specialisté s hlubokými znalostmi zdravotnického sektoru — od farmaceutického marketingu po organizaci kongresů." },
  { title: "Inovace", description: "Sledujeme nejnovější trendy — VR aplikace, hybridní akce, interaktivní platformy — a integrujeme je do každého projektu." },
  { title: "Partnerství", description: "Kommunikujeme jako partner, ne jako dodavatel. Váš úspěch je naším cílem." },
];

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
      {/* Hero */}
      <section
        className="relative pt-36 pb-24 overflow-hidden noise-overlay"
        style={{ background: "linear-gradient(160deg, #06080E 0%, #0A1220 60%, #06080E 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(64,128,255,0.07), transparent)" }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Společnost</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6" style={{ color: "#F0EDE6" }}>
              O nás
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "rgba(240,237,230,0.5)" }}>
              Jsme marketingová a produkční agentura s exkluzivním zaměřením na zdravotnický sektor. Od roku 2008.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission + Stats */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Naše poslání</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-[1.1]" style={{ color: "#F0EDE6" }}>
                Specializace, která<br /><em className="not-italic shimmer-gold">přináší výsledky</em>
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "rgba(240,237,230,0.55)" }}>
                <p>AMEPRA je marketingová a produkční agentura, která od svého vzniku v roce 2008 působí výhradně v zdravotnickém sektoru. Tato exkluzivní specializace nám umožňuje nabídnout hlubší znalosti a výsledky, které generalisté jednoduše nemohou dosáhnout.</p>
                <p>Spolupracujeme s farmaceutickými společnostmi, odbornými lékařskými společnostmi, státními institucemi a zdravotnickými neziskovými organizacemi.</p>
                <p>Za více než 16 let jsme realizovali přes 100 kongresů a konferencí. Každý s naprosto jedinečným, etickým a profesionálním přístupem.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4">
              {[
                { to: 16, suffix: "+", label: "let na trhu", desc: "Nepřetržité působení" },
                { to: 100, suffix: "+", label: "kongresů", desc: "Úspěšně realizováno" },
                { to: 50, suffix: "+", label: "klientů", desc: "Spokojených partnerů" },
                { to: 7, suffix: "", label: "specializací", desc: "Komplexní pokrytí" },
              ].map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.1}>
                  <div
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="font-display text-4xl font-bold mb-1 gradient-text">
                      <Counter to={stat.to} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: "#F0EDE6" }}>{stat.label}</div>
                    <p className="text-xs" style={{ color: "rgba(240,237,230,0.35)" }}>{stat.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#06080E" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Naše hodnoty</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F0EDE6" }}>Co nás definuje</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div
                  className="p-7 rounded-2xl h-full glass-card"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(200,169,110,0.1)" }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C8A96E" }} />
                  </div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#F0EDE6" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,230,0.45)" }}>{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Historie</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: "#F0EDE6" }}>Naše milníky</h2>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.3), transparent)" }} />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.07}>
                  <div className="flex gap-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 relative z-10"
                      style={{ backgroundColor: "#0C1120", border: "1px solid rgba(200,169,110,0.3)", color: "#C8A96E" }}
                    >
                      &apos;{m.year.slice(2)}
                    </div>
                    <div className="pt-2.5">
                      <span className="text-[10px] font-semibold uppercase tracking-widest block mb-1" style={{ color: "rgba(200,169,110,0.5)" }}>{m.year}</span>
                      <p className="text-base font-medium" style={{ color: "#F0EDE6" }}>{m.event}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #080C18, #0C1525)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,169,110,0.06), transparent)" }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Chcete s námi spolupracovat?</h2>
            <p className="mb-8" style={{ color: "rgba(240,237,230,0.5)" }}>Ozvěte se nám a probereme vaše potřeby.</p>
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
