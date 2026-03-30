"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const goals = [
  {
    title: "Deep hydration",
    line: "For thirsty strands that need lasting moisture.",
    href: "/products?goal=hydration",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Growth & strength",
    line: "Edges, length, and resilience without heaviness.",
    href: "/products?goal=growth",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Scalp balance",
    line: "Refresh the root—clarity without stripping.",
    href: "/products?goal=scalp",
    image:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Shine & definition",
    line: "Frizz down, brilliance up—lightweight finish.",
    href: "/products?goal=shine",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
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
                scroll={false}
                className="group flex flex-col h-full rounded-[1.25rem] border border-jj-black/10 bg-white/80 overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md hover:border-jj-gold/30 cursor-pointer"
              >
                <div className="relative aspect-[4/3] bg-[#EBE3D5]">
                  <Image
                    src={goal.image}
                    alt={goal.title}
                    fill
                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-serif text-xl md:text-2xl text-jj-black group-hover:text-jj-olive transition-colors">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-sm text-jj-charcoal/75 leading-relaxed flex-1">
                    {goal.line}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-jj-black group-hover:gap-2 transition-all">
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
