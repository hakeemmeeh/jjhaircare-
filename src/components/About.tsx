"use client";

import { motion } from "framer-motion";
import { Leaf, Sparkles, Heart } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Only clean, plant-based ingredients. Nothing artificial, ever.",
  },
  {
    icon: Sparkles,
    title: "Handcrafted",
    description: "Small-batch formulations for maximum potency and freshness.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "Never tested on animals. Always kind to the planet.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-gradient-nude relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jj-sand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-jj-rose/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-jj-black mb-8 leading-tight">
              Rooted in Nature. <br />
              <span className="italic text-jj-olive">Crafted with Purpose.</span>
            </h2>
            <p className="text-lg md:text-xl text-jj-charcoal/80 font-light leading-relaxed max-w-3xl mx-auto">
              JJHairCare was born from a belief that your hair deserves only the purest, most powerful ingredients nature has to offer. Every product is handcrafted with ethically sourced botanicals, essential oils, and butters — free from sulfates, parabens, and silicones. We celebrate the beauty of natural hair in all its forms.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="bg-jj-ivory/60 backdrop-blur-sm p-10 rounded-2xl border border-jj-gold/20 hover:border-jj-gold/50 transition-colors group text-center"
              >
                <div className="w-16 h-16 mx-auto bg-jj-nude rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-jj-nude/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-jj-black mb-4">{pillar.title}</h3>
                <p className="text-jj-charcoal/70 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
