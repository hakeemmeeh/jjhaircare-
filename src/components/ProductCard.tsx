import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

/**
 * Premium product card: full-bleed image on top (swaps to a second photo on hover),
 * dark glass panel below with badge, name, rating, price and description. The
 * "View Details" button pops in on hover (always visible on touch screens).
 */
export default function ProductCard({
  product,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw",
}: {
  product: Pick<Product, "name" | "slug" | "description" | "price" | "image" | "hoverImage" | "imageFit" | "badge" | "rating" | "reviewCount">;
  sizes?: string;
}) {
  const fit = product.imageFit ?? "cover";
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-jj-black shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
    >
      {/* Full-bleed image with hover swap */}
      <div className={`relative aspect-square overflow-hidden ${fit === "contain" ? "bg-jj-ivory" : ""}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes}
          className={`${fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-105`}
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt=""
            fill
            sizes={sizes}
            aria-hidden
            className={`${fit === "contain" ? "object-contain" : "object-cover"} opacity-0 scale-105 transition-opacity duration-500 group-hover:opacity-100`}
          />
        )}

        {/* Corner badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-jj-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-jj-black shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      {/* Glass panel */}
      <div className="relative flex-1 overflow-hidden px-5 pt-5 pb-24">
        <Image
          src={product.image}
          alt=""
          fill
          sizes="25vw"
          aria-hidden
          className="object-cover scale-150 blur-2xl opacity-70"
        />
        <div className="absolute inset-0 bg-jj-black/55" />

        <div className="relative flex items-start justify-between gap-3">
          <h3 className="font-sans text-xl font-semibold text-white leading-tight">{product.name}</h3>
          {product.price && (
            <span className="shrink-0 rounded-full border border-jj-gold/60 px-3 py-1 font-mono text-xs text-jj-gold">
              {product.price}
            </span>
          )}
        </div>

        {/* Rating */}
        {product.rating != null && (
          <div className="relative mt-2 flex items-center gap-1.5 text-sm">
            <span className="text-jj-gold" aria-hidden>
              ★
            </span>
            <span className="font-medium text-white">{product.rating.toFixed(1)}</span>
            {product.reviewCount != null && (
              <span className="text-white/60">({product.reviewCount})</span>
            )}
            <span className="sr-only">
              Rated {product.rating} out of 5{product.reviewCount != null ? ` from ${product.reviewCount} reviews` : ""}
            </span>
          </div>
        )}

        <p className="relative mt-3 text-sm leading-relaxed text-white/70 line-clamp-2">{product.description}</p>

        <span className="absolute bottom-5 left-5 right-5 rounded-xl bg-white py-3.5 text-center font-sans text-sm font-bold text-jj-black translate-y-0 opacity-100 lg:translate-y-20 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 group-hover:bg-jj-gold">
          View Details
        </span>
      </div>
    </Link>
  );
}