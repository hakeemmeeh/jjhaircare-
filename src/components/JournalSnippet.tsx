"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import ImageReveal from "@/components/ImageReveal";

export default function JournalSnippet() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="py-32 bg-jj-ivory relative overflow-hidden">
      {/* Decorative accent elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-jj-sand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 relative overflow-hidden md:overflow-visible px-4 md:px-0"
          >
            {/* Elegant framing around the image */}
            <div className="absolute -inset-4 border border-jj-gold/30 rounded-sm translate-x-4 translate-y-4 -z-10" />

            <div className="aspect-[4/5] relative rounded-sm overflow-hidden shadow-2xl group w-full h-full block">
              <ImageReveal maskColor="bg-jj-ivory" className="absolute inset-0">
                <motion.div
                  style={prefersReducedMotion ? {} : { y: imageY, scale: 1.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop"
                    alt="Mixing natural ingredients"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[2s] ease-out"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-jj-black/5 mix-blend-overlay pointer-events-none" />
              </ImageReveal>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 max-w-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-jj-nude" />
              <h4 className="text-jj-nude text-sm uppercase tracking-[0.2em] font-medium">The Journal</h4>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-jj-black mb-8 leading-[1.1]">
              It Began in <br />
              <span className="italic text-jj-olive">the Kitchen.</span>
            </h2>

            <div className="pl-6 border-l border-jj-gold/30 mb-10">
              <p className="text-lg text-jj-charcoal/80 font-light leading-relaxed mb-6">
                Long before the luxurious bottles and global shipping, JJHairCare was just a collection of raw shea butter, pure oils, and a deep desire for something better.
              </p>
              <p className="text-lg text-jj-charcoal/80 font-light leading-relaxed">
                We started by hand-whipping formulations in a tiny kitchen, searching for the perfect balance of moisture and strength for natural hair.
              </p>
            </div>

            <motion.div
              whileHover="hover"
              className="inline-block mt-4"
            >
              <Link
                href="/journal"
                className="inline-flex items-center gap-4 text-jj-black hover:text-jj-nude transition-colors group uppercase tracking-widest text-sm font-medium cursor-pointer"
              >
                <span className="border-b border-jj-black group-hover:border-jj-nude pb-1 transition-colors">Read the Full Story</span>
                <motion.div 
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  className="w-10 h-10 rounded-full border border-jj-black/20 flex items-center justify-center group-hover:border-jj-nude transition-colors"
                >
                  <motion.div
                    variants={{
                      hover: { x: [0, 5, 0], transition: { repeat: Infinity, duration: 1 } }
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
