"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import MagneticButton from "@/components/MagneticButton";
import { GOAL_TO_PRODUCT_SLUG, PRODUCTS, type Product } from "@/data/products";

const GOAL_SCROLL_NAV_OFFSET = -112;

export type { Product };
export { GOAL_TO_PRODUCT_SLUG, PRODUCTS };

export default function Products() {
  const searchParams = useSearchParams();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const lenis = useLenis();
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);
  const highlightTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const goalParam = searchParams.get("goal")?.toLowerCase();
    const goalFromUrl =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("goal")?.toLowerCase()
        : undefined;
    const goal = goalParam ?? goalFromUrl;
    if (!goal) {
      return;
    }
    const slug = GOAL_TO_PRODUCT_SLUG[goal];
    if (!slug) {
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
      className="py-14 md:py-28 px-6 md:px-12 bg-[#F5F2EA] z-20 relative border-t border-jj-black/[0.08]"
    >
      <div className="max-w-[1380px] mx-auto">
      <div className="mb-10 md:mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-jj-forest/10 pb-8">
        <div>
          <p className="eyebrow mb-4">The collection</p>
          <h2 className="text-4xl md:text-6xl font-serif text-jj-forest mb-4 leading-[1.05] tracking-tight text-balance">
            Shop natural hair products
          </h2>
          <p className="font-sans text-jj-charcoal/70 md:text-lg max-w-xl font-light leading-relaxed">
            Herbal hair oil, hair butters, a scalp detox mask and hair mist. From KES 1,000.
          </p>
        </div>
        <MagneticButton>
          <Link href="/products" className="bg-jj-forest border border-jj-forest hover:bg-transparent hover:text-jj-forest px-8 py-4 text-jj-paper rounded-full font-sans text-xs tracking-[0.1em] transition-colors text-center inline-block cursor-pointer self-start md:self-auto">
            View All Products
          </Link>
        </MagneticButton>
      </div>

      <div className="hide-scroll flex snap-x snap-mandatory scroll-pl-6 gap-4 overflow-x-auto pb-5 sm:gap-5 sm:scroll-pl-0 xl:gap-5">
        {PRODUCTS.map((product) => (
          <div
            key={product.name}
            id={`product-${product.slug}`}
            className={`flex w-[min(78vw,18rem)] shrink-0 snap-start scroll-mt-28 rounded-[1.5rem] transition-[box-shadow,ring] duration-300 sm:w-[42vw] lg:w-[30vw] xl:w-[calc((100%-5rem)/5)] xl:max-w-none ${
              highlightedSlug === product.slug
                ? "ring-2 ring-jj-gold ring-offset-2 ring-offset-jj-ivory shadow-lg"
                : ""
            }`}
          >
            <div className="h-full w-full">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
