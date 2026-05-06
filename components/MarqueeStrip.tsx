const items = [
  "Kongresy",
  "Konference",
  "Symposia",
  "Produkce",
  "Digitální komunikace",
  "Výstavnictví",
  "Technické zajištění",
  "Reklama & Creative",
  "Webináře",
  "VR aplikace",
];

export default function MarqueeStrip() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden relative"
      style={{ backgroundColor: "#030508", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      aria-hidden="true"
    >
      <div className="marquee-track flex items-center gap-0 py-4 w-max">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap px-6"
              style={{ color: "rgba(240,237,230,0.28)" }}
            >
              {item}
            </span>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#C8A96E", opacity: 0.5 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
