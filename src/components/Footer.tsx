"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
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
            <p className="text-white/60 font-light italic mb-8">
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
            <h4 className="font-serif text-xl mb-6 text-white">Explore</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><Link href="/" className="hover:text-jj-nude transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-jj-nude transition-colors">About Us</Link></li>
              <li><Link href="/journal" className="hover:text-jj-nude transition-colors">Journal</Link></li>
              <li><Link href="/products" className="hover:text-jj-nude transition-colors">Shop</Link></li>
              <li><Link href="/ingredients" className="hover:text-jj-nude transition-colors">Ingredients</Link></li>
              <li><Link href="/testimonials" className="hover:text-jj-nude transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-jj-nude transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Support</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><Link href="/faq" className="hover:text-jj-nude transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-jj-nude transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-jj-nude transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/contact" className="hover:text-jj-nude transition-colors">Wholesale</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Join the Crown Club</h4>
            <p className="text-white/60 font-light mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-4">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-jj-nude transition-colors placeholder:text-white/30"
              />
              <button
                type="submit"
                className="bg-jj-nude hover:bg-jj-gold text-jj-black font-medium py-3 px-6 rounded-sm uppercase tracking-widest text-sm transition-colors self-start mt-2 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/40 text-xs mt-4">Get 10% off your first order when you join.</p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm font-light">
          <p>© {new Date().getFullYear()} JJHairCare. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
