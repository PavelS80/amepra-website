import type { Metadata } from "next";
import Image from "next/image";
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
    description: "Každou jednotlivou zakázku pro vás zajišťuje jeden konkrétní projektový manažer, který bude vaší hlavní kontaktní osobou. Zrealizujeme individuální požadavky, inovativně navrhneme, kreativně pozveme, on-line zaregistrujeme, odborně vzděláme a vše transparentně vyúčtujeme.",
    points: ["Individuální požadavky a potřeby", "Inovativní návrh konceptu", "Certifikát ČLK o účasti", "On-line registrace účastníků", "Detailní post-event zpráva", "Transparentní vyúčtování"],
  },
  {
    num: "02", title: "Kongresy a konference", color: "#4080FF",
    lead: "Profesionálně a na klíč.",
    description: "Celou akci profesionálně zajistíme, o vaše klienty se postaráme. Pracujeme s garancí vyrovnaného rozpočtu, sledujeme nejnovější trendy a využíváme technologie 21. století, se kterými si tykáme.",
    points: ["Garance vyrovnaného rozpočtu", "Hledání partnerů a funding", "Kompletní konferenční servis", "Logistika zahraničních kongresů", "Nejnovější technologie", "Vědecký program"],
  },
  {
    num: "03", title: "Reklama a kreativita", color: "#E2C07C",
    lead: "Originalita, důmyslnost, vynalézavost.",
    description: "Víme, že je rozdíl nabízet antibiotika, nebo prodávat třeba židle. Propagace léků může být zajímavá a kreativní. Přemýšlíme nad vašimi produkty a prezentujeme je tak, abychom vaše klienty zaujali a přesvědčili. Posouváme vaše hranice tam, kam jiní nedohlédnou.",
    points: ["Originální koncept akce", "Netradiční grafické zpracování", "Video, motion, 3D, web", "Neotřelé texty respektující odbornost", "Aplikace nejnovějších trendů", "Prezentace předností produktu"],
  },
  {
    num: "04", title: "Digitální komunikace", color: "#5DBD6E",
    lead: "Budoucnost zdravotnické komunikace.",
    description: "Opravdu rozumíme potřebám a možnostem vašich klientů a navrhneme ideální řešení v rámci daného oboru. Webináře, e-learning, edukační portály i multimediální aplikace — vše přizpůsobeno medicínskému prostředí.",
    points: ["Webináře a videokonference", "E-detailing", "E-learning s akreditací ČLK", "Edukační portály na míru", "E-mailing", "Multimediální aplikace"],
  },
  {
    num: "05", title: "Sympozia na kongresech", color: "#A08040",
    lead: "Váš hlas na velkém pódiu.",
    description: "Zkuste se odlišit! Připravíme vám sympozium ušité na míru přednáškám a produktu, zajímavou scénografii, dramaturgii scénáře a moderní pojetí ve formě konceptu, grafiky či animace. Interaktivita s účastníky zaručena.",
    points: ["Originální koncept", "Kreativní grafika a animace", "Interaktivita (SMS, aplikace, hlasování)", "Stage design", "Scénář a dramaturgie", "Tematické propojení se stánkem"],
  },
  {
    num: "06", title: "Realizace expozic", color: "#C8A96E",
    lead: "Stánek, který se nezapomíná.",
    description: "Jdeme s dobou a kompletně navrhneme, případně doladíme váš stánek tak, aby na něj nejen vaši klienti, ale ani konkurenti jen tak nezapomněli.",
    points: ["3D návrhy expozic", "Exkluzivní LED stánky", "Interaktivní technologie", "Atraktivní propagace produktů", "Propojení se satelitním sympoziem", "Tradiční vystavovatelský servis"],
  },
  {
    num: "07", title: "Technické řešení akcí", color: "#4080FF",
    lead: "Technika, která nechybuje.",
    description: "S našimi zkušenostmi v konferenčních službách a znalostí technologií akci nejen profesionálně odbavíme, ale po technické stránce navrhneme inovativní a atraktivní řešení.",
    points: ["Komplexní AV koncept", "Videopřenosy v dokonalé kvalitě", "Live broadcasting na web", "Virtuální realita", "Videomapping a 3D projekce", "Technická produkce akcí"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-healthcare.jpg" alt="AMEPRA služby" fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,8,14,0.65) 0%, rgba(6,8,14,0.80) 50%, rgba(6,8,14,0.97) 100%)" }} />
        </div>
        <div className="absolute bottom-0 right-0 font-display font-bold leading-none select-none pointer-events-none" style={{ fontSize: "clamp(160px, 28vw, 420px)", color: "rgba(200,169,110,0.04)", lineHeight: 0.8 }}>07</div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 pt-48 w-full">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#C8A96E" }}>Co nabízíme</p>
            <h1 className="font-display font-bold leading-[0.95]" style={{ fontSize: "clamp(52px, 8vw, 112px)", color: "#F0EDE6" }}>
              Sedm oblastí<br /><em className="not-italic shimmer-gold">specializace.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg mt-8 max-w-xl" style={{ color: "rgba(240,237,230,0.6)" }}>
              Portfolio našich služeb je velmi široké. Každou zakázku zajišťuje jeden konkrétní projektový manažer — vaše hlavní kontaktní osoba.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section style={{ backgroundColor: "#090D1A" }}>
        {services.map((service, i) => (
          <FadeIn key={service.num}>
            <div
              className="group relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 md:py-18 transition-all duration-500"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse 50% 100% at ${i % 2 === 0 ? "0%" : "100%"} 50%, rgba(200,169,110,0.025), transparent)` }} />
              <div className="relative grid grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-display font-bold leading-none" style={{ fontSize: "clamp(32px, 4vw, 56px)", color: service.color, opacity: 0.2 }}>{service.num}</span>
                </div>
                <div className="col-span-10 md:col-span-4 -mt-1">
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-2" style={{ color: "#F0EDE6" }}>{service.title}</h2>
                  <p className="text-sm font-medium italic" style={{ color: service.color }}>{service.lead}</p>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,230,0.5)" }}>{service.description}</p>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
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
            <p className="text-lg mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>Neváhejte nás kontaktovat. Probereme, jak vám můžeme pomoci.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
