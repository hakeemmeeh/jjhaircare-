"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const ingredients = [
  {
    name: "Shea Butter",
    benefit: "Deep moisture and protection from root to tip.",
    description: "Ethically sourced from West Africa, our unrefined Shea Butter is packed with essential fatty acids and vitamins A and E to deeply nourish, repair breakage, and lock in long-lasting moisture.",
    image: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=800&auto=format&fit=crop",
    stats: [
      { label: "Core Function", value: "Deep Moisture" },
      { label: "Key Vitamins", value: "A + E" },
      { label: "Best For", value: "Dry/Coarse Hair" },
    ],
  },
  {
    name: "Jamaican Black Castor Oil",
    benefit: "Promotes growth and strengthens strands.",
    description: "Roasted and cold-pressed to retain its nutrient density, this powerful oil stimulates blood flow to the scalp, encouraging healthy growth while thickening and strengthening thinning edges.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    stats: [
      { label: "Core Function", value: "Root Support" },
      { label: "Scalp Action", value: "Circulation Boost" },
      { label: "Best For", value: "Weak/Thinning Areas" },
    ],
  },
  {
    name: "Argan Oil",
    benefit: "Restores shine and tames frizz naturally.",
    description: "Often called 'liquid gold', our pure Moroccan Argan Oil coats the hair shaft to smooth cuticles, drastically reducing frizz and leaving your hair with a brilliant, lightweight shine.",
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=800&auto=format&fit=crop",
    stats: [
      { label: "Core Function", value: "Frizz Control" },
      { label: "Texture Effect", value: "Cuticle Smoothing" },
      { label: "Best For", value: "Dull/Flyaway Hair" },
    ],
  },
  {
    name: "Aloe Vera",
    benefit: "Soothes the scalp and locks in hydration.",
    description: "Rich in proteolytic enzymes, fresh Aloe Vera juice heals dead skin cells on the scalp, balances pH levels, and acts as a humectant to draw essential water into thirsty curls.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
    stats: [
      { label: "Core Function", value: "Scalp Calm" },
      { label: "Hydration Type", value: "Humectant" },
      { label: "Best For", value: "Dry/Itchy Scalp" },
    ],
  },
  {
    name: "Tea Tree Oil",
    benefit: "Cleanses and refreshes for a healthy scalp.",
    description: "A natural antibacterial and antifungal powerhouse, Tea Tree oil purifies the scalp, unclogs hair follicles, and relieves itchiness and dandruff without stripping natural oils.",
    image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?q=80&w=800&auto=format&fit=crop",
    stats: [
      { label: "Core Function", value: "Clarifying Care" },
      { label: "Scalp Action", value: "Follicle Purify" },
      { label: "Best For", value: "Flakes/Buildup" },
    ],
  },
];

export default function Ingredients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="ingredients" className="py-32 bg-jj-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-jj-gold/70" />
              <h4 className="text-jj-gold text-sm uppercase tracking-[0.2em] font-medium">Ingredient Technology</h4>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              What Goes Into <br className="hidden md:block" />
              <span className="italic text-jj-gold">Your Crown</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 font-light text-lg md:text-xl max-w-md pb-2"
          >
            Built around high-performance botanicals selected for hydration, scalp balance, and long-term strength.
          </motion.p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 sticky top-36 self-start">
            <div className="relative overflow-hidden rounded-[1.25rem] border border-white/20 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-sm">
              <div className="relative aspect-[4/5]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={ingredients[activeIndex].name}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={ingredients[activeIndex].image}
                      alt={ingredients[activeIndex].name}
                      fill
                      sizes="(max-width: 1280px) 40vw, 34vw"
                      className={`object-cover transition-all duration-500 ${
                        prefersReducedMotion
                          ? ""
                          : activeIndex % 2 === 0
                            ? "grayscale-[18%] contrast-105 saturate-[0.9]"
                            : "grayscale-0 contrast-100 saturate-100"
                      }`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="border-t border-white/20 px-6 py-5 bg-black/35">
                <p className="text-xs uppercase tracking-[0.2em] text-jj-gold mb-2">Active Ingredient</p>
                <h3 className="font-serif text-3xl text-white">{ingredients[activeIndex].name}</h3>
                <p className="mt-2 text-white/75">{ingredients[activeIndex].benefit}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {ingredients[activeIndex].stats.map((stat) => (
                <div key={stat.label} className="rounded-md border border-white/15 bg-white/5 px-3 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">{stat.label}</p>
                  <p className="mt-1 text-sm font-medium text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-[1.25rem] border border-white/10 bg-gradient-nude px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.16)] ring-1 ring-jj-black/5 md:px-8">
            {ingredients.map((item, index) => (
              <motion.article
                key={item.name}
                onViewportEnter={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`border-b py-10 origin-left transition-all duration-300 ${
                  activeIndex === index
                    ? "border-jj-gold/70 scale-[1.01] shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
                    : "border-jj-black/10 scale-100"
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="font-mono text-[11px] tracking-[0.24em] text-jj-gold">
                    INGREDIENT {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl text-jj-black mb-3">{item.name}</h3>
                <p className="text-jj-black font-medium text-lg mb-2">{item.benefit}</p>
                <p className="text-jj-charcoal/75 text-base leading-relaxed max-w-2xl">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-1 gap-6">
          {ingredients.map((item, index) => {
            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-[1rem] bg-white/5 border border-white/15 shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-[#EBE3D5]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-jj-gold mb-2">
                    Ingredient {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-3xl text-white mb-2">{item.name}</h3>
                  <p className="text-white font-medium mb-2">{item.benefit}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 rounded-sm border border-white/20 bg-white/5 px-5 py-4 sm:px-6 sm:py-5"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-white/75">
              See how these ingredient layers combine across our oils, butters, masks, and mists.
            </p>
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-sm border border-white px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-jj-black"
            >
              View collection
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}