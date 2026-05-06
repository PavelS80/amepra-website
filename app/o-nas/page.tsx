import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nás – AMEPRA",
  description:
    "Více než 16 let exkluzivně v zdravotnictví. Poznáte naši historii, hodnoty a tým marketingové agentury AMEPRA.",
};

const values = [
  {
    title: "Etický přístup",
    description:
      "Veškerá naše činnost respektuje etické kodexy a regulatorní požadavky platné ve zdravotnictví. Pracujeme transparentně a odpovědně.",
  },
  {
    title: "Odbornost",
    description:
      "Náš tým tvoří specialisté s hlubokými znalostmi zdravotnického sektoru — od farmaceutického marketingu po organizaci odborných kongresů.",
  },
  {
    title: "Inovace",
    description:
      "Sledujeme nejnovější trendy v digitální komunikaci a pravidelně integrujeme nové technologie — VR, hybridní akce, interaktivní platformy.",
  },
  {
    title: "Partnerství",
    description:
      "Nekomunikujeme jako dodavatel, ale jako partner. Váš úspěch je naším cílem a přizpůsobujeme se vašim potřebám a procesům.",
  },
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
            Společnost
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            O nás
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Jsme marketingová a produkční agentura s exkluzivním zaměřením na
            zdravotnický sektor. Od roku 2008.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
                style={{ color: "#1e73be" }}
              >
                Naše poslání
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0c1b33" }}>
                Specializace, která přináší výsledky
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#475569" }}>
                <p>
                  AMEPRA je marketingová a produkční agentura, která od svého
                  vzniku v roce 2008 působí výhradně v zdravotnickém sektoru.
                  Tato exkluzivní specializace nám umožňuje nabídnout klientům
                  hlubší znalosti, rychlejší realizaci a výsledky, které generalisté
                  jednoduše nemohou dosáhnout.
                </p>
                <p>
                  Spolupracujeme s farmaceutickými společnostmi, odbornými
                  lékařskými společnostmi, státními institucemi a zdravotnickými
                  neziskovými organizacemi. Rozumíme regulatorním požadavkům,
                  specifickému jazyku zdravotnictví i potřebám lékařů a pacientů
                  jako cílových skupin.
                </p>
                <p>
                  Za více než 16 let jsme realizovali přes 100 kongresů a
                  konferencí, stovky reklamních kampaní a desítky digitálních
                  projektů. Každý s naprosto jedinečným, etickým a profesionálním
                  přístupem.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "16+", label: "let na trhu", desc: "Nepřetržité působení ve zdravotnickém marketingu" },
                { value: "100+", label: "kongresů", desc: "Úspěšně realizovaných odborných akcí" },
                { value: "50+", label: "klientů", desc: "Spokojených partnerů z farmaceutického průmyslu" },
                { value: "7", label: "specializací", desc: "Komplexní pokrytí zdravotnického sektoru" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50"
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: "#0c1b33" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold mb-1" style={{ color: "#1e73be" }}>
                    {stat.label}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#1e73be" }}>
              Naše hodnoty
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0c1b33" }}>
              Co nás definuje
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-7 rounded-2xl bg-white border border-slate-100 shadow-sm"
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0c1b33" }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#1e73be" }}>
              Historie
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0c1b33" }}>
              Naše milníky
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ backgroundColor: "#e2e8f0" }}
            />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 relative z-10"
                    style={{ backgroundColor: "#eff6ff", color: "#1e73be", border: "2px solid #e2e8f0" }}
                  >
                    {m.year.slice(2)}
                  </div>
                  <div className="pt-2.5">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: "#94a3b8" }}
                    >
                      {m.year}
                    </span>
                    <p className="text-base font-medium" style={{ color: "#0c1b33" }}>
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
            Chcete s námi spolupracovat?
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            Ozvěte se nám a probereme vaše potřeby.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all"
              style={{ backgroundColor: "#1e73be" }}
            >
              Kontaktovat nás
            </Link>
            <Link
              href="/sluzby"
              className="px-8 py-4 rounded-xl text-sm font-semibold transition-all"
              style={{ color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Prohlédnout služby
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
