import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";

export default function ProductGrid() {
  return (
    <section className="px-6 md:px-12 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b border-jj-black/10 pb-8">
          <h1 className="text-5xl md:text-6xl font-serif text-jj-black mb-3">The Collection</h1>
          <p className="font-sans text-jj-black/60 md:text-lg max-w-xl">
            Natural hair care from Nairobi. Order any product on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {PRODUCTS.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group block">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-jj-black/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 right-4 bg-jj-black text-white text-center text-sm font-bold py-3 rounded-xl transition-all duration-500 lg:translate-y-20 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  View Details
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <h2 className="font-sans text-xl font-semibold text-jj-black group-hover:text-jj-gold transition-colors">
                  {product.name}
                </h2>
                <span className="font-mono text-sm text-jj-gold whitespace-nowrap mt-1">
                  {product.price ?? ""}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
