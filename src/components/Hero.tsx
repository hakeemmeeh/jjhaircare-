"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

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
  
  // 3D Parallax Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map mouse movement to 3D rotation and translation
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  // Foreground translation (moves with mouse)
  const fgTranslateX = useTransform(smoothX, [-0.5, 0.5], ["-30px", "30px"]);
  const fgTranslateY = useTransform(smoothY, [-0.5, 0.5], ["-30px", "30px"]);
  
  // Background translation (moves opposite to mouse for depth)
  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], ["30px", "-30px"]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], ["30px", "-30px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5; // -0.5 to 0.5
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
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-gradient-nude pb-24 md:pb-0"
      style={{ perspective: 1200 }}
    >
      
      {/* 3D Decorative Abstract Background Elements */}
      <motion.div 
        style={{ x: bgTranslateX, y: bgTranslateY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Faded Dark Background Image for Contrast */}
        <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-multiply">
          <img
            src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=2500&auto=format&fit=crop"
            alt="Faded Natural Hair Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-white/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-jj-rose/15 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle floating rings for elegant dimension */}
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
      </motion.div>

      {/* 3D Center Content */}
      <motion.div 
        style={{ 
          rotateX, 
          rotateY, 
          x: fgTranslateX, 
          y: fgTranslateY,
          transformStyle: "preserve-3d"
        }}
        className="relative z-20 container mx-auto px-6 flex flex-col items-center justify-center text-center mt-32 md:mt-16"
      >
        
        {/* Staggered Text Reveal */}
        <div style={{ transform: "translateZ(60px)" }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-jj-black mb-6 tracking-tight leading-[1.05]"
          >
            Where Nature <br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-jj-olive italic inline-block font-extrabold"
            >
              Meets Beauty
            </motion.span>
          </motion.h1>
        </div>
        
        <motion.p
          style={{ transform: "translateZ(40px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-2xl text-jj-charcoal/80 font-light tracking-wide max-w-2xl mb-8 md:mb-16"
        >
          Premium natural hair care — crafted for your crown. Discover the essence of true hydration and growth.
        </motion.p>

        {/* Stats Section with Depth */}
        <motion.div 
          style={{ transform: "translateZ(20px)" }}
          className="grid grid-cols-3 gap-4 md:gap-16 text-center border-t border-jj-black/10 pt-6 md:pt-10 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                isDecimal={stat.isDecimal}
              />
              <p className="text-jj-charcoal/60 text-[10px] md:text-sm uppercase tracking-widest mt-3 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex flex-col items-center gap-2 cursor-pointer hover:text-jj-black transition-colors z-30 relative"
        >
          <span className="text-jj-charcoal/80 font-semibold text-xs uppercase tracking-[0.3em]">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-jj-charcoal/80" />
          </motion.div>
        </motion.button>
      </motion.div>

    </section>
  );
}
