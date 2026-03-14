"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    question: "What hair types are your products made for?",
    answer: "All natural hair types — 2A waves to 4C coils, locs, and protective styles. Hair Butter suits thicker textures (3C–4C), Hair Oil works across all types, Hair Mist is a daily refresh for any texture, and Hair Mask is a weekly deep treatment for dry or damaged hair."
  },
  {
    question: "Are your products natural, cruelty-free, and vegan?",
    answer: "100% natural and cruelty-free — always. Every product is free from sulfates, parabens, silicones, and artificial dyes. Hair Mist, Hair Oil, and Hair Mask are fully vegan. Hair Butter contains ethically sourced beeswax, so it is not vegan."
  },
  {
    question: "How do shipping and returns work?",
    answer: "We ship to 40+ countries. Orders process in 1–3 business days, with free shipping on orders over $100 internationally or KES 5,000 domestically. Returns accepted within 30 days on unopened products — email support@jjhaircare.com to start. Damaged items are replaced free, no return needed."
  },
  {
    question: "Do you offer wholesale?",
    answer: "Yes — we work with salons, boutiques, and retailers. Email wholesale@jjhaircare.com for pricing and minimum order details."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="bg-gradient-nude min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-32 flex-1">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl text-jj-black mb-6">Frequently Asked <span className="italic text-jj-nude">Questions</span></h1>
            <p className="text-jj-charcoal/70 font-sans text-lg max-w-2xl mx-auto">
              Find answers about JJHairCare products, ingredients, shipping, returns, and how to build your natural hair care routine.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white/70 backdrop-blur-md border border-jj-black/5 rounded-[2rem] overflow-hidden transition-all duration-300 hover:bg-white/90 hover:shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left px-8 py-6 flex justify-between items-center gap-6"
                  >
                    <h3 className="font-serif text-xl md:text-2xl text-jj-black">{faq.question}</h3>
                    <div className={clsx(
                      "w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center border transition-all duration-300",
                      isOpen ? "bg-jj-nude border-jj-nude text-white rotate-180" : "border-jj-black/10 text-jj-black hover:border-jj-nude"
                    )}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 pt-2 text-jj-charcoal/80 font-sans leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-jj-charcoal/70 mb-6">Still have questions?</p>
            <a href="/contact" className="inline-block bg-jj-black hover:bg-jj-olive text-white font-medium rounded-full px-8 py-3 uppercase tracking-wider text-sm transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}