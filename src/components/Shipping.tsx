"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const regions = [
  "North America",
  "Europe",
  "Africa",
  "Caribbean",
  "Middle East",
  "Australia",
];
const DOTS = Array.from({ length: 12 }, (_, i) => ({
  top: `${(i * 37 + 13) % 100}%`,
  left: `${(i * 61 + 19) % 100}%`,
}));

export default function Shipping() {
  return (
    <section className="py-32 bg-jj-black text-white relative overflow-hidden">
      {/* Abstract Map/Globe Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[62.5%] h-[800px] opacity-20 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="relative w-[100%] h-full rounded-[9999px] border-[1px] border-jj-nude/20 border-dashed"
        >
          <div className="absolute inset-[10%] rounded-[9999px] border-[1px] border-jj-nude/10 border-dashed" />
          <div className="absolute inset-[20%] rounded-[9999px] border-[1px] border-jj-nude/10 border-dashed" />
          <div className="absolute inset-[30%] rounded-[9999px] border-[1px] border-jj-nude/10 border-dashed" />
          <div className="absolute inset-[40%] rounded-[9999px] border-[1px] border-jj-nude/10 border-dashed" />
          
          {/* Animated Dots representing shipping locations */}
          {DOTS.map((dot, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              className="absolute w-2 h-2 bg-jj-gold rounded-[9999px] shadow-[0_0_10px_#B8964E]"
              style={{
                top: dot.top,
                left: dot.left,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-[60%] mx-auto text-center">
          <div className="w-16 h-16 mx-auto bg-jj-charcoal/50 rounded-[9999px] flex items-center justify-center mb-8 border-[1px] border-jj-nude/20">
            <Globe className="w-8 h-8 text-jj-nude" />
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] mb-6"
          >
            Your Crown, <span className="italic text-jj-nude">Delivered Worldwide</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 font-light text-[1.125rem] mb-12"
          >
            We ship to over 30 countries. Wherever you are, luxury hair care is just a click away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {regions.map((region) => (
              <span
                key={region}
                className="text-[0.875rem] uppercase tracking-widest text-jj-nude font-medium bg-jj-charcoal/40 px-6 py-3 rounded-[9999px] border-[1px] border-jj-nude/10 hover:border-jj-nude/40 transition-colors"
              >
                {region}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
