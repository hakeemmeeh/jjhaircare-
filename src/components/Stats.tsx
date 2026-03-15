"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Happy Customers", isDecimal: false },
  { value: 100, suffix: "%", label: "Natural Ingredients", isDecimal: false },
  { value: 4, suffix: "", label: "Signature Products", isDecimal: false },
  { value: 30, suffix: "+", label: "Countries Shipped To", isDecimal: false },
  { value: 4.9, suffix: "★", label: "Average Rating", isDecimal: true },
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <div className="flex items-baseline justify-center font-serif text-5xl md:text-6xl text-jj-nude mb-2">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-jj-black relative overflow-hidden border-y border-jj-gold/10">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-jj-nude/5 blur-[80px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 text-center [&>*:last-child]:col-span-2 lg:[&>*:last-child]:col-span-1">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                isDecimal={stat.isDecimal}
              />
              <p className="text-white/60 text-sm uppercase tracking-widest mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
