"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: 10000, suffix: "+", label: "Happy Customers", isDecimal: false },
  { value: 100, suffix: "%", label: "Natural Ingredients", isDecimal: false },
  { value: 4, suffix: "", label: "Signature Products", isDecimal: false },
];

function Counter({
  value,
  suffix,
  isDecimal,
}: {
  value: number;
  suffix: string;
  isDecimal: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        if (isDecimal) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          }).format(latest);
        } else {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            Math.floor(latest)
          );
        }
      }
    });
  }, [springValue, isDecimal]);

  return (
    <div className="flex items-baseline justify-center font-serif text-4xl md:text-5xl lg:text-6xl text-jj-black mb-1">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // 3D Parallax Mouse Tracking — disabled when user prefers reduced motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const fgTranslateX = useTransform(smoothX, [-0.5, 0.5], ["-30px", "30px"]);
  const fgTranslateY = useTransform(smoothY, [-0.5, 0.5], ["-30px", "30px"]);

  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], ["30px", "-30px"]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], ["30px", "-30px"]);

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
        style={prefersReducedMotion ? {} : { x: bgTranslateX, y: bgTranslateY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Faded background image — optimized via Next.js Image */}
        <div className="absolute inset-0 z-0 opacity-[0.18] mix-blend-multiply">
          <Image
            src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=2500&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover grayscale"
            priority={false}
            sizes="100vw"
          />
        </div>

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
      <motion.div
        style={
          prefersReducedMotion
            ? {}
            : { rotateX, rotateY, x: fgTranslateX, y: fgTranslateY, transformStyle: "preserve-3d" }
        }
        className="relative z-20 container mx-auto px-6 pt-28 pb-16 md:pt-24 md:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >

        {/* Left: Text + CTA + Stats */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div style={prefersReducedMotion ? {} : { transform: "translateZ(60px)" }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-5xl md:text-7xl lg:text-7xl xl:text-8xl text-jj-black mb-4 md:mb-6 tracking-tight leading-[1.05]"
            >
              Where Nature <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-jj-olive italic inline-block font-extrabold"
              >
                Meets Beauty
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            style={prefersReducedMotion ? {} : { transform: "translateZ(40px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-jj-charcoal/80 font-light tracking-wide max-w-lg mb-8"
          >
            Premium natural hair care — crafted for your crown. Discover the essence of true hydration and growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            style={prefersReducedMotion ? {} : { transform: "translateZ(50px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16 w-full sm:w-auto"
          >
            <Link
              href="/products"
              className="bg-jj-black text-white font-medium px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-jj-olive transition-colors duration-300 cursor-pointer text-center"
            >
              Shop Now
            </Link>
            <Link
              href="/ingredients"
              className="relative border border-jj-olive/50 text-jj-olive font-medium px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:border-jj-olive hover:bg-jj-olive hover:text-white hover:shadow-[0_4px_20px_rgba(122,139,111,0.35)] transition-all duration-300 cursor-pointer text-center"
            >
              Our Ingredients
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            style={prefersReducedMotion ? {} : { transform: "translateZ(20px)" }}
            className="grid grid-cols-3 text-center w-full max-w-md lg:max-w-full"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 1.2 + index * 0.15 }}
                className="px-4"
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
                <p className="text-jj-charcoal/60 text-xs md:text-sm uppercase tracking-widest mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Product Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: prefersReducedMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={prefersReducedMotion ? {} : { transform: "translateZ(30px)" }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-[420px] h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-white/60">
            <Image
              src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1200&auto=format&fit=crop"
              alt="JJHairCare natural hair care products"
              fill
              className="object-cover"
              priority
              sizes="420px"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
              <p className="font-serif text-jj-black text-lg font-semibold leading-tight">100% Natural Ingredients</p>
              <p className="text-jj-charcoal/60 text-sm mt-1">No sulphates · No parabens · Vegan</p>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.8, duration: prefersReducedMotion ? 0 : 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:text-jj-black transition-colors z-30"
        aria-label="Scroll down to discover more"
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
