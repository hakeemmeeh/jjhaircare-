"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const goals = [
  {
    title: "Deep hydration",
    line: "For thirsty strands that need lasting moisture.",
    href: "/products/hibiscus-hair-butter",
    image: "/images/hibiscus-hair-butter-card-v2.jpg",
  },
  {
    title: "Growth & strength",
    line: "Edges, length, and resilience without heaviness.",
    href: "/products/herbal-hair-oil",
    image: "/images/herbal-oil-face-v5.jpg",
  },
  {
    title: "Scalp balance",
    line: "Refresh the root—clarity without stripping.",
    href: "/products/scalp-detox-mask",
    image: "/images/scalp-detox-face-v4.jpg",
  },
  {
    title: "Shine & definition",
    line: "Frizz down, brilliance up—lightweight finish.",
    href: "/products/hair-mist",
    image: "/images/hair-mist-face-v6.jpg",
  },
];

export default function HairGoals() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 px-6 md:px-12" aria-labelledby="hair-goals-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-jj-black/50 mb-3">
              Shop by goal
            </p>
            <h2
              id="hair-goals-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-jj-black leading-tight"
            >
              Find what your hair <span className="italic text-jj-olive">needs today</span>
            </h2>
          </div>
          <p className="text-jj-charcoal/75 max-w-md text-base md:text-lg font-light">
            Pick a focus—our oils, butters, masks, and mists are built for everyday crown care.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible hide-scroll -mx-2 px-2 md:mx-0 md:px-0">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="min-w-[78vw] sm:min-w-[260px] md:min-w-0 snap-start"
            >
              <Link
                href={goal.href}
                className="group relative flex flex-col h-full overflow-hidden rounded-[1.75rem] bg-jj-black shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={goal.image}
                    alt={goal.title}
                    fill
                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="relative flex-1 overflow-hidden px-5 pt-5 pb-24">
                  <Image
                    src={goal.image}
                    alt=""
                    fill
                    sizes="25vw"
                    aria-hidden
                    className="object-cover scale-150 blur-2xl opacity-70"
                  />
                  <div className="absolute inset-0 bg-jj-black/55" />
                  <h3 className="relative font-sans text-xl font-semibold text-white leading-tight">
                    {goal.title}
                  </h3>
                  <p className="relative mt-3 text-sm text-white/70 leading-relaxed line-clamp-2">
                    {goal.line}
                  </p>
                  <span className="absolute bottom-5 left-5 right-5 inline-flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-jj-black translate-y-0 opacity-100 lg:translate-y-20 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 group-hover:bg-jj-gold">
                    Shop
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
