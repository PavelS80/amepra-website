import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/FadeIn";
import MarqueeStrip from "@/components/MarqueeStrip";
import Counter from "@/components/Counter";
import TextReveal from "@/components/TextReveal";

const services = [
  {
    number: "01",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
    title: "Produkce",
    description: "Kompletní produkce medicínských akcí od logistiky přes techniku až po celkový projektový management.",
  },
  {
    number: "02",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
    title: "Kongresy a konference",
    description: "Organizace odborných kongresů pro lékaře, farmaceutické firmy a zdravotnické instituce.",
  },
  {
    number: "03",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
    title: "Reklama a creative",
    description: "Kreativní strategie a kampaně respektující regulatorní požadavky zdravotnictví.",
  },
  {
    number: "04",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>,
    title: "Digitální komunikace",
    description: "Webináře, online kurzy, VR aplikace a digitální platformy pro moderní zdravotnictví.",
  },
  {
    number: "05",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
    title: "Kongresová sympozia",
    description: "Satelitní sympozia a workshopy na národních i mezinárodních kongresech.",
  },
  {
    number: "06",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
    title: "Výstavnictví",
    description: "Návrh a výroba výstavních expozic a stánků pro zdravotnické veletrhy.",
  },
  {
    number: "07",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304-.001a3.75 3.75 0 010 5.304m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.008H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
    title: "Technické zajištění akcí",
    description: "Profesionální AV technika, živé přenosy, tlumočení a technický management.",
  },
];

const whyUs = [
  { title: "Exkluzivní zaměření", description: "Jediná česká agentura působící výhradně v zdravotnickém sektoru." },
  { title: "16+ let zkušeností", description: "Hluboká znalost farmaceutického průmyslu a zdravotnických institucí." },
  { title: "Inovace a technologie", description: "Webináře, VR aplikace, hybridní formáty — vždy v čele trendů." },
  { title: "Individuální přístup", description: "Dedikovaný tým a řešení šité na míru každému klientovi." },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay hero-gradient">
        {/* Animated orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute float-a rounded-full blur-[120px]"
            style={{ width: 700, height: 700, top: "-15%", left: "-10%", backgroundColor: "#1A3A7A" }}
          />
          <div
            className="absolute float-b rounded-full blur-[100px]"
            style={{ width: 500, height: 500, bottom: "5%", right: "-5%", backgroundColor: "#C8A96E" }}
          />
          <div
            className="absolute float-c rounded-full blur-[80px]"
            style={{ width: 350, height: 350, top: "40%", right: "20%", backgroundColor: "#4080FF" }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-20 text-center">
          {/* Eyebrow */}
          <FadeIn delay={0}>
            <div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-10 text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{
                backgroundColor: "rgba(200,169,110,0.08)",
                border: "1px solid rgba(200,169,110,0.2)",
                color: "#C8A96E",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Zdravotnický marketing · Praha · od roku 2008
            </div>
          </FadeIn>

          {/* Main headline */}
          <div className="mb-6">
            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] font-bold leading-[1.0] tracking-[-0.02em] text-white">
              <TextReveal text="Marketing &" delay={0.1} stagger={0.08} />
              <br />
              <span className="shimmer-gold">
                <TextReveal text="Produkce" delay={0.25} stagger={0.08} />
              </span>
            </h1>
            <FadeIn delay={0.5}>
              <p
                className="text-[clamp(1.1rem,3vw,1.75rem)] font-light mt-2 tracking-wide"
                style={{ color: "rgba(240,237,230,0.55)" }}
              >
                pro zdravotnický sektor
              </p>
            </FadeIn>
          </div>

          {/* Subtitle */}
          <FadeIn delay={0.6}>
            <p
              className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
              style={{ color: "rgba(240,237,230,0.5)" }}
            >
              Přední česká agentura exkluzivně zaměřená na farmaceutický průmysl,
              odborné lékařské společnosti a zdravotnické instituce.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.7}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/sluzby" className="px-8 py-4 rounded-xl text-sm font-semibold btn-gold">
                Naše služby
              </Link>
              <Link href="/kontakt" className="px-8 py-4 rounded-xl text-sm font-medium btn-outline">
                Kontaktovat nás →
              </Link>
            </div>
          </FadeIn>

          {/* Stats row */}
          <FadeIn delay={0.9}>
            <div
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px max-w-2xl mx-auto rounded-2xl overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            >
              {[
                { to: 16, suffix: "+", label: "let zkušeností" },
                { to: 100, suffix: "+", label: "kongresů" },
                { to: 50, suffix: "+", label: "klientů" },
                { to: 7, suffix: "", label: "specializací" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center py-6 px-4"
                  style={{ backgroundColor: "rgba(6,8,14,0.6)" }}
                >
                  <Counter
                    to={stat.to}
                    suffix={stat.suffix}
                    className="font-display text-2xl md:text-3xl font-bold text-white"
                  />
                  <span className="text-[11px] uppercase tracking-wider mt-1" style={{ color: "rgba(240,237,230,0.35)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Scroll cue */}
          <div className="mt-16 flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "rgba(240,237,230,0.2)" }}>
              Scroll
            </span>
            <div
              className="w-px h-12 relative overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1/2"
                style={{
                  background: "linear-gradient(to bottom, transparent, #C8A96E)",
                  animation: "fade-line 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ══════════════════════════════════════════════ */}
      <MarqueeStrip />

      {/* ═══ SERVICES ═════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 section-soft">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <SectionHeader
              eyebrow="Naše služby"
              title="Sedm oblastí"
              titleItalic="specializace"
              subtitle="Kompletní pokrytí všech potřeb vaší organizace v zdravotnickém marketingu a produkci."
            />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.06}>
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 text-center">
              <Link href="/sluzby" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold btn-outline">
                Zobrazit všechny služby
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ STATS STRIP ══════════════════════════════════════════ */}
      <section className="py-20 md:py-24 section-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(200,169,110,0.15), transparent)" }}
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x" style={{ "--tw-divide-opacity": 1 } as React.CSSProperties}>
            {[
              { to: 16, suffix: "+", label: "let nepřetržitě", sub: "na trhu" },
              { to: 100, suffix: "+", label: "kongresů", sub: "úspěšně realizováno" },
              { to: 50, suffix: "+", label: "klientů", sub: "v portfoliu" },
              { to: 7, suffix: "", label: "specializací", sub: "komplexní pokrytí" },
            ].map((s) => (
              <FadeIn key={s.label} className="text-center px-8">
                <div
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-2 gradient-text"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="text-sm font-semibold" style={{ color: "#F0EDE6" }}>{s.label}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(240,237,230,0.35)" }}>{s.sub}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold mx-auto max-w-4xl" />

      {/* ═══ WHY AMEPRA ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 section-soft">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div className="relative">
              {/* Giant decorative number */}
              <div
                className="absolute -top-8 -left-4 font-display font-bold select-none pointer-events-none leading-none"
                style={{ fontSize: "clamp(8rem,18vw,16rem)", color: "rgba(200,169,110,0.04)", letterSpacing: "-0.05em" }}
              >
                16
              </div>
              <div className="relative z-10">
                <FadeIn>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>
                    Proč AMEPRA
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1]" style={{ color: "#F0EDE6" }}>
                    Partner, který rozumí<br />
                    <em className="not-italic shimmer-gold">vašemu světu</em>
                  </h2>
                  <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>
                    Zdravotnictví má svá specifika — regulace, odborné publikum,
                    etické standardy. AMEPRA jako jediná česká agentura působí
                    výhradně v tomto prostředí od svého vzniku.
                  </p>
                </FadeIn>

                <div className="space-y-5">
                  {whyUs.map((item, i) => (
                    <FadeIn key={item.title} delay={i * 0.08}>
                      <div className="flex gap-4 group">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: "rgba(200,169,110,0.12)", color: "#C8A96E" }}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold mb-0.5" style={{ color: "#F0EDE6" }}>{item.title}</h3>
                          <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,230,0.45)" }}>{item.description}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                <FadeIn delay={0.4}>
                  <Link
                    href="/o-nas"
                    className="inline-flex items-center gap-2 mt-8 text-sm font-semibold transition-colors"
                    style={{ color: "#C8A96E" }}
                  >
                    Více o společnosti
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </FadeIn>
              </div>
            </div>

            {/* Right: hero card */}
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div
                  className="rounded-3xl p-10 md:p-12 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #0C1220 0%, #111B30 50%, #0A1525 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Inner glow */}
                  <div
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                    style={{ backgroundColor: "#C8A96E", opacity: 0.06 }}
                  />

                  <div className="relative z-10">
                    <div className="font-display text-7xl md:text-8xl font-bold mb-2 gradient-text leading-none">16+</div>
                    <div
                      className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-10"
                      style={{ color: "rgba(200,169,110,0.5)" }}
                    >
                      let exkluzivně v zdravotnictví
                    </div>
                    <p
                      className="text-base leading-relaxed mb-10 italic font-display"
                      style={{ color: "rgba(240,237,230,0.65)" }}
                    >
                      &ldquo;Naprosto jedinečný, etický a profesionální přístup ke každému klientovi je základem naší práce.&rdquo;
                    </p>
                    <div
                      className="flex items-center gap-4 pt-8"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ background: "linear-gradient(135deg, #A08040, #C8A96E)", color: "#06080E" }}
                      >
                        A
                      </div>
                      <div>
                        <div className="text-sm font-bold" style={{ color: "#F0EDE6" }}>AMEPRA s.r.o.</div>
                        <div className="text-xs" style={{ color: "rgba(240,237,230,0.4)" }}>Praha 2, Česká republika</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -bottom-5 -left-6 rounded-2xl px-6 py-4 shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #A08040, #C8A96E)",
                    boxShadow: "0 20px 40px rgba(200,169,110,0.3)",
                  }}
                >
                  <div className="text-2xl font-bold font-display" style={{ color: "#06080E" }}>100+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "rgba(6,8,14,0.7)" }}>
                    kongresů a konferencí
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ CLIENTS ══════════════════════════════════════════════ */}
      <section className="py-16 section-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] mb-10" style={{ color: "rgba(240,237,230,0.2)" }}>
              Pracujeme pro
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["Farmaceutické společnosti", "Odborné lékařské společnosti", "Státní instituce", "Zdravotnické neziskovky", "Nemocnice"].map((c) => (
                <div
                  key={c}
                  className="text-xs font-medium px-5 py-2.5 rounded-full"
                  style={{
                    color: "rgba(240,237,230,0.4)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backgroundColor: "rgba(255,255,255,0.02)",
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CTA ══════════════════════════════════════════════════ */}
      <section
        className="relative py-28 md:py-36 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #080C18 0%, #0C1525 50%, #080C18 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,169,110,0.07), transparent)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>
              Začněme spolupráci
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Připraveni realizovat<br />
              <em className="not-italic shimmer-gold">váš projekt?</em>
            </h2>
            <p className="text-base md:text-lg mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>
              Kontaktujte nás a domluvme si nezávaznou schůzku.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt" className="px-9 py-4 rounded-xl text-sm font-semibold btn-gold">
                Kontaktujte nás
              </Link>
              <a href="tel:+420221180260" className="px-9 py-4 rounded-xl text-sm font-medium btn-outline">
                +420 221 180 260
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
