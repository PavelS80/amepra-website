import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Služby – AMEPRA",
  description: "Komplexní portfolio služeb pro zdravotnický sektor: produkce kongresů, digitální komunikace, reklama, výstavnictví a technické zajištění akcí.",
};

const services = [
  {
    id: "produkce", num: "01",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
    title: "Produkce",
    description: "Zajišťujeme kompletní produkci medicínských a farmaceutických akcí. Od prvotní myšlenky přes logistiku a technické zajištění až po celkový projektový management.",
    points: ["Projektový management", "Logistika a koordinace", "Správa rozpočtu", "Vendor management", "On-site management", "Post-event reporting"],
  },
  {
    id: "kongresy", num: "02",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
    title: "Kongresy a konference",
    description: "Organizujeme odborné kongresy a konference pro lékaře, farmaceutické společnosti a zdravotnické instituce. Vše od výběru místa po vědecký program.",
    points: ["Výběr místa konání", "Vědecký program", "Registrace účastníků", "Ubytování a catering", "Simultánní tlumočení", "Congress management systémy"],
  },
  {
    id: "reklama", num: "03",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
    title: "Reklama a creative",
    description: "Kreativní kampaně a reklamní materiály přizpůsobené specifickým regulacím ve zdravotnictví. Náš tým rozumí farmaceutickým pravidlům i komunikačním potřebám.",
    points: ["Kreativní strategie", "Grafický design", "Reklamní materiály HCP", "Kampaně pro spotřebitele", "Regulatorní schválení", "Tisk a produkce"],
  },
  {
    id: "digital", num: "04",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>,
    title: "Digitální komunikace",
    description: "Přinášíme moderní digitální formáty do zdravotnické komunikace — webináře, online kurzy s akreditací, VR aplikace a vlastní digitální platformy.",
    points: ["Webináře a live streaming", "Online vzdělávací kurzy", "VR a AR aplikace", "Digitální platformy na míru", "E-detailing", "SEO a digitální marketing"],
  },
  {
    id: "sympozia", num: "05",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
    title: "Kongresová sympozia",
    description: "Satelitní sympozia, workshopy a vzdělávací akce v rámci národních i mezinárodních kongresů. Vše od jednání s organizátory po samotnou realizaci.",
    points: ["Jednání s kongresovými organizátory", "Výběr přednášejících", "Vědecký obsah", "Přeshraniční koordinace", "Live a hybrid formáty", "Dokumentace a záznamy"],
  },
  {
    id: "vystavnictvi", num: "06",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
    title: "Výstavnictví",
    description: "Návrh a realizace výstavních expozic a stánků pro zdravotnické veletrhy a kongresy. Každý stánek odráží identitu vaší značky.",
    points: ["Kreativní design", "3D vizualizace", "Výroba a montáž", "Grafické prvky", "Interaktivní prvky", "Demontáž a skladování"],
  },
  {
    id: "technika", num: "07",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304-.001a3.75 3.75 0 010 5.304m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.008H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
    title: "Technické zajištění akcí",
    description: "Kompletní technické zajištění pro všechny typy akcí. Profesionální AV technika, živé přenosy, simultánní tlumočení a technický management.",
    points: ["Audiovizuální technika", "Živé přenosy a streaming", "Simultánní tlumočení", "Osvětlení a scéna", "On-site podpora", "Hybrid event řešení"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-24 overflow-hidden noise-overlay"
        style={{ background: "linear-gradient(160deg, #06080E 0%, #0A1220 60%, #06080E 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 80% 30%, rgba(200,169,110,0.06), transparent)" }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Co nabízíme</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6" style={{ color: "#F0EDE6" }}>Naše služby</h1>
            <p className="text-lg max-w-2xl" style={{ color: "rgba(240,237,230,0.5)" }}>
              Sedm specializovaných oblastí pro kompletní pokrytí všech potřeb vaší organizace v zdravotnickém marketingu a produkci.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-4">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.04}>
                <div
                  className="group grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-10 rounded-3xl transition-all duration-300 hover:border-[rgba(200,169,110,0.2)]"
                  style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "rgba(200,169,110,0.1)", color: "#C8A96E" }}
                      >
                        {service.icon}
                      </div>
                      <span className="font-display text-4xl font-bold" style={{ color: "rgba(200,169,110,0.15)" }}>
                        {service.num}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "#F0EDE6" }}>{service.title}</h2>
                    <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,230,0.5)" }}>{service.description}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(200,169,110,0.5)" }}>Zahrnuje</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(200,169,110,0.1)" }}>
                            <svg className="w-2.5 h-2.5" style={{ color: "#C8A96E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm" style={{ color: "rgba(240,237,230,0.55)" }}>{point}</span>
                        </li>
                      ))}
                    </ul>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Zájem o konkrétní službu?</h2>
            <p className="mb-8" style={{ color: "rgba(240,237,230,0.5)" }}>Kontaktujte nás a probereme, jak vám můžeme pomoci.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
