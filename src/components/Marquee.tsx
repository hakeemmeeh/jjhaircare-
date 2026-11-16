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
          <span className="px-8 font-mono text-[0.75rem] md:text-[0.875rem] uppercase tracking-wider text-jj-black/80 whitespace-nowrap">
            {t}
          </span>
          <span className="text-jj-gold">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-[#E8D8B8] py-4 border-[1px] border-jj-black/5" role="presentation">
      <p className="sr-only">{ITEMS.join(". ")}.</p>
      <div className="jj-marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
