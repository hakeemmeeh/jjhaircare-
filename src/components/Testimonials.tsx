"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SOCIALS } from "@/data/site-config";

const channels = [
  {
    name: "TikTok",
    handle: "@jj_herbal_haircare",
    blurb: "Watch how to use each product and see real hair journeys.",
    href: SOCIALS.tiktok,
  },
  {
    name: "Instagram",
    handle: "@jj_haircareke",
    blurb: "Customer results, new arrivals and behind-the-scenes from Nairobi.",
    href: SOCIALS.instagram,
  },
];

export default function Testimonials({ asPage = false }: { asPage?: boolean }) {
  const Heading = asPage ? motion.h1 : motion.h2;
  return (
    <section id="testimonials" className="py-32 bg-gradient-nude relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 flex flex-col items-center">
          <p className="text-xs tracking-[3.5px] uppercase text-jj-gold mb-2 text-center font-serif">
            Real Results
          </p>
          <Heading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-medium text-jj-charcoal mb-4 text-center"
          >
            See It On Real Hair
          </Heading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-jj-charcoal/70 text-center max-w-lg"
          >
            Our community shares their results every day. Follow along and see for yourself.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {channels.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group bg-white/70 backdrop-blur-md border border-jj-black/5 rounded-[2rem] p-8 md:p-10 hover:bg-white hover:-translate-y-2 hover:shadow-md transition-all duration-500 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-3xl text-jj-black">{c.name}</h3>
                <ArrowUpRight className="w-6 h-6 text-jj-gold group-hover:rotate-12 transition-transform" />
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-jj-gold">{c.handle}</p>
              <p className="text-jj-charcoal/70 font-light">{c.blurb}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
