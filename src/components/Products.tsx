"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import { GOAL_TO_PRODUCT_SLUG, PRODUCTS, type Product } from "@/data/products";

const GOAL_SCROLL_NAV_OFFSET = -112;

export type { Product };
export { GOAL_TO_PRODUCT_SLUG, PRODUCTS };

export default function Products() {
  const searchParams = useSearchParams();
  const prefersReducedMotion = useReducedMotion();
  const lenis = useLenis();
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);
  const highlightTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const goalParam = searchParams.get("goal")?.toLowerCase();
    const goalFromUrl =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("goal")?.toLowerCase()
        : undefined;
    const goal = goalParam ?? goalFromUrl;
    if (!goal) {
      setHighlightedSlug(null);
      return;
    }
    const slug = GOAL_TO_PRODUCT_SLUG[goal];
    if (!slug) {
      setHighlightedSlug(null);
      return;
    }

    let cancelled = false;
    const timeoutIds: number[] = [];

    const scrollToProduct = (el: HTMLElement) => {
      const immediate = Boolean(prefersReducedMotion);
      if (lenis) {
        lenis.scrollTo(el, {
          offset: GOAL_SCROLL_NAV_OFFSET,
          immediate,
          force: true,
        });
      } else {
        const top =
          el.getBoundingClientRect().top +
          window.scrollY +
          GOAL_SCROLL_NAV_OFFSET;
        window.scrollTo({
          top: Math.max(0, top),
          behavior: immediate ? "auto" : "smooth",
        });
      }
    };

    const tryScroll = () => {
      if (cancelled) return false;
      const el = document.getElementById(`product-${slug}`);
      if (!el) return false;

      scrollToProduct(el);
      if (!prefersReducedMotion) {
        setHighlightedSlug(slug);
        if (highlightTimeoutRef.current) window.clearTimeout(highlightTimeoutRef.current);
        highlightTimeoutRef.current = window.setTimeout(() => {
          setHighlightedSlug(null);
          highlightTimeoutRef.current = null;
        }, 2800);
      }
      return true;
    };

    const schedule = (ms: number) => {
      const id = window.setTimeout(() => {
        tryScroll();
      }, ms);
      timeoutIds.push(id);
    };

    schedule(0);
    requestAnimationFrame(() => {
      if (!cancelled) tryScroll();
    });
    schedule(80);
    schedule(250);
    schedule(600);

    return () => {
      cancelled = true;
      timeoutIds.forEach((id) => window.clearTimeout(id));
      if (highlightTimeoutRef.current) {
        window.clearTimeout(highlightTimeoutRef.current);
        highlightTimeoutRef.current = null;
      }
    };
  }, [searchParams, prefersReducedMotion, lenis]);

  return (
    <section
      id="shop"
      className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-jj-ivory to-jj-black/10 z-20 rounded-t-[3rem] relative -mt-4 border-t border-jj-black/10"
    >
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
        {PRODUCTS.map((product, index) => (
          <div
            key={product.name}
            id={`product-${product.slug}`}
            className={`mt-6 lg:mt-12 scroll-mt-28 rounded-[2rem] transition-[box-shadow,ring] duration-300 ${
              highlightedSlug === product.slug
                ? "ring-2 ring-jj-gold ring-offset-2 ring-offset-jj-ivory shadow-lg"
                : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 1000 }}
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
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}