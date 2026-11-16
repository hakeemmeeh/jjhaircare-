"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import OrderWizard from "@/components/OrderWizard";
import { PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/data/site-config";

export default function ContactPage() {
  return (
    <main className="bg-jj-ivory min-h-[100vw] flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24 flex-1">
        <div className="container mx-auto px-6 md:px-12 max-w-[100%]">
          
          {/* Hero Section */}
          <div className="mb-16 md:mb-24 flex flex-col gap-6 text-left">
            <h1 className="text-[3rem] md:text-[4.5rem] font-serif text-jj-black"
            >
              Let&apos;s <span className="italic text-jj-nude">Talk.</span>
            </h1>
            <p className="font-sans text-jj-black/70 text-[1.125rem] md:text-[1.25rem] max-w-[53%]"
            >
              Order in a few taps, ask about a product or talk wholesale. We reply on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Column - Contact Form */}
            <div id="order" className="scroll-mt-28 bg-white/70 backdrop-blur-md border-[1px] border-jj-black/5 rounded-[32px] p-6 md:p-12 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
            >
              <OrderWizard />
            </div>

            {/* Right Column - Contact Details */}
            <div className="flex flex-col justify-between py-4"
            >
              <div className="space-y-12">
                <div>
                  <h3 className="font-serif text-[1.875rem] text-jj-black mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <a href="mailto:jjherbal744@gmail.com" className="flex items-center gap-4 text-jj-charcoal/80 hover:text-jj-nude transition-colors group">
                      <div className="w-12 h-12 rounded-[9999px] border-[1px] border-jj-black/10 flex items-center justify-center group-hover:border-jj-nude transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[0.875rem] font-mono text-jj-gold uppercase tracking-widest">Support & Wholesale</p>
                        <p className="text-[1.125rem]">jjherbal744@gmail.com</p>
                      </div>
                    </a>

                    
                    
                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-4 text-jj-charcoal/80 hover:text-jj-nude transition-colors group">
                      <div className="w-12 h-12 rounded-[9999px] border-[1px] border-jj-black/10 flex items-center justify-center group-hover:border-jj-nude transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[0.875rem] font-mono text-jj-gold uppercase tracking-widest">Call or WhatsApp</p>
                        <p className="text-[1.125rem]">{PHONE_DISPLAY}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 text-jj-charcoal/80">
                      <div className="w-12 h-12 rounded-[9999px] border-[1px] border-jj-black/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[0.875rem] font-mono text-jj-gold uppercase tracking-widest">Headquarters</p>
                        <p className="text-[1.125rem]">Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-[1.5rem] text-jj-black mb-4">Business Hours</h3>
                  <p className="text-jj-charcoal/70">Monday – Friday<br/>9:00 AM – 6:00 PM (EAT)</p>
                  <p className="text-jj-charcoal/70 mt-2 italic">We typically respond within 24 hours.</p>
                </div>
              </div>

              {/* FAQ CTA */}
              <div className="mt-16 bg-[#EBE3D5] rounded-[24px] p-8 border-[1px] border-jj-black/5 relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-jj-nude/20 rounded-[9999px] blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="font-serif text-[1.5rem] text-jj-black mb-2 relative z-10">Have a common question?</h3>
                <p className="text-jj-charcoal/70 mb-6 relative z-10">Check our FAQ for instant answers on shipping, formulations, and more.</p>
                <Link href="/faq" className="inline-flex items-center gap-2 text-jj-black font-semibold hover:text-jj-olive transition-colors relative z-10">
                  View FAQ <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
