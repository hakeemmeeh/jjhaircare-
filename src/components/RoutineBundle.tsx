import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { whatsappOrderUrl } from "@/data/site-config";

const BUNDLE_DISCOUNT = 0.1; // 10% off the routine

/** The three products that make up the signature routine. */
const ROUTINE_SLUGS = ["herbal-hair-oil", "hibiscus-hair-butter", "hair-mist"];

function priceOf(p?: string): number {
  return p ? Number(p.replace(/[^0-9]/g, "")) || 0 : 0;
}

export default function RoutineBundle() {
  const routine = ROUTINE_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );
  const individualTotal = routine.reduce((sum, p) => sum + priceOf(p.price), 0);
  const bundlePrice = Math.round(individualTotal * (1 - BUNDLE_DISCOUNT));
  const savings = individualTotal - bundlePrice;
  const message =
    `Hi JJ Haircare, I'd like to order the routine bundle:\n` +
    routine.map((p) => `• ${p.name.replace("JJ Haircare ", "")} (${p.price})`).join("\n") +
    `\n\nIndividual total: ${individualTotal.toLocaleString()} KES\nBundle price (save ${Math.round(BUNDLE_DISCOUNT * 100)}%): ${bundlePrice.toLocaleString()} KES`;

  return (
    <section className="py-14 md:py-28 px-6 md:px-12" aria-labelledby="routine-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wider text-jj-black/50 mb-3">The signature routine</p>
          <h2 id="routine-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-jj-black leading-tight mb-4">
            Complete your <span className="italic text-jj-nude">routine</span>
          </h2>
          <p className="text-jj-charcoal/70 max-w-xl mx-auto">
            Oil, butter and mist — the three-step ritual for hydrated, stronger, shinier hair. Buy together and save {Math.round(BUNDLE_DISCOUNT * 100)}%.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {routine.map((p) => (
            p && (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white border border-jj-black/10 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`relative aspect-[4/3] overflow-hidden sm:aspect-square ${p.imageFit === "contain" ? "bg-jj-ivory" : ""}`}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`${p.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-105`}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-sans text-lg font-semibold text-jj-black">{p.name.replace("JJ Haircare ", "")}</h3>
                  <p className="mt-1 text-sm text-jj-charcoal/60">{p.price}</p>
                </div>
              </Link>
            )
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-jj-black/10 bg-white/70 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-jj-charcoal/60 mb-1">Bundle of {routine.length} products</p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                <span className="font-serif text-3xl md:text-4xl text-jj-black">{bundlePrice.toLocaleString()} KES</span>
                <span className="text-jj-charcoal/50 line-through">{individualTotal.toLocaleString()} KES</span>
                <span className="rounded-full bg-jj-gold/20 text-jj-gold px-3 py-1 text-xs font-bold">Save {savings.toLocaleString()} KES</span>
              </div>
            </div>
            <a
              href={whatsappOrderUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-jj-black hover:bg-jj-olive text-white font-medium px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-300 shadow-lg shrink-0"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Order the routine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
