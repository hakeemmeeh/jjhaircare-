import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { whatsappOrderUrl } from "@/data/site-config";

const FEATURED_SLUG = "herbal-hair-oil";

/** Single-product spotlight on the home page. */
export default function FeaturedProduct() {
  const product = PRODUCTS.find((p) => p.slug === FEATURED_SLUG);
  if (!product) return null;

  return (
    <section className="bg-[#26301F] px-6 md:px-12 py-20 md:py-28">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl md:order-2">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="md:order-1">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-5">Featured product</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">{product.name}</h2>
          <p className="mt-4 font-mono text-xl text-jj-gold">{product.price}</p>
          <p className="mt-6 text-lg text-white/75 font-light leading-relaxed max-w-lg">{product.description}</p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappOrderUrl(`Hi JJ Haircare, I'd like to order the ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-jj-gold text-jj-black font-medium px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-white transition-colors"
            >
              Order on WhatsApp
            </a>
            <Link
              href={`/products/${product.slug}`}
              className="text-center border border-white/40 text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:border-jj-gold hover:text-jj-gold transition-colors"
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
