import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Reference – AMEPRA",
  description: "Klienti a reference agentury AMEPRA — farmaceutické společnosti, odborné lékařské společnosti a zdravotnické instituce.",
};

const pharmaClients = [
  {
    name: "Novo Nordisk", src: "/images/clients/novo-nordisk.png",
    desc: "Novo Nordisk měníme diabetes. Diabetologické semináře, edukační programy pro lékaře.",
    tags: ["Diabetologie", "Semináře", "Edukace"],
  },
  {
    name: "Roche", src: "/images/clients/roche.png",
    desc: "Lídr v oblasti zdravotnického výzkumu. Kongresová sympozia, edukační akce.",
    tags: ["Onkologie", "Diagnostika", "Symposia"],
  },
  {
    name: "Amgen", src: "/images/clients/amgen.png",
    desc: "Největší biotechnologická společnost v oblasti farmacie na světě. Kongres ČKS, edukační portál.",
    tags: ["Kardiologie", "Onkologie", "Kongres"],
  },
  {
    name: "Novartis", src: "/images/clients/novartis.png",
    desc: "Globální farmaceutický lídr. Satelitní sympozia, vzdělávací programy.",
    tags: ["Sympozia", "Vzdělávání", "Multi-channel"],
  },
  {
    name: "AbbVie", src: "/images/clients/abbvie.png",
    desc: "Inovativní farmaceutická společnost. Kreativní kampaně a odborné akce.",
    tags: ["Imunologie", "Reklama", "Akce"],
  },
  {
    name: "GSK", src: "/images/clients/gsk.png",
    desc: "GlaxoSmithKline — globální zdravotnická společnost. Kongresy a produktové launche.",
    tags: ["Vakcíny", "Kongresy", "Produkce"],
  },
  {
    name: "Janssen", src: "/images/clients/janssen.jpg",
    desc: "Farmaceutická divize Johnson & Johnson. Odborná sympozia a vzdělávací akce.",
    tags: ["Sympozia", "HCP", "Edukace"],
  },
  {
    name: "Takeda", src: "/images/clients/takeda.png",
    desc: "Japonský farmaceutický gigant. Konference a digitální komunikace.",
    tags: ["Gastroenterologie", "Konference", "Digital"],
  },
  {
    name: "Boehringer Ingelheim", src: "/images/clients/bi.png",
    desc: "Rodinná farmaceutická společnost. Satelitní sympozia a výstavní expozice.",
    tags: ["Respirologie", "Expozice", "Sympozia"],
  },
  {
    name: "Teva", src: "/images/clients/teva.png",
    desc: "Globální generický a specialty farmaceutický lídr.",
    tags: ["Neurologie", "Akce", "Marketing"],
  },
  {
    name: "Lilly", src: "/images/clients/lilly.gif",
    desc: "Eli Lilly — inovativní farmaceutická společnost.",
    tags: ["Diabetologie", "Onkologie", "Produkce"],
  },
  {
    name: "Bristol-Myers Squibb", src: "/images/clients/bms.jpg",
    desc: "Přední biofarmaceutická společnost specializující se na onkologii.",
    tags: ["Onkologie", "Imuno-onkologie", "Kongresy"],
  },
];

const medSocieties = [
  { name: "Česká psychiatrická společnost", src: "/images/clients/cneos.png", desc: "Sekce sociální psychiatrie — vzdělávací akce a konference." },
  { name: "Česká neonatologická společnost", src: "/images/clients/cneos.png", desc: "Odborná společnost ČLS JEP — kongresové služby." },
  { name: "DNSG", src: "/images/clients/dnsg.png", desc: "Diabetes and Nutrition Study Group — mezinárodní sympozium." },
  { name: "EATA", src: "/images/clients/eata.png", desc: "European TA Association — kongresová produkce." },
];

export default function ReferencePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-conference.png" alt="Reference AMEPRA" fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,8,14,0.6) 0%, rgba(6,8,14,0.75) 50%, rgba(6,8,14,0.97) 100%)" }} />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-8 font-display font-bold select-none pointer-events-none leading-none" style={{ fontSize: "clamp(100px, 18vw, 260px)", color: "rgba(200,169,110,0.05)" }}>REF</div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 pt-48 w-full">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#C8A96E" }}>Portfolio klientů</p>
            <h1 className="font-display font-bold leading-[0.95]" style={{ fontSize: "clamp(52px, 8vw, 112px)", color: "#F0EDE6" }}>
              Výsledky,<br /><em className="not-italic shimmer-gold">které mluví.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg mt-8 max-w-xl" style={{ color: "rgba(240,237,230,0.6)" }}>
              Desítky spokojených klientů z řad farmaceutických firem a odborných lékařských společností — TOP agentura na českém a slovenském trhu.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PHARMA CLIENTS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Farmaceutické společnosti</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: "#F0EDE6" }}>Naši klienti</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pharmaClients.map((client, i) => (
              <FadeIn key={client.name} delay={i * 0.05}>
                <div className="group p-7 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {/* Logo */}
                  <div className="h-12 flex items-center mb-5">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={140}
                      height={48}
                      className="max-h-10 w-auto object-contain"
                      style={{ filter: "brightness(0) invert(1)", opacity: 0.6 }}
                    />
                  </div>
                  <div className="h-px mb-5" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#F0EDE6" }}>{client.name}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(240,237,230,0.45)" }}>{client.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {client.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: "rgba(200,169,110,0.08)", color: "#C8A96E", border: "1px solid rgba(200,169,110,0.15)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL SOCIETIES */}
      <section className="py-24 md:py-28" style={{ backgroundColor: "#06080E" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Odborné společnosti a organizace</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12" style={{ color: "#F0EDE6" }}>Lékařské společnosti</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {medSocieties.map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.08}>
                <div className="p-6 rounded-2xl h-full" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(200,169,110,0.1)" }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C8A96E" }} />
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#F0EDE6" }}>{s.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(240,237,230,0.45)" }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO WALL */}
      <section className="py-20" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-12 text-center" style={{ color: "rgba(200,169,110,0.4)" }}>Všichni klienti</p>
          </FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
            {pharmaClients.map((c, i) => (
              <FadeIn key={c.name + "-wall"} delay={i * 0.04}>
                <div className="flex items-center justify-center h-10 opacity-20 hover:opacity-50 transition-opacity duration-300">
                  <Image src={c.src} alt={c.name} width={110} height={40} className="max-h-8 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #080C18, #0C1525)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,169,110,0.06), transparent)" }} />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <FadeIn>
            <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#F0EDE6", lineHeight: 1.1 }}>
              Staňte se naším<br /><em className="not-italic shimmer-gold">dalším klientem.</em>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>Rádi přivítáme váš projekt do portfolia.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
