import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Produkce",
    description:
      "Kompletní produkce medicínských akcí od logistiky přes techniku až po celkový management projektu.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Kongresy a konference",
    description:
      "Organizace odborných kongresů a konferencí pro lékaře, farmaceutické společnosti a zdravotnické instituce.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Reklama a creative",
    description:
      "Kreativní strategie, kampaně a reklamní materiály přizpůsobené regulacím ve zdravotnictví.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Digitální komunikace",
    description:
      "Webináře, online kurzy, VR aplikace a digitální platformy pro moderní zdravotnickou komunikaci.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Kongresová sympozia",
    description:
      "Příprava a realizace satelitních sympozií a workshopů v rámci národních i mezinárodních kongresů.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Výstavnictví",
    description:
      "Návrh a výroba výstavních expozic a stánků pro zdravotnické veletrhy a kongresy.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304-.001a3.75 3.75 0 010 5.304m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.008H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Technické zajištění akcí",
    description:
      "Profesionální audiovizuální technika, živé přenosy, simultánní tlumočení a technický management.",
  },
];

const strengths = [
  { value: "16+", label: "let zkušeností" },
  { value: "100+", label: "realizovaných kongresů" },
  { value: "50+", label: "spokojených klientů" },
  { value: "7", label: "oblastí specializace" },
];

const whyUs = [
  {
    title: "Exkluzivní zaměření",
    description:
      "Jediná agentura v ČR exkluzivně zaměřená na zdravotnický sektor. Rozumíme vašemu prostředí, regulacím i publiku.",
  },
  {
    title: "Hluboká odbornost",
    description:
      "Více než 16 let spolupráce s farmaceutickými společnostmi, odbornými společnostmi a zdravotnickými institucemi.",
  },
  {
    title: "Inovace a technologie",
    description:
      "Integrujeme moderní digitální nástroje — webináře, VR aplikace, online platformy — do každého projektu.",
  },
  {
    title: "Individuální přístup",
    description:
      "Každý klient dostává dedikovaný tým a řešení šité na míru konkrétním potřebám a cílům.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #060d1a 0%, #0c1b33 50%, #1a3358 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: "#1e73be" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: "#d4a843" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <FadeIn delay={0}>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#d4a843" }} />
            Zdravotnický marketing · Od roku 2008
          </div>
          </FadeIn>

          <FadeIn delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Marketing a produkce
            <br />
            <span style={{ color: "#4ba8ec" }}>pro zdravotnictví</span>
          </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            AMEPRA je přední česká agentura exkluzivně zaměřená na farmaceutický
            průmysl, odborné lékařské společnosti a zdravotnické instituce.
          </p>
          </FadeIn>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sluzby"
              className="px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#1e73be" }}
            >
              Naše služby
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                color: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Kontaktovat nás →
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {strengths.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div
                  className="text-xs uppercase tracking-wide"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 md:py-28 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Naše služby"
              title="Komplexní řešení pro zdravotnický sektor"
              subtitle="Od organizace kongresů po digitální kampaně — poskytujeme vše, co vaše organizace potřebuje k úspěšné komunikaci a prezentaci."
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.06}>
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/sluzby"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#0c1b33" }}
            >
              Zobrazit všechny služby
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY AMEPRA ─── */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
                style={{ color: "#1e73be" }}
              >
                Proč AMEPRA
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: "#0c1b33" }}
              >
                Partner, který rozumí vašemu světu
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ color: "#475569" }}
              >
                Zdravotnictví má svá specifika — regulace, odborné publikum,
                etické standardy. AMEPRA jako jediná česká agentura působí
                výhradně v tomto prostředí od svého vzniku.
              </p>
              <div className="space-y-5">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#eff6ff" }}
                    >
                      <svg
                        className="w-4 h-4"
                        style={{ color: "#1e73be" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1" style={{ color: "#0c1b33" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/o-nas"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "#1e73be" }}
                >
                  Více o společnosti
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                className="rounded-3xl p-10 text-white relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0c1b33, #1a3358)" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative z-10">
                  <div className="text-5xl font-bold mb-2">16+</div>
                  <div
                    className="text-sm uppercase tracking-widest mb-8"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    let na trhu
                  </div>
                  <p
                    className="text-base leading-relaxed mb-8"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    &ldquo;Naprosto jedinečný, etický a profesionální přístup ke
                    každému klientovi je základem naší práce.&rdquo;
                  </p>
                  <div
                    className="flex items-center gap-4 pt-6 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                      A
                    </div>
                    <div>
                      <div className="text-sm font-semibold">AMEPRA s.r.o.</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Praha 2, Česká republika
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 pointer-events-none"
                  style={{ backgroundColor: "#4ba8ec" }}
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 rounded-2xl px-6 py-4 shadow-xl"
                style={{ backgroundColor: "#d4a843" }}
              >
                <div className="text-2xl font-bold text-white">100+</div>
                <div
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  kongresů a konferencí
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENTS STRIP ─── */}
      <section className="py-14 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-xs font-semibold uppercase tracking-[0.15em] mb-10"
            style={{ color: "#94a3b8" }}
          >
            Klienti a partneři
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {[
              "Farmaceutické společnosti",
              "Odborné lékařské společnosti",
              "Státní instituce",
              "Zdravotnické neziskovky",
              "Nemocnice",
            ].map((client) => (
              <div
                key={client}
                className="text-sm font-medium px-5 py-2.5 rounded-xl border border-slate-200"
                style={{ color: "#94a3b8" }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section
        className="py-20 md:py-24"
        style={{ background: "linear-gradient(135deg, #060d1a 0%, #112244 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Začněme spolupráci
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Připraveni realizovat váš projekt?
          </h2>
          <p
            className="text-base md:text-lg mb-10"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Kontaktujte nás a domluvme si nezávaznou schůzku. Rádi si vyslechneme
            vaše potřeby a navrhneme optimální řešení.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#1e73be" }}
            >
              Kontaktujte nás
            </Link>
            <a
              href="tel:+420221180260"
              className="px-8 py-4 rounded-xl text-sm font-semibold transition-all"
              style={{
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              +420 221 180 260
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
