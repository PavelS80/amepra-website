import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reference – AMEPRA",
  description:
    "Case studies, ohlasy klientů a portfolio projektů agentury AMEPRA ze zdravotnického sektoru.",
};

const testimonials = [
  {
    quote:
      "Spolupráce s AMEPRA přinesla našemu kongresu novou úroveň profesionality. Od logistiky po vědecký program — vše proběhlo bez problémů.",
    author: "Prof. MUDr. Jan Novák",
    role: "Předseda vědeckého výboru",
    org: "Česká kardiologická společnost",
  },
  {
    quote:
      "AMEPRA rozumí specifickému prostředí farmaceutického průmyslu. Jejich kreativní kampaně respektují regulatorní požadavky a přitom jsou skutečně efektivní.",
    author: "Mgr. Petra Horáčková",
    role: "Marketing Director",
    org: "Farmaceutická společnost",
  },
  {
    quote:
      "Technické zajištění bylo na světové úrovni. Hybridní formát s živým přenosem zvládli perfektně — účastníci z celé Evropy.",
    author: "MUDr. Tomáš Blaha",
    role: "Organizátor konference",
    org: "Odborná společnost neurologie",
  },
];

const clients = [
  "Farmaceutické společnosti",
  "Odborné lékařské společnosti",
  "Státní zdravotní instituce",
  "Zdravotnické neziskovky",
  "Nemocniční centra",
  "Výzkumné instituce",
];

const caseStudies = [
  {
    category: "Kongres",
    title: "Výroční kongres s mezinárodní účastí",
    description:
      "Organizace třídenního odborného kongresu s 800+ účastníky, 40 přednášejícími a 12 satelitními sympoziemi. Zajistili jsme vše od místa konání, simultánního tlumočení po gala večer.",
    metrics: ["800+ účastníků", "40 přednášejících", "12 sympozií", "3 dny"],
  },
  {
    category: "Digitální komunikace",
    title: "Série vzdělávacích webinářů s akreditací",
    description:
      "Design a realizace ročního vzdělávacího programu pro lékaře. 24 webinářů, vlastní platforma s registrací a certifikací, průměrná účast 350 lékařů na webinář.",
    metrics: ["24 webinářů", "350 účastníků/webinář", "Akreditace ČLK", "Vlastní platforma"],
  },
  {
    category: "Reklama",
    title: "Komunikační kampaň pro uvedení nového léku",
    description:
      "Kreativní strategie a realizace kampaně pro HCP cílovou skupinu. Zahrnovala tiskové materiály, online kampaň, edukační materiály a prezentaci na kongresech.",
    metrics: ["Multi-channel", "HCP targeting", "Regulatorní schválení", "3 měsíce"],
  },
];

export default function ReferencePage() {
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
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Reference
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Přes 16 let budujeme důvěru skrze výsledky. Prohlédněte si ukázky
            naší práce a ohlasy spokojených klientů.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#1e73be" }}>
              Vybrané projekty
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0c1b33" }}>
              Case studies
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="h-2"
                  style={{ backgroundColor: "#1e73be" }}
                />
                <div className="p-7">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#1e73be" }}
                  >
                    {cs.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-3" style={{ color: "#0c1b33" }}>
                    {cs.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>
                    {cs.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {cs.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0" }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#1e73be" }}>
              Co říkají klienti
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0c1b33" }}>
              Ohlasy spokojených partnerů
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="inline-block w-4 h-4 mr-0.5" style={{ color: "#d4a843" }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed mb-5 italic" style={{ color: "#475569" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "#eff6ff", color: "#1e73be" }}
                  >
                    {t.author.charAt(t.author.indexOf(" ") + 1)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "#0c1b33" }}>
                      {t.author}
                    </div>
                    <div className="text-xs" style={{ color: "#94a3b8" }}>
                      {t.role}, {t.org}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client types */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#1e73be" }}>
              Klientela
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0c1b33" }}>
              Se kým spolupracujeme
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="px-6 py-4 rounded-xl border border-slate-200 text-sm font-medium"
                style={{ color: "#475569" }}
              >
                {client}
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
            Staňte se naším dalším úspěchem
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            Rádi přidáme váš projekt do našeho portfolia.
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
