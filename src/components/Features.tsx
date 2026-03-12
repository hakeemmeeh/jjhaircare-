"use client";

import { motion } from "framer-motion";
import { Droplets, Sparkles, ShieldCheck } from "lucide-react";

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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="bg-jj-charcoal/40 border border-white/10 p-10 rounded-xl hover:border-jj-gold/40 hover:bg-jj-charcoal/60 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-jj-nude/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-jj-nude transition-colors duration-300">
                  <Icon className="w-7 h-7 text-jj-nude group-hover:text-jj-black transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-white group-hover:text-jj-gold transition-colors">{feature.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
