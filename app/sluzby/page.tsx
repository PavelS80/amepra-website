import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Služby – AMEPRA",
  description:
    "Komplexní portfolio služeb pro zdravotnický sektor: produkce kongresů, digitální komunikace, reklama, výstavnictví a technické zajištění akcí.",
};

const services = [
  {
    id: "produkce",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Produkce",
    description:
      "Zajišťujeme kompletní produkci medicínských a farmaceutických akcí. Od prvotní myšlenky a konceptu přes logistiku a technické zajištění až po celkový projektový management.",
    points: [
      "Projektový management od A do Z",
      "Logistika a koordinace",
      "Správa rozpočtu",
      "Vendor management",
      "On-site management",
      "Post-event reporting",
    ],
  },
  {
    id: "kongresy",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Kongresy a konference",
    description:
      "Organizujeme odborné kongresy a konference pro lékaře, farmaceutické společnosti, zdravotnické instituce a odborné společnosti. Zajišťujeme vše od výběru místa konání po vědecký program.",
    points: [
      "Výběr a rezervace místa konání",
      "Vědecký program a přednášející",
      "Registrace účastníků",
      "Ubytování a catering",
      "Simultánní tlumočení",
      "Congress management systémy",
    ],
  },
  {
    id: "reklama",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Reklama a creative",
    description:
      "Vytváříme kreativní kampaně a reklamní materiály přizpůsobené specifickým regulacím ve zdravotnictví. Naše kreativní tým rozumí jak farmaceutickým pravidlům, tak komunikačním potřebám vašich cílových skupin.",
    points: [
      "Kreativní strategie a koncepty",
      "Grafický design a branding",
      "Reklamní materiály pro HCP",
      "Kampaně pro spotřebitele",
      "Dodržení regulatorních požadavků",
      "Tisk a produkce materiálů",
    ],
  },
  {
    id: "digital",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Digitální komunikace",
    description:
      "Přinášíme moderní digitální formáty do zdravotnické komunikace. Webináře, online kurzy s akreditací, VR aplikace pro medicínské vzdělávání a vlastní digitální platformy.",
    points: [
      "Webináře a live streaming",
      "Online vzdělávací kurzy",
      "VR a AR aplikace",
      "Digitální platformy na míru",
      "E-detailing pro farmaceutické firmy",
      "SEO a digitální marketing",
    ],
  },
  {
    id: "sympozia",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Kongresová sympozia",
    description:
      "Připravujeme a realizujeme satelitní sympozia, workshopy a vzdělávací akce v rámci národních i mezinárodních odborných kongresů. Zajišťujeme vše od jednání s organizátory kongresu po samotnou realizaci.",
    points: [
      "Jednání s kongresovými organizátory",
      "Výběr a oslovení přednášejících",
      "Příprava vědeckého obsahu",
      "Přeshraniční koordinace",
      "Live a hybrid formáty",
      "Dokumentace a záznamy",
    ],
  },
  {
    id: "vystavnictvi",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Výstavnictví",
    description:
      "Navrhujeme a realizujeme výstavní expozice a stánky pro zdravotnické veletrhy a kongresy. Každý stánek odráží identitu vaší značky a vytváří nezapomenutelný zážitek pro návštěvníky.",
    points: [
      "Kreativní design stánku",
      "3D vizualizace",
      "Výroba a montáž",
      "Grafické prvky a branding",
      "Interaktivní prvky",
      "Demontáž a skladování",
    ],
  },
  {
    id: "technika",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304-.001a3.75 3.75 0 010 5.304m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.008H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Technické zajištění akcí",
    description:
      "Poskytujeme kompletní technické zajištění pro všechny typy akcí. Profesionální audiovizuální technika, živé přenosy, simultánní tlumočení a veškerý technický management.",
    points: [
      "Audiovizuální technika",
      "Živé přenosy a streaming",
      "Simultánní tlumočení",
      "Osvětlení a scéna",
      "On-site technická podpora",
      "Hybrid event řešení",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #060d1a 0%, #0c1b33 60%, #1a3358 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Co nabízíme
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Naše služby
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Sedm specializovaných oblastí pro kompletní pokrytí všech potřeb
            vaší organizace v zdravotnickém marketingu a produkci.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-10 rounded-3xl border border-slate-100 bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#eff6ff", color: "#1e73be" }}
                    >
                      {service.icon}
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#94a3b8" }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0c1b33" }}>
                    {service.title}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                    {service.description}
                  </p>
                </div>
                <div>
                  <h3
                    className="text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{ color: "#94a3b8" }}
                  >
                    Zahrnuje
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <div
                          className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: "#eff6ff" }}
                        >
                          <svg
                            className="w-3 h-3"
                            style={{ color: "#1e73be" }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm" style={{ color: "#475569" }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #060d1a 0%, #112244 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Zájem o konkrétní službu?
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            Kontaktujte nás a probereme, jak vám můžeme pomoci.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#1e73be" }}
          >
            Kontaktovat nás
          </Link>
        </div>
      </section>
    </>
  );
}
