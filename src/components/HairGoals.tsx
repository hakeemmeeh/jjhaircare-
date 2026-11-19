"use client";

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
  return (
    <section className="py-20 md:py-28 px-6 md:px-12" aria-labelledby="hair-goals-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow mb-4">
              Shop by goal
            </p>
            <h2
              id="hair-goals-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-jj-forest leading-[1.1] text-balance"
            >
              Find what your hair <span className="text-jj-accent">needs today.</span>
            </h2>
          </div>
          <p className="text-jj-charcoal/70 max-w-md text-base md:text-lg font-light leading-relaxed">
            Pick a focus — our oils, butters, masks and mists are built for everyday crown care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <Link
                key={goal.title}
                href={goal.href}
                className="group flex h-full flex-col rounded-2xl border border-jj-forest/10 bg-white p-6 hover:-translate-y-1 hover:border-jj-accent/40 hover:shadow-[0_24px_50px_-24px_rgba(24,60,50,0.3)] transition-all duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-jj-accent/12 text-jj-accent ring-1 ring-jj-accent/25 group-hover:bg-jj-forest group-hover:text-jj-accent transition-colors duration-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-sans text-lg font-semibold text-jj-forest leading-tight">
                  {goal.title}
                </h3>
                <p className="mt-2 text-sm text-jj-charcoal/70 leading-relaxed">
                  {goal.line}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-jj-forest group-hover:text-jj-accent transition-colors">
                  Shop
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
