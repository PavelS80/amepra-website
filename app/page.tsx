"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Counter from "@/components/Counter";

const whyReasons = [
  "Exkluzivní působnost ve zdravotnickém sektoru",
  "Inovace, kreativita, moderní technologie",
  "Více než 16 let zkušeností",
  "Akademické zaměření",
  "Perfektní znalost trhu a oboru",
  "Jedinečnost technického zabezpečení akcí",
  "Komplexní kongresové služby",
  "Kvalifikovaní pracovníci",
  "Široká síť profesionálních dodavatelů",
  "Individuální přístup",
];

const services = [
  { num: "01", title: "Produkce", desc: "Komplexní produkce medicínských a farmaceutických akcí od prvotní myšlenky po detailní vyhodnocení." },
  { num: "02", title: "Kongresy a konference", desc: "Profesionální organizace odborných kongresů na klíč s kompletním konferenčním servisem." },
  { num: "03", title: "Reklama a kreativita", desc: "Originální koncepty a kreativní zpracování respektující medicínskou odbornost a regulatorní požadavky." },
  { num: "04", title: "Digitální komunikace", desc: "Webináře, e-learning, edukační portály a multimediální aplikace pro zdravotnický sektor." },
  { num: "05", title: "Sympozia na kongresech", desc: "Satelitní sympozia ušitá na míru — originální scénografie, dramaturgie a moderní pojetí." },
  { num: "06", title: "Realizace expozic", desc: "3D návrhy, exkluzivní LED stánky a interaktivní technologie pro zdravotnické veletrhy." },
  { num: "07", title: "Technické řešení akcí", desc: "Komplexní AV koncept, live broadcasting, virtuální realita a technická produkce akcí." },
];

const clients = [
  { name: "Novo Nordisk", src: "/images/clients/novo-nordisk.png" },
  { name: "Roche", src: "/images/clients/roche.png" },
  { name: "Amgen", src: "/images/clients/amgen.png" },
  { name: "Novartis", src: "/images/clients/novartis.png" },
  { name: "AbbVie", src: "/images/clients/abbvie.png" },
  { name: "GSK", src: "/images/clients/gsk.png" },
  { name: "Janssen", src: "/images/clients/janssen.jpg" },
  { name: "Takeda", src: "/images/clients/takeda.png" },
  { name: "Lilly", src: "/images/clients/lilly.gif" },
  { name: "BMS", src: "/images/clients/bms.jpg" },
  { name: "Teva", src: "/images/clients/teva.png" },
  { name: "Boehringer Ingelheim", src: "/images/clients/bi.png" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-conference.png" alt="AMEPRA konference" fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,8,14,0.55) 0%, rgba(6,8,14,0.70) 50%, rgba(6,8,14,0.95) 100%)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-24 pt-48 w-full">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px" style={{ backgroundColor: "#C8A96E" }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: "#C8A96E" }}>
                Edukace · Inovace · Interakce · Medicíně
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold leading-[0.95] mb-6" style={{ fontSize: "clamp(52px, 8.5vw, 120px)", color: "#F0EDE6" }}>
              Marketingová<br />a produkční<br /><em className="not-italic shimmer-gold">agentura.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl mb-10" style={{ color: "rgba(240,237,230,0.7)", lineHeight: 1.7 }}>
              Specializujeme se výhradně na farmaceutický průmysl, odborné lékařské společnosti, státní instituce a neziskový sektor v oblasti zdravotnictví. Náš přístup ke každému projektu je naprosto jedinečný, etický a profesionální.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link href="/sluzby" className="px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Naše služby</Link>
              <Link href="/kontakt" className="px-8 py-4 rounded-xl text-sm font-medium btn-outline">Kontaktovat nás</Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="flex flex-wrap gap-10 mt-16 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[
                { to: 16, suffix: "+", label: "let na trhu" },
                { to: 100, suffix: "+", label: "realizovaných kongresů" },
                { to: 50, suffix: "+", label: "spokojených klientů" },
                { to: 7, suffix: "", label: "specializací" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl font-bold gradient-text mb-1">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <p className="text-sm" style={{ color: "rgba(240,237,230,0.45)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROČ AMEPRA ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <FadeIn>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Proč si vybrat nás</p>
                <h2 className="font-display font-bold leading-[1.0] mb-8" style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#F0EDE6" }}>
                  Proč<br /><em className="not-italic shimmer-gold">AMEPRA?</em>
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(240,237,230,0.55)" }}>
                  Jsme moderní agentura se specializací na poskytování produkčních, marketingových a digitálních služeb v medicínském sektoru. Máme dlouhodobé zkušenosti a desítky spokojených klientů z řad farmaceutických firem a odborných lékařských společností.
                </p>
                <Link href="/o-nas" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white" style={{ color: "#C8A96E" }}>
                  Více o nás →
                </Link>
              </FadeIn>
            </div>
            <div className="space-y-0">
              {whyReasons.map((reason, i) => (
                <FadeIn key={reason} delay={i * 0.05}>
                  <div className="group flex items-start gap-5 py-5 transition-colors duration-200" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="font-display text-xs font-bold mt-0.5 flex-shrink-0 w-6 text-right" style={{ color: "rgba(200,169,110,0.3)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium transition-colors duration-200 group-hover:text-white" style={{ color: "rgba(240,237,230,0.65)" }}>
                      {reason}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#06080E" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Co nabízíme</p>
                <h2 className="font-display font-bold leading-[1.0]" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#F0EDE6" }}>
                  Sedm oblastí<br /><em className="not-italic shimmer-gold">specializace.</em>
                </h2>
              </div>
              <Link href="/sluzby" className="text-sm font-semibold transition-colors hover:text-white flex-shrink-0" style={{ color: "#C8A96E" }}>
                Všechny služby →
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(0, 6).map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.07}>
                <div className="group relative p-7 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="absolute top-5 right-6 font-display text-5xl font-bold leading-none select-none pointer-events-none" style={{ color: "rgba(200,169,110,0.06)" }}>{s.num}</div>
                  <div className="w-8 h-1 rounded-full mb-5 transition-all duration-300 group-hover:w-14" style={{ background: "linear-gradient(90deg, #A08040, #C8A96E)" }} />
                  <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#F0EDE6" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,230,0.5)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="group mt-4 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 grid grid-cols-1 md:grid-cols-3 gap-6 items-center" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-bold leading-none" style={{ color: "rgba(200,169,110,0.1)" }}>07</span>
                <h3 className="font-display text-lg font-bold" style={{ color: "#F0EDE6" }}>{services[6].title}</h3>
              </div>
              <p className="text-sm leading-relaxed md:col-span-2" style={{ color: "rgba(240,237,230,0.5)" }}>{services[6].desc}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PHOTO BREAK ── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image src="/images/hero-mic.jpg" alt="Konference" fill className="object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,8,14,0.92) 0%, rgba(6,8,14,0.5) 60%, rgba(6,8,14,0.7) 100%)" }} />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Náš přístup</p>
              <blockquote className="font-display font-bold leading-tight max-w-2xl" style={{ fontSize: "clamp(22px, 3.5vw, 42px)", color: "#F0EDE6" }}>
                „Každou zakázku zajišťuje jeden konkrétní projektový manažer — vaše hlavní kontaktní osoba."
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="py-24 md:py-28" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-12 text-center" style={{ color: "rgba(200,169,110,0.5)" }}>Mezi naše klienty patří</p>
          </FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
            {clients.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.04}>
                <div className="flex items-center justify-center h-12 opacity-30 hover:opacity-70 transition-opacity duration-300">
                  <Image src={c.src} alt={c.name} width={120} height={48} className="max-h-10 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(160deg, #06080E 0%, #0A1220 60%, #06080E 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(200,169,110,0.07), transparent)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#C8A96E" }}>Pojďme spolupracovat</p>
            <h2 className="font-display font-bold mb-6 leading-[1.05]" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#F0EDE6" }}>
              Chcete něco<br /><em className="not-italic shimmer-gold">jiného a lepšího?</em>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>
              Obraťte se na nás. AMEPRA patří mezi první, kdo přinesl inovace a nové technologie do zdravotnictví a farmacie.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt" className="px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
              <Link href="/reference" className="px-8 py-4 rounded-xl text-sm font-medium btn-outline">Naše reference</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
