"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import TextReveal from "@/components/TextReveal";

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

// Duplicate products to create a full 8-item circular gallery
const galleryItems = [...products, ...products];

export default function Products({ disable3D = false }: { disable3D?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Container is 250vh. Total scroll distance is 150vh.
  // We want the rotation to finish in the first 50vh of scroll (progress 0 to 0.33).
  // The remaining 100vh of scroll is used to let the Testimonials section slide over it.
  const shouldDisable3D = disable3D || prefersReducedMotion;

  // We only want to set up the scroll listener if we are actually rendering the 3D container.
  // Passing null to target when disabled prevents the "ref not hydrated" error.
  const { scrollYProgress } = useScroll({
    target: shouldDisable3D ? undefined : containerRef,
    offset: ["start start", "end end"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.33], [0, -135]);

  const staticGridContent = (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-jj-black/10 pb-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-serif text-jj-black mb-4">
            The Collection.
          </h2>
          <p className="font-sans text-jj-black/60 md:text-xl tracking-wide max-w-sm">
            Every formula. Every texture. Every curl type.
          </p>
        </div>
        <MagneticButton>
          <Link href="/products" className="bg-jj-olive border border-jj-olive hover:border-jj-gold px-8 py-4 text-white hover:bg-transparent hover:text-jj-black rounded-full font-serif transition-colors text-center inline-block cursor-pointer self-start md:self-auto shadow-lg">
            View All Products
          </Link>
        </MagneticButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000 }}
            className="mt-6 lg:mt-12"
          >
            <Link
              href={`/products/${product.slug}`}
              className="group relative bg-[#EBE3D5] rounded-[2rem] p-6 pb-24 overflow-hidden h-fit border border-transparent hover:border-jj-black/20 transition-colors block cursor-pointer shadow-sm hover:shadow-2xl"
            >
              <div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

              <div className="w-full aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-jj-olive/20 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-all duration-700"
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

              <span className="absolute bottom-6 left-6 right-6 bg-jj-black text-white font-sans font-bold py-4 rounded-xl text-center translate-y-0 opacity-100 lg:translate-y-20 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 group-hover:bg-jj-gold">
                View Details
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );

  if (shouldDisable3D) {
    return (
      <section 
        id="shop" 
        className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-jj-ivory to-jj-black/10 z-20 rounded-t-[3rem] relative -mt-4 border-t border-jj-black/10"
      >
        {staticGridContent}
      </section>
    );
  }

  return (
    <>
    <section 
      id="shop" 
      ref={containerRef}
      className="bg-gradient-to-b from-jj-ivory to-jj-black/10 z-20 rounded-t-[3rem] relative -mt-4 border-t border-jj-black/10"
    >
      {/* DESKTOP: 3D Circular Rotating Gallery (Option B) */}
      <div className="hidden md:block h-[250vh] relative w-full">
          <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center py-24" style={{ perspective: "1500px" }}>
          {/* Header & CTA - Absolute positioned to float above the 3D gallery */}
          <div className="absolute top-24 left-0 right-0 z-50 px-6 md:px-12 pointer-events-none">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8">
              <div>
                <h2 className="text-5xl md:text-7xl font-serif text-jj-black mb-4 pointer-events-auto">
                  <TextReveal text="The Collection." />
                </h2>
                <p className="font-sans text-jj-black/60 md:text-xl tracking-wide max-w-sm pointer-events-auto">
                  Every formula. Every texture. Every curl type.
                </p>
              </div>
              <div className="pointer-events-auto">
                <MagneticButton>
                  <Link href="/products" className="bg-jj-olive border border-jj-olive hover:border-jj-gold px-8 py-4 text-white hover:bg-transparent hover:text-jj-black rounded-full font-serif transition-colors text-center inline-block cursor-pointer self-start md:self-auto shadow-lg">
                    View All Products
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3D Gallery Container */}
          <div className="w-full h-full flex items-center justify-center mt-16">
            <motion.div 
              style={{ 
                rotateY: prefersReducedMotion ? 0 : rotateY,
                transformStyle: "preserve-3d" 
              }} 
              className="relative w-[320px] h-[450px]"
            >
              {galleryItems.map((product, index) => {
                const angle = (360 / galleryItems.length) * index;
                // For 8 items of width 320px, a radius of ~450px prevents overlap
                return (
                  <div
                    key={`${product.slug}-${index}`}
                    className="absolute inset-0"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(480px)`,
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      className="group relative bg-[#EBE3D5] rounded-[2rem] p-6 pb-24 overflow-hidden h-full border border-transparent hover:border-jj-black/20 transition-all duration-500 block cursor-pointer shadow-xl hover:shadow-2xl bg-opacity-95 backdrop-blur-sm"
                    >
                      {/* Subtle shine effect on hover */}
                      <div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

                      <div className="w-full h-[220px] overflow-hidden rounded-[1.5rem] bg-jj-olive/20 relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-110 transition-all duration-700"
                        />
                      </div>

                      <div className="mt-6 flex flex-col gap-2 relative z-10">
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="font-sans text-xl font-bold text-jj-black group-hover:text-jj-gold transition-colors">
                            {product.name}
                          </h3>
                          <span className="font-mono text-jj-gold font-medium mt-1">
                            {product.price}
                          </span>
                        </div>
                        <p className="text-jj-black/60 font-serif leading-relaxed text-sm line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      <span className="absolute bottom-6 left-6 right-6 bg-jj-black text-white font-sans font-bold py-3 rounded-xl text-center translate-y-0 opacity-100 lg:translate-y-20 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 group-hover:bg-jj-gold">
                        View Details
                      </span>
                    </Link>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      </section>

      {/* MOBILE: Static Grid (Preserved) */}
      <section className="bg-gradient-to-b from-jj-ivory to-jj-black/10 z-20 rounded-t-[3rem] relative -mt-4 border-t border-jj-black/10 md:hidden py-24 px-6 block">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col justify-between items-start gap-6 border-b border-jj-black/10 pb-8">
            <div>
              <h2 className="text-5xl font-serif text-jj-black mb-4">
                The Collection.
              </h2>
              <p className="font-sans text-jj-black/60 tracking-wide max-w-sm">
                Every formula. Every texture. Every curl type.
              </p>
            </div>
            <Link href="/products" className="bg-jj-olive border border-jj-olive hover:border-jj-gold px-8 py-4 text-white hover:bg-transparent hover:text-jj-black rounded-full font-serif transition-colors text-center inline-block cursor-pointer self-start w-full">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ perspective: 1000 }}
                className="mt-6"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group relative bg-[#EBE3D5] rounded-[2rem] p-6 pb-24 overflow-hidden h-fit border border-transparent hover:border-jj-black/20 transition-colors block cursor-pointer shadow-sm hover:shadow-2xl"
                >
                  <div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

                  <div className="w-full aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-jj-olive/20 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-all duration-700"
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

                  <span className="absolute bottom-6 left-6 right-6 bg-jj-black text-white font-sans font-bold py-4 rounded-xl text-center transition-all duration-500 group-hover:bg-jj-gold">
                    View Details
                  </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}