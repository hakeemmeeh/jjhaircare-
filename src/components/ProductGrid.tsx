import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

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

        <div className="flex flex-wrap justify-center gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.slug} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
              <ProductCard product={product} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
