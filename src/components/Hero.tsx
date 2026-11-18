"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SHOWCASE = [
  { src: "/images/luxury-mint-green-haircare-collection.png", alt: "JJ Haircare complete collection on a mint green marble display", name: "Complete Collection", href: "/products" },
  { src: "/images/herbal-hair-oil-marble.png", alt: "JJ Haircare Herbal Hair Oil on marble with fresh botanicals", name: "Herbal Hair Oil", href: "/products/herbal-hair-oil" },
  { src: "/images/scalp-detox-studio.png", alt: "JJ Haircare Scalp Detox Mask with fresh botanicals", name: "Scalp Detox Mask", href: "/products/scalp-detox-mask" },
  { src: "/images/moringa-hair-butter-mint-luxe.png", alt: "JJ Haircare Moringa Hair Butter with a fresh mint finish", name: "Moringa Hair Butter", href: "/products/moringa-hair-butter" },
  { src: "/images/hibiscus-hair-butter-glow.png", alt: "JJ Haircare Hibiscus Hair Butter with a rose pink cream finish", name: "Hibiscus Hair Butter", href: "/products/hibiscus-hair-butter" },
  { src: "/images/hair-mist-mint-ad.png", alt: "JJ Haircare Hair Mist on a mint green marble display", name: "Hair Mist", href: "/products/hair-mist" },
];

export default function Hero() {
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const bgScrollRef = useRef<HTMLDivElement>(null);
  const bgMouseRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  // -0.5..0.5 target from the pointer, and the eased current value
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(false);

  // Respect reduced-motion preference.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Autoplay the showcase.
  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setShowcaseIndex((i) => (i + 1) % SHOWCASE.length), 4500);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  // rAF lerp loop for 3D tilt + glare. Runs only while the pointer is
  // settling (not idle), so zero steady-state CPU cost. Scroll parallax
  // is applied directly on scroll (below), not in this loop.
  useEffect(() => {
    if (reduceMotion) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x = lerp(current.current.x, target.current.x, 0.12);
      current.current.y = lerp(current.current.y, target.current.y, 0.12);

      const { x, y } = current.current;

      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg)`;
      }
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${(x * 100 + 50).toFixed(1)}% ${(y * 100 + 50).toFixed(1)}%, rgba(255,255,255,0.4) 0%, transparent 50%)`;
      }
      if (bgMouseRef.current) {
        bgMouseRef.current.style.transform = `translate(${(-x * 30).toFixed(1)}px, ${(-y * 30).toFixed(1)}px)`;
      }

      // Keep looping only while the pointer is settling.
      if (Math.abs(dx) + Math.abs(dy) > 0.0005) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        runningRef.current = false;
        rafRef.current = null;
      }
    };

    const start = () => {
      if (!runningRef.current) {
        runningRef.current = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const sec = cardRef.current?.closest("section") as HTMLElement | null;
    const onMove = (e: MouseEvent) => {
      if (!sec) return;
      const { left, top, width, height } = sec.getBoundingClientRect();
      target.current.x = (e.clientX - left) / width - 0.5;
      target.current.y = (e.clientY - top) / height - 0.5;
      start();
    };
    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
      start();
    };
    // Scroll parallax applied directly — cheap, no persistent loop.
    const onScroll = () => {
      if (bgScrollRef.current) {
        bgScrollRef.current.style.transform = `translateY(${((window.scrollY || 0) * 0.15).toFixed(1)}px)`;
      }
    };

    sec?.addEventListener("mousemove", onMove);
    sec?.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      sec?.removeEventListener("mousemove", onMove);
      sec?.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      runningRef.current = false;
    };
  }, [reduceMotion]);

  const active = SHOWCASE[showcaseIndex];

  return (
    <section className="relative md:min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[linear-gradient(125deg,#F7F2EC_0%,#E8EFE7_42%,#DCE9DC_72%,#D4B5A0_125%)]">
      {/* Decorative background: outer = scroll parallax, inner = pointer parallax + rings */}
      <div ref={bgScrollRef} className="absolute inset-0 pointer-events-none will-change-transform">
        <div ref={bgMouseRef} className="absolute inset-0 pointer-events-none will-change-transform">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-white/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-jj-rose/15 rounded-full blur-[120px] pointer-events-none" />
          {!reduceMotion && (
            <>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-jj-black/5 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-jj-nude/10 rounded-full border-dashed animate-[spin_80s_linear_infinite_reverse]" />
            </>
          )}
        </div>
      </div>

      {/* Main content — split layout on desktop */}
      <div className="relative z-20 container max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 md:px-6 lg:px-12 pt-28 pb-14 md:pt-24 md:pb-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-center">

        {/* Left: message + CTAs */}
        <div className="flex flex-col items-start text-left max-w-xl lg:max-w-none">
          <p className="mb-5 flex items-center gap-3 font-mono text-[11px] sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-jj-olive">
            <span aria-hidden="true" className="h-px w-8 bg-jj-olive/60" />
            Herbal hair care · Nairobi, Kenya
          </p>

          <h1 className="font-serif font-bold text-[2.5rem] leading-[1.08] sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-jj-black tracking-tight mb-6">
            Natural hair care,{" "}
            <span className="block italic text-jj-olive">made in Nairobi.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-jj-charcoal/80 font-light leading-relaxed max-w-md mb-8 md:mb-10">
            Herbal oil, butters, a scalp mask and hair mist for natural, curly and coily hair.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-6">
            <Link
              href="/contact#order"
              className="inline-flex items-center justify-center gap-2.5 bg-jj-black text-white font-medium px-8 py-4 min-h-[52px] rounded-full uppercase tracking-wider text-sm whitespace-nowrap hover:bg-jj-olive transition-colors duration-300"
            >
              Order now
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2.5 border border-jj-black/70 text-jj-black font-medium px-8 py-4 min-h-[52px] rounded-full uppercase tracking-wider text-sm whitespace-nowrap hover:bg-jj-black hover:text-white transition-colors duration-300"
            >
              Shop the collection
            </Link>
          </div>

          <ul className="mt-8 md:mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm uppercase tracking-widest text-jj-charcoal/70">
            <li>100% natural ingredients</li>
            <li>Hair oil · Butters · Scalp mask · Mist</li>
          </ul>
        </div>

        {/* Right: rotating product image with 3D tilt + glare */}
        <div className="hidden lg:flex items-center justify-center" style={{ perspective: reduceMotion ? undefined : 1200 }}>
          <div
            ref={cardRef}
            className="relative w-full max-w-[460px] xl:max-w-[560px] 2xl:max-w-[720px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/60 group will-change-transform"
            style={{ transformStyle: reduceMotion ? undefined : "preserve-3d" }}
          >
            {/* Glare */}
            <div ref={glareRef} className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay transition-opacity duration-300" />

            <Link href={active.href} className="absolute inset-0 block" aria-label={`Shop ${active.name}`}>
              <div key={active.src} className={`absolute inset-0 ${reduceMotion ? "" : "jj-hero-fade"}`}>
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  className="object-cover"
                  priority={showcaseIndex === 0}
                  sizes="(min-width: 1536px) 720px, (min-width: 1280px) 560px, 460px"
                />
              </div>
            </Link>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-0">
              {SHOWCASE.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Show ${item.name}`}
                  onClick={() => setShowcaseIndex(i)}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <span className={`block h-2 rounded-full transition-all ${i === showcaseIndex ? "w-6 bg-jj-black" : "w-2 bg-white/80 ring-1 ring-jj-black/20"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer hover:text-jj-black transition-colors z-30"
        aria-label="Scroll to Discover"
      >
        <span className="text-jj-charcoal/80 font-semibold text-xs uppercase tracking-widest">
          Scroll to Discover
        </span>
        <span className={reduceMotion ? "" : "jj-hero-bob"}>
          <ChevronDown className="w-6 h-6 text-jj-charcoal/80" />
        </span>
      </button>
    </section>
  );
}