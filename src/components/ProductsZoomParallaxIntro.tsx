"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GOAL_TO_PRODUCT_SLUG, PRODUCTS } from "@/data/products";

const TRACK_HEIGHT_CLASS = "min-h-[300vh]";

/** Absolute tile wrappers — staggered collage positions (four corners around center). */
const TILE_LAYOUT = [
  "[&>div]:!-top-[28vh] [&>div]:!left-[6vw] [&>div]:!h-[32vh] [&>div]:!w-[36vw]",
  "[&>div]:!-top-[8vh] [&>div]:!-left-[22vw] [&>div]:!h-[44vh] [&>div]:!w-[22vw]",
  "[&>div]:!top-[2vh] [&>div]:!left-[18vw] [&>div]:!h-[28vh] [&>div]:!w-[28vw]",
  "[&>div]:!top-[26vh] [&>div]:!-left-[8vw] [&>div]:!h-[26vh] [&>div]:!w-[22vw]",
] as const;

const P1 = 0.45;
const P2 = 0.75;

const PARALLAX_SCALE_START = [0.72, 0.78, 0.82, 0.76] as const;
const PARALLAX_SCALE_END = [1.1, 1.22, 1.06, 1.14] as const;

function focusSlugFromSearch(searchParams: ReturnType<typeof useSearchParams>) {
  const g = searchParams.get("goal")?.toLowerCase();
  if (g && GOAL_TO_PRODUCT_SLUG[g]) return GOAL_TO_PRODUCT_SLUG[g];
  return "hair-oil";
}

function scaleForTile(
  p: number,
  index: number,
  focusIndex: number,
  reduce: boolean
): number {
  if (reduce) return 1;
  const s0 = PARALLAX_SCALE_START[index];
  const s1 = PARALLAX_SCALE_END[index];
  if (p < P1) {
    const t = p / P1;
    return s0 + (s1 - s0) * t;
  }
  if (p < P2) {
    const t = (p - P1) / (P2 - P1);
    if (index === focusIndex) {
      return s1 + (3.85 - s1) * t;
    }
    return s1 + (0.4 - s1) * t;
  }
  const t = (p - P2) / (1 - P2);
  if (index === focusIndex) {
    return 3.85 + (3.5 - 3.85) * t;
  }
  return 0.4;
}

function opacityForTile(p: number, index: number, focusIndex: number, reduce: boolean): number {
  if (reduce) return 1;
  if (index === focusIndex) {
    if (p < P2) return 1;
    return 1 - ((p - P2) / (1 - P2)) * 0.12;
  }
  if (p < P1) return 1;
  const t = Math.min(1, (p - P1) / (0.55));
  return Math.max(0.18, 1 - t * 0.82);
}

function copyOpacity(p: number, reduce: boolean): number {
  if (reduce) return 1;
  if (p < P2) return 1;
  return Math.max(0, 1 - (p - P2) / (1 - P2));
}

function ReducedIntro() {
  return (
    <section className="relative bg-jj-black text-white" aria-label="Shop the collection">
      <div className="px-6 md:px-12 pt-24 pb-16 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.35em] text-jj-gold mb-3">Shop</p>
        <h1 className="font-serif text-4xl md:text-6xl mb-4">The collection</h1>
        <p className="font-sans text-white/75 max-w-lg mb-12 md:text-lg">
          Hair oil, butter, mask, and mist — handcrafted formulas for every curl pattern.
        </p>
        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          {PRODUCTS.map((product) => (
            <a
              key={product.slug}
              href="#shop"
              className="relative aspect-[4/5] rounded-2xl overflow-hidden block ring-1 ring-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-jj-gold"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductsZoomParallaxIntro() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return <ReducedIntro />;
  }
  return <ProductsZoomParallaxIntroParallax />;
}

function ProductsZoomParallaxIntroParallax() {
  const searchParams = useSearchParams();
  const focusSlug = useMemo(() => focusSlugFromSearch(searchParams), [searchParams]);
  const focusIndex = useMemo(() => {
    const i = PRODUCTS.findIndex((p) => p.slug === focusSlug);
    return i >= 0 ? i : 2;
  }, [focusSlug]);

  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  /** Focused tile uses plain flex centering (not collage offsets) so the hero sits in the viewport center. */
  const [focusCentered, setFocusCentered] = useState(false);

  const recalcProgress = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const range = el.offsetHeight - window.innerHeight;
    const p = range <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / range));
    progress.set(p);
    setFocusCentered((prev) => {
      const next = p >= P1;
      return prev === next ? prev : next;
    });
  }, [progress]);

  useLenis(recalcProgress);

  useEffect(() => {
    recalcProgress();
    window.addEventListener("resize", recalcProgress);
    window.addEventListener("scroll", recalcProgress, { passive: true });
    return () => {
      window.removeEventListener("resize", recalcProgress);
      window.removeEventListener("scroll", recalcProgress);
    };
  }, [recalcProgress]);

  const scale0 = useTransform(progress, (p) => scaleForTile(p, 0, focusIndex, false));
  const scale1 = useTransform(progress, (p) => scaleForTile(p, 1, focusIndex, false));
  const scale2 = useTransform(progress, (p) => scaleForTile(p, 2, focusIndex, false));
  const scale3 = useTransform(progress, (p) => scaleForTile(p, 3, focusIndex, false));

  const opacity0 = useTransform(progress, (p) => opacityForTile(p, 0, focusIndex, false));
  const opacity1 = useTransform(progress, (p) => opacityForTile(p, 1, focusIndex, false));
  const opacity2 = useTransform(progress, (p) => opacityForTile(p, 2, focusIndex, false));
  const opacity3 = useTransform(progress, (p) => opacityForTile(p, 3, focusIndex, false));

  const textOpacity = useTransform(progress, (p) => copyOpacity(p, false));
  const textY = useTransform(progress, (p) => (p < P2 ? 0 : -20 * ((p - P2) / (1 - P2))));

  const scales = [scale0, scale1, scale2, scale3];
  const opacities = [opacity0, opacity1, opacity2, opacity3];

  return (
    <div ref={containerRef} className={`relative w-full ${TRACK_HEIGHT_CLASS}`}>
      <div className="sticky top-0 z-0 h-[100dvh] min-h-[100svh] w-full overflow-hidden bg-jj-black">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-jj-black via-transparent to-jj-black opacity-40 z-[1]" />
        {PRODUCTS.map((product, index) => {
          const isFocused = index === focusIndex;
          const useCenterLayout = isFocused && focusCentered;
          return (
          <motion.div
            key={product.slug}
            style={{
              scale: scales[index],
              opacity: opacities[index],
            }}
            className={`absolute top-0 flex h-full w-full items-center justify-center will-change-transform ${
              useCenterLayout ? "z-[5]" : "z-0"
            } ${useCenterLayout ? "" : TILE_LAYOUT[index]}`}
          >
            <div className="relative h-[25vh] w-[25vw]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority={index === focusIndex}
                sizes="40vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        );
        })}

        <motion.div
          className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end px-6 pb-20 md:px-16 md:pb-28"
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="max-w-3xl text-white">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.35em] text-jj-gold/90 md:text-sm">Shop</p>
            <h1 className="mb-4 font-serif text-4xl leading-[1.05] md:text-6xl lg:text-7xl">The collection</h1>
            <p className="max-w-md font-sans text-base text-white/75 md:text-lg">
              Hair oil, butter, mask, and mist — handcrafted formulas for every curl pattern.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
