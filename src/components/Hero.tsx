"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, AnimatePresence, useScroll, useMotionTemplate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { WHATSAPP_NUMBER, whatsappOrderUrl, PHONE_DISPLAY } from "@/data/site-config";

const SHOWCASE = [
  { src: "/images/herbal-oil-face-v5.jpg", alt: "JJ Haircare Herbal Hair Oil — nourish, strengthen, grow", name: "Herbal Hair Oil", href: "/products/herbal-hair-oil" },
  { src: "/images/scalp-detox-face-v4.jpg", alt: "JJ Haircare Scalp Detox Mask — cleanse, detox, revive", name: "Scalp Detox Mask", href: "/products/scalp-detox-mask" },
  { src: "/images/moringa-hair-butter-v2.jpg", alt: "JJ Haircare Moringa Hair Butter — nourish, strengthen, grow", name: "Moringa Hair Butter", href: "/products/moringa-hair-butter" },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [showcaseIndex, setShowcaseIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => setShowcaseIndex((i) => (i + 1) % SHOWCASE.length), 4500);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  // 3D Parallax Mouse Tracking — disabled when user prefers reduced motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], ["30px", "-30px"]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], ["30px", "-30px"]);

  const { scrollY } = useScroll();
  const parallaxYBg = useTransform(scrollY, [0, 1000], [0, 200]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-gradient-nude"
      style={{ perspective: prefersReducedMotion ? undefined : 1200 }}
    >

      {/* Decorative Background Elements */}
      <motion.div
        style={prefersReducedMotion ? {} : { x: bgTranslateX, y: bgTranslateY, translateY: parallaxYBg }}
        className="absolute inset-0 pointer-events-none"
      >

        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-white/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-jj-rose/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating rings — suppressed when motion is reduced */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-jj-black/5 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-jj-nude/10 rounded-full border-dashed"
            />
          </>
        )}
      </motion.div>

      {/* Main Content — split layout on desktop */}
      <div className="relative z-20 container max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 md:px-6 lg:px-12 pt-28 pb-16 md:pt-24 md:pb-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-8 items-center">

        {/* Left: who / what / why / how — one clear path to contact */}
        <div className="flex flex-col items-start text-left max-w-xl lg:max-w-none">
          {/* Eyebrow: primary category + primary location */}
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

          {/* CTAs: 1 order, 2 call, 3 browse */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-6">
            <a
              href={whatsappOrderUrl("Hi JJ Haircare, I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-jj-black text-white font-medium px-6 py-4 min-h-[52px] rounded-sm uppercase tracking-wider text-sm whitespace-nowrap hover:bg-jj-olive transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Order on WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="inline-flex items-center justify-center gap-2.5 border border-jj-black/70 text-jj-black font-medium px-6 py-4 min-h-[52px] rounded-sm uppercase tracking-wider text-sm whitespace-nowrap hover:bg-jj-black hover:text-white transition-colors duration-300"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 py-2 text-sm font-medium uppercase tracking-widest text-jj-black underline-offset-8 hover:underline"
          >
            Shop the collection <span aria-hidden="true">→</span>
          </Link>

          {/* Proof */}
          <ul className="mt-8 md:mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm uppercase tracking-widest text-jj-charcoal/70">
            <li>100% natural ingredients</li>
            <li>5 signature products</li>
          </ul>
        </div>

        {/* Right: Product Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: prefersReducedMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={prefersReducedMotion ? {} : { transform: "translateZ(30px)" }}
          className="hidden lg:flex items-center justify-center"
        >
          <motion.div 
            className="relative w-full max-w-[460px] xl:max-w-[560px] 2xl:max-w-[720px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/60 group"
            style={prefersReducedMotion ? {} : {
              rotateX: useTransform(smoothY, [-0.5, 0.5], ["10deg", "-10deg"]),
              rotateY: useTransform(smoothX, [-0.5, 0.5], ["-10deg", "10deg"]),
              transformStyle: "preserve-3d"
            }}
          >
            {/* Dynamic Glare Effect */}
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay transition-opacity duration-300"
              style={prefersReducedMotion ? {} : {
                background: useMotionTemplate`radial-gradient(
                  circle at ${useTransform(smoothX, [-0.5, 0.5], [0, 100])}% ${useTransform(smoothY, [-0.5, 0.5], [0, 100])}%,
                  rgba(255,255,255,0.4) 0%,
                  transparent 50%
                )`
              }}
            />
            <Link href={SHOWCASE[showcaseIndex].href} className="absolute inset-0 block" aria-label={`Shop ${SHOWCASE[showcaseIndex].name}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={SHOWCASE[showcaseIndex].src}
                  initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SHOWCASE[showcaseIndex].src}
                    alt={SHOWCASE[showcaseIndex].alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 1536px) 720px, (min-width: 1280px) 560px, 460px"
                  />
                </motion.div>
              </AnimatePresence>
            </Link>
            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
              {SHOWCASE.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Show ${item.name}`}
                  onClick={() => setShowcaseIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === showcaseIndex ? "w-6 bg-jj-black" : "w-2 bg-white/80 ring-1 ring-jj-black/20"}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.8, duration: prefersReducedMotion ? 0 : 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer hover:text-jj-black transition-colors z-30"
        aria-label="Scroll to Discover"
      >
        <span className="text-jj-charcoal/80 font-semibold text-xs uppercase tracking-[0.3em]">
          Scroll to Discover
        </span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-jj-charcoal/80" />
        </motion.div>
      </motion.button>

    </section>
  );
}
