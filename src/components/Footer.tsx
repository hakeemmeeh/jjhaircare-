"use client";

import { Facebook, Instagram, Leaf, Pin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
              "Where Nature Meets Beauty"
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-jj-nude hover:text-jj-nude transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-jj-nude hover:text-jj-nude transition-colors">
                <Twitter className="w-4 h-4" /> {/* TikTok icon is not in base lucide, using Twitter as placeholder */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-jj-nude hover:text-jj-nude transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-jj-nude hover:text-jj-nude transition-colors">
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
              <li><a href="#" className="hover:text-jj-nude transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-jj-nude transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-jj-nude transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-jj-nude transition-colors">Wholesale</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-white">Join the Crown Club</h4>
            <p className="text-white/60 font-light mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-jj-nude transition-colors placeholder:text-white/30"
              />
              <button
                type="submit"
                className="bg-jj-nude hover:bg-jj-gold text-jj-black font-medium py-3 px-6 rounded-sm uppercase tracking-widest text-sm transition-colors self-start mt-2"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm font-light">
          <p>© {new Date().getFullYear()} JJHairCare. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
