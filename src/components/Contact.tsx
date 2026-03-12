"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-32 bg-jj-ivory relative">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-jj-black mb-8">
            Ready to <span className="italic text-jj-olive">Elevate Your Routine?</span>
          </h2>
          <p className="text-jj-charcoal/70 font-light text-lg mb-12 max-w-2xl mx-auto">
            Whether you have a question about our formulations, need regimen advice, or want to explore wholesale partnerships, our team is here for you.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-jj-black hover:bg-jj-nude text-white hover:text-jj-black font-medium px-10 py-5 rounded-sm uppercase tracking-widest text-sm transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-jj-black flex"
          >
            <div className="flex-1 overflow-y-auto">
              <div className="container mx-auto px-6 md:px-12 py-20 min-h-screen flex flex-col relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-6 md:right-12 text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="text-sm uppercase tracking-widest group-hover:text-jj-nude">Close</span>
                  <X className="w-6 h-6 group-hover:text-jj-nude" />
                </button>

                <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col md:flex-row gap-16 md:gap-24 pt-10">
                  <div className="md:w-1/3">
                    <h2 className="font-serif text-4xl text-white mb-10">Get in Touch</h2>
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-jj-nude text-sm uppercase tracking-widest mb-2">Email</h4>
                        <a href="mailto:hello@jjhaircare.com" className="text-white hover:text-jj-nude transition-colors text-lg font-light">
                          hello@jjhaircare.com
                        </a>
                      </div>
                      <div>
                        <h4 className="text-jj-nude text-sm uppercase tracking-widest mb-2">Social</h4>
                        <a href="#" className="text-white hover:text-jj-nude transition-colors text-lg font-light">
                          @jjhaircare
                        </a>
                      </div>
                      <div>
                        <h4 className="text-jj-nude text-sm uppercase tracking-widest mb-2">Phone</h4>
                        <a href="tel:+10000000000" className="text-white hover:text-jj-nude transition-colors text-lg font-light">
                          +1 (800) 123-4567
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Name</label>
                          <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-jj-nude transition-colors" />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Email</label>
                          <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-jj-nude transition-colors" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Phone (Optional)</label>
                          <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-jj-nude transition-colors" />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Inquiry Type</label>
                          <select className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-jj-nude transition-colors appearance-none">
                            <option value="support" className="bg-jj-black">Customer Support</option>
                            <option value="wholesale" className="bg-jj-black">Wholesale Inquiry</option>
                            <option value="collab" className="bg-jj-black">Collaboration</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">Message</label>
                        <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-jj-nude transition-colors resize-none"></textarea>
                      </div>

                      <button type="submit" className="bg-jj-nude hover:bg-jj-gold text-jj-black font-medium px-10 py-4 rounded-sm uppercase tracking-widest text-sm transition-colors w-full md:w-auto">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
