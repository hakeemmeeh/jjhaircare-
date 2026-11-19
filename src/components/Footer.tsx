import { Instagram } from "lucide-react";
import Link from "next/link";
import { whatsappOrderUrl, SOCIALS } from "@/data/site-config";
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
    <footer className="bg-jj-forest text-jj-paper pt-16 lg:pt-24 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-16 mb-16 lg:mb-20">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-jj-forest-soft border border-jj-paper/15 shadow-sm">
                <Image src="/logo.png" alt="JJ Haircare Logo" fill className="object-cover" />
              </div>
              <span className="font-serif text-3xl text-jj-paper tracking-wider">
                JJ Haircare
              </span>
            </Link>
            <p className="text-jj-paper/60 font-light mb-8">
              Natural hair care, made in Nairobi.
            </p>
            <div className="flex gap-4">
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full border border-jj-paper/20 flex items-center justify-center hover:border-jj-accent hover:text-jj-accent transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok" className="w-10 h-10 rounded-full border border-jj-paper/20 flex items-center justify-center hover:border-jj-accent hover:text-jj-accent transition-colors cursor-pointer">
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-serif text-xl mb-6 text-jj-paper">Explore</h2>
            <ul className="space-y-4 text-jj-paper/70 font-light">
              <li><Link href="/" className="inline-block py-2 hover:text-jj-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="inline-block py-2 hover:text-jj-accent transition-colors">About Us</Link></li>
              <li><Link href="/journal" className="inline-block py-2 hover:text-jj-accent transition-colors">Journal</Link></li>
              <li><Link href="/products" className="inline-block py-2 hover:text-jj-accent transition-colors">Shop</Link></li>
              <li><Link href="/testimonials" className="inline-block py-2 hover:text-jj-accent transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="inline-block py-2 hover:text-jj-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h2 className="font-serif text-xl mb-6 text-jj-paper">Support</h2>
            <ul className="space-y-4 text-jj-paper/70 font-light">
              <li><Link href="/faq" className="inline-block py-2 hover:text-jj-accent transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="inline-block py-2 hover:text-jj-accent transition-colors">Delivery</Link></li>
              <li><Link href="/returns" className="inline-block py-2 hover:text-jj-accent transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/contact" className="inline-block py-2 hover:text-jj-accent transition-colors">Wholesale</Link></li>
            </ul>
          </div>

          {/* Updates via WhatsApp */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="font-serif text-xl mb-6 text-jj-paper">Stay in the loop</h2>
            <p className="text-jj-paper/70 font-light mb-6">
              Message us on WhatsApp to hear first about new products and offers.
            </p>
            <a
              href={whatsappOrderUrl("Hi JJ Haircare, please add me to your updates.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-jj-accent hover:bg-[#d0a24a] text-jj-forest font-medium py-4 px-8 rounded-full text-sm tracking-[0.08em] transition-colors"
            >
              Join on WhatsApp
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-jj-paper/10 text-jj-paper/60 text-sm font-light">
          <p>© {new Date().getFullYear()} JJ Haircare. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="inline-block py-2 hover:text-jj-paper transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="inline-block py-2 hover:text-jj-paper transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}