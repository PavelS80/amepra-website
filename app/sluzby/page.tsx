import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Služby – AMEPRA",
  description: "Komplexní portfolio služeb pro zdravotnický sektor: produkce kongresů, digitální komunikace, reklama, výstavnictví a technické zajištění akcí.",
};

const services = [
  {
    num: "01", title: "Produkce", color: "#C8A96E",
    lead: "Celý projekt v jedněch rukou.",
    description: "Kompletní produkce medicínských a farmaceutických akcí. Od prvotní myšlenky přes logistiku a technické zajištění až po celkový projektový management.",
    points: ["Projektový management", "Logistika a koordinace", "Správa rozpočtu", "Vendor management", "On-site management", "Post-event reporting"],
  },
  {
    num: "02", title: "Kongresy a konference", color: "#4080FF",
    lead: "Věda setkává se světem.",
    description: "Organizujeme odborné kongresy a konference pro lékaře, farmaceutické společnosti a zdravotnické instituce. Vše od výběru místa po vědecký program.",
    points: ["Výběr místa konání", "Vědecký program", "Registrace účastníků", "Ubytování a catering", "Simultánní tlumočení", "Congress management systémy"],
  },
  {
    num: "03", title: "Reklama a creative", color: "#E2C07C",
    lead: "Kreativita v mezích pravidel.",
    description: "Kreativní kampaně a reklamní materiály přizpůsobené specifickým regulacím ve zdravotnictví. Rozumíme farmaceutickým pravidlům i komunikačním potřebám.",
    points: ["Kreativní strategie", "Grafický design", "Reklamní materiály HCP", "Kampaně pro spotřebitele", "Regulatorní schválení", "Tisk a produkce"],
  },
  {
    num: "04", title: "Digitální komunikace", color: "#5DBD6E",
    lead: "Budoucnost zdravotnické komunikace.",
    description: "Moderní digitální formáty — webináře, online kurzy s akreditací, VR aplikace a vlastní digitální platformy. Technika, která vzdělává.",
    points: ["Webináře a live streaming", "Online vzdělávací kurzy", "VR a AR aplikace", "Digitální platformy na míru", "E-detailing", "SEO a digitální marketing"],
  },
  {
    num: "05", title: "Kongresová sympozia", color: "#A08040",
    lead: "Váš hlas na velkém pódiu.",
    description: "Satelitní sympozia, workshopy a vzdělávací akce v rámci národních i mezinárodních kongresů. Od jednání s organizátory po samotnou realizaci.",
    points: ["Jednání s kongresovými organizátory", "Výběr přednášejících", "Vědecký obsah", "Přeshraniční koordinace", "Live a hybrid formáty", "Dokumentace a záznamy"],
  },
  {
    num: "06", title: "Výstavnictví", color: "#C8A96E",
    lead: "Stánek, který se nezapomíná.",
    description: "Návrh a realizace výstavních expozic a stánků pro zdravotnické veletrhy a kongresy. Každý stánek odráží identitu vaší značky.",
    points: ["Kreativní design", "3D vizualizace", "Výroba a montáž", "Grafické prvky", "Interaktivní prvky", "Demontáž a skladování"],
  },
  {
    num: "07", title: "Technické zajištění akcí", color: "#4080FF",
    lead: "Technika, která nechybuje.",
    description: "Kompletní technické zajištění pro všechny typy akcí. Profesionální AV technika, živé přenosy, simultánní tlumočení a technický management.",
    points: ["Audiovizuální technika", "Živé přenosy a streaming", "Simultánní tlumočení", "Osvětlení a scéna", "On-site podpora", "Hybrid event řešení"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO — full dark with giant text */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden noise-overlay" style={{ background: "#06080E" }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 70% at 90% 20%, rgba(200,169,110,0.06), transparent)" }} />
        {/* Background service count */}
        <div className="absolute bottom-0 right-0 font-display font-bold leading-none select-none pointer-events-none" style={{ fontSize: "clamp(200px, 35vw, 500px)", color: "rgba(200,169,110,0.03)", lineHeight: 0.8 }}>07</div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 pt-48">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#C8A96E" }}>Co nabízíme</p>
            <h1 className="font-display font-bold leading-[0.95]" style={{ fontSize: "clamp(56px, 9vw, 128px)", color: "#F0EDE6" }}>
              Sedm<br /><em className="not-italic shimmer-gold">specializací.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg mt-8 max-w-xl" style={{ color: "rgba(240,237,230,0.5)" }}>
              Kompletní pokrytí všech potřeb vaší organizace v zdravotnickém marketingu a produkci.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES — bold full-width strips */}
      <section style={{ backgroundColor: "#090D1A" }}>
        {services.map((service, i) => (
          <FadeIn key={service.num}>
            <div
              className="group relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20 transition-all duration-500"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 100% at ${i % 2 === 0 ? "0%" : "100%"} 50%, rgba(200,169,110,0.03), transparent)` }} />

              <div className="relative grid grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="col-span-12 md:col-span-1">
                  <span
                    className="font-display font-bold leading-none transition-colors duration-300 group-hover:opacity-60"
                    style={{ fontSize: "clamp(40px, 5vw, 72px)", color: service.color, opacity: 0.2 }}
                  >
                    {service.num}
                  </span>
                </div>

                {/* Title + lead */}
                <div className="col-span-12 md:col-span-4 -mt-2">
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 transition-colors duration-300" style={{ color: "#F0EDE6" }}>{service.title}</h2>
                  <p className="text-base font-medium italic" style={{ color: service.color }}>{service.lead}</p>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-3">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,230,0.5)" }}>{service.description}</p>
                </div>

                {/* Points */}
                <div className="col-span-12 md:col-span-4">
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.color }} />
                        <span className="text-xs leading-relaxed" style={{ color: "rgba(240,237,230,0.45)" }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #080C18, #0C1525)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,169,110,0.06), transparent)" }} />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <FadeIn>
            <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#F0EDE6", lineHeight: 1.1 }}>
              Zájem o konkrétní<br /><em className="not-italic shimmer-gold">službu?</em>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>Kontaktujte nás a probereme, jak vám můžeme pomoci.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
