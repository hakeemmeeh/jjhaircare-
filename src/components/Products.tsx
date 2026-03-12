"use client";

import Link from "next/link";

const products = [
  {
    name: "Hair Mist",
    slug: "hair-mist",
    description: "Refreshing botanical mist for daily hydration and shine.",
    price: "$24",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hair Mask",
    slug: "hair-mask",
    description: "Intensive restorative treatment for deep nourishment.",
    price: "$35",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hair Oil",
    slug: "hair-oil",
    description: "Nourishing blend of natural oils for scalp and strands.",
    price: "$38",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hair Butter",
    slug: "hair-butter",
    description: "Rich, creamy moisture sealant for lasting softness.",
    price: "$32",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="shop" className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-jj-ivory to-jj-black/10 z-20 rounded-t-[3rem] relative -mt-4 border-t border-jj-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-jj-black/10 pb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif text-jj-black mb-4">
              The Collection.
            </h2>
            <p className="font-sans text-jj-black/60 md:text-xl tracking-wide max-w-sm">
              Every formula. Every texture. Every curl type.
            </p>
          </div>
          <Link href="/products" className="bg-jj-olive border border-jj-olive hover:border-jj-gold px-8 py-4 text-white hover:bg-transparent hover:text-jj-black rounded-full font-serif transition-colors text-center inline-block">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.name}
              href={`/products/${product.slug}`}
              className="group relative bg-[#EBE3D5] rounded-[2rem] p-6 pb-24 overflow-hidden mt-6 lg:mt-12 h-fit border border-transparent hover:border-jj-black/20 transition-colors block cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="w-full aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-jj-olive/20 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover md:grayscale md:mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="mt-8 flex flex-col gap-2 relative z-10">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-sans text-2xl font-bold text-jj-black group-hover:text-jj-gold transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-mono text-jj-gold font-medium mt-1">
                    {product.price}
                  </span>
                </div>
                <p className="text-jj-black/60 font-serif leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>

              <button className="absolute bottom-6 left-6 right-6 bg-jj-black text-white font-sans font-bold py-4 rounded-xl translate-y-0 opacity-100 lg:translate-y-20 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 hover:bg-jj-gold">
                View Details
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
