"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24 flex-1">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          {/* Hero Section */}
          <div className="mb-16 md:mb-24 flex flex-col gap-6 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-serif text-jj-black"
            >
              Let's <span className="italic text-jj-nude">Talk.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-jj-black/70 text-lg md:text-xl max-w-2xl"
            >
              Whether you have a question about our formulations, need regimen advice, or want to explore wholesale partnerships — we're here.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/70 backdrop-blur-md border border-jj-black/5 rounded-[2rem] p-8 md:p-12 shadow-sm"
            >
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest font-mono text-jj-gold mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-jj-black/20 pb-3 text-jj-black focus:outline-none focus:border-jj-nude transition-colors placeholder:text-jj-black/30"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest font-mono text-jj-gold mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-jj-black/20 pb-3 text-jj-black focus:outline-none focus:border-jj-nude transition-colors placeholder:text-jj-black/30"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm uppercase tracking-widest font-mono text-jj-gold mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-transparent border-b border-jj-black/20 pb-3 text-jj-black focus:outline-none focus:border-jj-nude transition-colors appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Regimen Advice">Regimen Advice</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest font-mono text-jj-gold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-jj-black/20 pb-3 text-jj-black focus:outline-none focus:border-jj-nude transition-colors placeholder:text-jj-black/30 resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-jj-black hover:bg-jj-olive text-white font-medium rounded-full px-8 py-4 uppercase tracking-wider text-sm transition-all text-center w-full md:w-auto self-start"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right Column - Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-between py-4"
            >
              <div className="space-y-12">
                <div>
                  <h3 className="font-serif text-3xl text-jj-black mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <a href="mailto:hello@jjhaircare.com" className="flex items-center gap-4 text-jj-charcoal/80 hover:text-jj-nude transition-colors group">
                      <div className="w-12 h-12 rounded-full border border-jj-black/10 flex items-center justify-center group-hover:border-jj-nude transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-mono text-jj-gold uppercase tracking-widest">Customer Support</p>
                        <p className="text-lg">hello@jjhaircare.com</p>
                      </div>
                    </a>

                    <a href="mailto:wholesale@jjhaircare.com" className="flex items-center gap-4 text-jj-charcoal/80 hover:text-jj-nude transition-colors group">
                      <div className="w-12 h-12 rounded-full border border-jj-black/10 flex items-center justify-center group-hover:border-jj-nude transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-mono text-jj-gold uppercase tracking-widest">Wholesale</p>
                        <p className="text-lg">wholesale@jjhaircare.com</p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 text-jj-charcoal/80">
                      <div className="w-12 h-12 rounded-full border border-jj-black/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-mono text-jj-gold uppercase tracking-widest">Headquarters</p>
                        <p className="text-lg">Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-jj-black mb-4">Business Hours</h3>
                  <p className="text-jj-charcoal/70">Monday – Friday<br/>9:00 AM – 6:00 PM (EAT)</p>
                  <p className="text-jj-charcoal/70 mt-2 italic">We typically respond within 24 hours.</p>
                </div>
              </div>

              {/* FAQ CTA */}
              <div className="mt-16 bg-[#EBE3D5] rounded-3xl p-8 border border-jj-black/5 relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-jj-nude/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="font-serif text-2xl text-jj-black mb-2 relative z-10">Have a common question?</h3>
                <p className="text-jj-charcoal/70 mb-6 relative z-10">Check our FAQ for instant answers on shipping, formulations, and more.</p>
                <Link href="/faq" className="inline-flex items-center gap-2 text-jj-black font-semibold hover:text-jj-olive transition-colors relative z-10">
                  View FAQ <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}