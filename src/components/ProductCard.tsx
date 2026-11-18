import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

/**
 * Editorial product card with a generous image, clear product details and price.
 */
export default function ProductCard({
  product,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw",
}: {
  product: Pick<Product, "name" | "slug" | "description" | "tagline" | "price" | "image" | "hoverImage" | "imageFit" | "badge" | "rating" | "reviewCount">;
  sizes?: string;
}) {
  const fit = product.imageFit ?? "cover";
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-jj-black/[0.08] bg-white shadow-[0_12px_35px_rgba(28,31,22,0.07)] hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(28,31,22,0.14)] transition-all duration-500 cursor-pointer"
    >
      {/* Full-bleed image with hover swap */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EEE6] sm:aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes}
          className={`${fit === "contain" ? "object-contain p-4" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt=""
            fill
            sizes={sizes}
            aria-hidden
            className={`${fit === "contain" ? "object-contain p-4" : "object-cover"} opacity-0 scale-105 transition-opacity duration-500 group-hover:opacity-100`}
          />
        )}

        {/* Corner badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-jj-olive shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="relative flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <h3 className="min-w-0 font-serif text-lg font-semibold leading-tight text-jj-black sm:text-xl">{product.name.replace("JJ Haircare ", "")}</h3>
          {product.price && (
            <span className="shrink-0 pt-0.5 font-sans text-sm font-semibold text-jj-olive sm:text-base">
              {product.price}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="mt-2 flex min-h-5 items-center gap-1.5 text-sm">
          {product.rating != null && (
            <>
              <span className="text-[#B58A35]" aria-hidden>
                ★
              </span>
              <span className="font-medium text-jj-charcoal">{product.rating.toFixed(1)}</span>
              {product.reviewCount != null && (
                <span className="text-jj-charcoal/50">({product.reviewCount})</span>
              )}
              <span className="sr-only">
                Rated {product.rating} out of 5{product.reviewCount != null ? ` from ${product.reviewCount} reviews` : ""}
              </span>
            </>
          )}
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-jj-charcoal/65">{product.tagline ?? product.description}</p>

        <span className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-jj-olive/35 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-jj-olive transition-colors group-hover:bg-jj-olive group-hover:text-white">
          Explore product <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
