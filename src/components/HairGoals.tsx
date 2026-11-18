"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Droplet, Sparkles, Sprout, Wind } from "lucide-react";

const goals = [
  {
    title: "Deep hydration",
    line: "For thirsty strands that need lasting moisture.",
    href: "/products/hibiscus-hair-butter",
    icon: Droplet,
  },
  {
    title: "Growth & strength",
    line: "Edges, length, and resilience without heaviness.",
    href: "/products/herbal-hair-oil",
    icon: Sprout,
  },
  {
    title: "Scalp balance",
    line: "Refresh the root—clarity without stripping.",
    href: "/products/scalp-detox-mask",
    icon: Wind,
  },
  {
    title: "Shine & definition",
    line: "Frizz down, brilliance up—lightweight finish.",
    href: "/products/hair-mist",
    icon: Sparkles,
  },
];

export default function HairGoals() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-14 md:py-28 px-6 md:px-12" aria-labelledby="hair-goals-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <div>
            <p className="text-xs uppercase tracking-wider text-jj-black/50 mb-3">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
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
              >
                <Link
                  href={goal.href}
                  className="group flex h-full flex-col rounded-2xl border border-jj-black/10 bg-white/60 p-6 hover:border-jj-black/30 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-jj-ivory text-jj-olive group-hover:bg-jj-black group-hover:text-jj-gold transition-colors duration-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-sans text-lg font-semibold text-jj-black leading-tight">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-sm text-jj-charcoal/70 leading-relaxed">
                    {goal.line}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-jj-black group-hover:text-jj-olive transition-colors">
                    Shop
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
