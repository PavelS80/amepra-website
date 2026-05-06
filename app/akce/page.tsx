import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Akce – AMEPRA",
  description:
    "Přehled nadcházejících kongresů, konferencí a webinářů pořádaných agenturou AMEPRA i archiv proběhlých akcí.",
};

const upcomingEvents = [
  {
    id: 1,
    date: "Červen 2026",
    category: "Kongres",
    title: "Výroční kongres české kardiologické společnosti",
    location: "Praha, Congress Centre",
    description:
      "Prestižní odborná akce pro kardiologickou komunitu v České republice. Webináře, sympozia a postgraduální kurzy.",
  },
  {
    id: 2,
    date: "Září 2026",
    category: "Symposium",
    title: "Satelitní symposium — moderní onkologická terapie",
    location: "Brno, Hotel International",
    description:
      "Odborné setkání zaměřené na nejnovější pokroky v onkologické terapii s mezinárodními řečníky.",
  },
  {
    id: 3,
    date: "Říjen 2026",
    category: "Webinář",
    title: "Digitální vzdělávání pro lékaře primární péče",
    location: "Online",
    description:
      "Interaktivní online vzdělávací program s akreditací pro lékaře v primární péči.",
  },
];

const pastEvents = [
  {
    year: "2025",
    events: [
      "Kongres České diabetologické společnosti – Praha",
      "Symposium o imunoterapii – Hradec Králové",
      "Webinářová série pro farmaceutické zástupce",
      "Výroční konference ČSIM – Ostrava",
    ],
  },
  {
    year: "2024",
    events: [
      "Kongres neurologie – Praha",
      "Workshop klinické farmakologie",
      "Mezinárodní symposium hematologie",
      "Výstava zdravotnické techniky – Brno",
    ],
  },
  {
    year: "2023",
    events: [
      "Kongres revmatologie – České Budějovice",
      "Satelitní sympozia ASCO Praha",
      "E-learning platforma pro lékaře – spuštění",
      "Hybridní konference endokrinologie",
    ],
  },
];

export default function EventsPage() {
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
            Plánované a proběhlé
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Akce
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Přehled nadcházejících akcí, které organizujeme, i výběr z naší
            bohaté historie realizovaných projektů.
          </p>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#1e73be" }}>
              Nadcházející akce
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0c1b33" }}>
              Připravované projekty
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group p-7 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "#eff6ff", color: "#1e73be" }}
                  >
                    {event.category}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "#94a3b8" }}>
                    {event.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0c1b33" }}>
                  {event.title}
                </h3>
                <div className="flex items-center gap-1.5 mb-3">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#94a3b8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-xs" style={{ color: "#64748b" }}>{event.location}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#1e73be" }}>
              Archiv
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0c1b33" }}>
              Proběhlé akce
            </h2>
          </div>

          <div className="space-y-8">
            {pastEvents.map((yearGroup) => (
              <div key={yearGroup.year}>
                <h3
                  className="text-xl font-bold mb-4 pb-3 border-b border-slate-200"
                  style={{ color: "#0c1b33" }}
                >
                  {yearGroup.year}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {yearGroup.events.map((event) => (
                    <div
                      key={event}
                      className="flex items-start gap-2.5 p-4 rounded-xl bg-white border border-slate-100"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: "#1e73be" }}
                      />
                      <span className="text-sm" style={{ color: "#475569" }}>
                        {event}
                      </span>
                    </div>
                  ))}
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
            Plánujete vlastní akci?
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            Obraťte se na nás a připravíme pro vás nezapomenutelnou akci.
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
