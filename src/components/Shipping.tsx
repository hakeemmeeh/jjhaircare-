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

export default function Shipping() {
  return (
    <section className="py-32 bg-jj-black text-white relative overflow-hidden">
      {/* Abstract Map/Globe Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full rounded-full border border-jj-nude/20 border-dashed"
        >
          <div className="absolute inset-[10%] rounded-full border border-jj-nude/10 border-dashed" />
          <div className="absolute inset-[20%] rounded-full border border-jj-nude/10 border-dashed" />
          <div className="absolute inset-[30%] rounded-full border border-jj-nude/10 border-dashed" />
          <div className="absolute inset-[40%] rounded-full border border-jj-nude/10 border-dashed" />
          
          {/* Animated Dots representing shipping locations */}
          {[...Array(12)].map((_, i) => (
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
              className="absolute w-2 h-2 bg-jj-gold rounded-full shadow-[0_0_10px_#B8964E]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto bg-jj-charcoal/50 rounded-full flex items-center justify-center mb-8 border border-jj-nude/20">
            <Globe className="w-8 h-8 text-jj-nude" />
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Your Crown, <span className="italic text-jj-nude">Delivered Worldwide</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 font-light text-lg mb-12"
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
                className="text-sm uppercase tracking-widest text-jj-nude font-medium bg-jj-charcoal/40 px-6 py-3 rounded-full border border-jj-nude/10 hover:border-jj-nude/40 transition-colors"
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
