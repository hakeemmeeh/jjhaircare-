"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Droplets, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const features = [
  {
    icon: Droplets,
    title: "Deep Hydration",
    description: "Our rich formulas penetrate the hair shaft to provide lasting moisture and prevent breakage.",
  },
  {
    icon: Sparkles,
    title: "Natural Shine",
    description: "Cold-pressed oils restore your hair's natural luster without feeling heavy or greasy.",
  },
  {
    icon: ShieldCheck,
    title: "Strength & Protection",
    description: "Fortify your strands against environmental damage and daily styling stress.",
  },
];

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 1 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = feature.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      style={{ perspective: prefersReducedMotion ? undefined : 1000 }}
      className="h-full"
    >
      <motion.div
        style={prefersReducedMotion ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-jj-charcoal/40 border border-white/10 p-10 rounded-xl hover:border-jj-gold/40 hover:bg-jj-charcoal/60 hover:shadow-[0_8px_30px_rgba(184,150,78,0.08)] transition-colors duration-300 group h-full flex flex-col"
      >
        <motion.div 
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring", bounce: 0.5 }}
          style={prefersReducedMotion ? {} : { transform: "translateZ(30px)" }}
          className="w-14 h-14 bg-jj-nude/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-jj-nude group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300"
        >
          <Icon className="w-7 h-7 text-jj-nude group-hover:text-jj-black transition-colors duration-300" />
        </motion.div>
        
        <motion.h3 
          style={prefersReducedMotion ? {} : { transform: "translateZ(20px)" }}
          className="font-serif text-2xl mb-4 text-white group-hover:text-jj-gold transition-colors"
        >
          {feature.title}
        </motion.h3>
        
        <motion.p 
          style={prefersReducedMotion ? {} : { transform: "translateZ(10px)" }}
          className="text-white/60 font-light leading-relaxed flex-grow"
        >
          {feature.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-24 bg-jj-black text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jj-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl mb-4"
          >
            The <span className="italic text-jj-nude">JJHairCare</span> Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 font-light max-w-2xl mx-auto text-lg"
          >
            Experience the transformative power of pure, natural ingredients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-white/50 text-sm uppercase tracking-widest font-light">
            See what goes into every bottle
          </p>
          <Link
            href="/ingredients"
            className="inline-flex items-center gap-3 border border-jj-nude/50 text-jj-nude hover:bg-jj-nude hover:text-jj-black px-8 py-4 rounded-sm uppercase tracking-widest text-sm font-medium transition-all duration-300 cursor-pointer hover:shadow-[0_4px_20px_rgba(196,168,130,0.3)]"
          >
            Explore Our Ingredients
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
