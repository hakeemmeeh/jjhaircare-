const ITEMS = [
  "100% Natural Ingredients",
  "Made in Nairobi",
  "Order on WhatsApp",
  "Herbal Oil · Butters · Mask · Mist",
];

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center">
          <span className="px-8 font-mono text-xs md:text-sm uppercase tracking-wider text-jj-paper/80 whitespace-nowrap">
            {t}
          </span>
          <span className="text-jj-accent">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-jj-forest py-4 border-b border-jj-paper/10" role="presentation">
      <p className="sr-only">{ITEMS.join(". ")}.</p>
      <div className="jj-marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
