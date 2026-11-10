"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { whatsappOrderUrl } from "@/data/site-config";
import Image from "next/image";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.82a4.85 4.85 0 01-1-.13z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-jj-black text-white pt-24 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-jj-black border border-white/10 shadow-sm">
                <Image src="/logo.png" alt="JJHairCare Logo" fill className="object-cover" />
              </div>
              <span className="font-serif text-3xl text-white tracking-wider">
                JJHairCare
              </span>
            </Link>
            <p className="text-white/70 font-light italic mb-8">
              &ldquo;Where Nature Meets Beauty&rdquo;
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jj_haircareke?igsh=MXB1b2t3MGFwYnkxMg==" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-jj-nude hover:text-jj-nude transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@jj_herbal_haircare?_r=1&_t=ZS-94iGVNG2TJo" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-jj-nude hover:text-jj-nude transition-colors cursor-pointer">
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Watch us on YouTube" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-jj-nude hover:text-jj-nude transition-colors cursor-pointer">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-jj-nude hover:text-jj-nude transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-serif text-xl mb-6 text-white">Explore</h2>
            <ul className="space-y-4 text-white/70 font-light">
              <li><Link href="/" className="inline-block py-2 hover:text-jj-nude transition-colors">Home</Link></li>
              <li><Link href="/about" className="inline-block py-2 hover:text-jj-nude transition-colors">About Us</Link></li>
              <li><Link href="/journal" className="inline-block py-2 hover:text-jj-nude transition-colors">Journal</Link></li>
              <li><Link href="/products" className="inline-block py-2 hover:text-jj-nude transition-colors">Shop</Link></li>
              <li><Link href="/testimonials" className="inline-block py-2 hover:text-jj-nude transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="inline-block py-2 hover:text-jj-nude transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h2 className="font-serif text-xl mb-6 text-white">Support</h2>
            <ul className="space-y-4 text-white/70 font-light">
              <li><Link href="/faq" className="inline-block py-2 hover:text-jj-nude transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="inline-block py-2 hover:text-jj-nude transition-colors">Delivery</Link></li>
              <li><Link href="/returns" className="inline-block py-2 hover:text-jj-nude transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/contact" className="inline-block py-2 hover:text-jj-nude transition-colors">Wholesale</Link></li>
            </ul>
          </div>

          {/* Updates via WhatsApp */}
          <div>
            <h2 className="font-serif text-xl mb-6 text-white">Stay in the loop</h2>
            <p className="text-white/70 font-light mb-6">
              Message us on WhatsApp to hear first about new products and offers.
            </p>
            <a
              href={whatsappOrderUrl("Hi JJ Haircare, please add me to your updates.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-jj-nude hover:bg-jj-gold text-jj-black font-medium py-3 px-6 rounded-sm uppercase tracking-widest text-sm transition-colors"
            >
              Join on WhatsApp
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/65 text-sm font-light">
          <p>© {new Date().getFullYear()} JJHairCare. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="inline-block py-2 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="inline-block py-2 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
