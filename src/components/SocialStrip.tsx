import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { SOCIALS } from "@/data/site-config";

const tiles = [
  "/images/herbal-oil-face-v5.jpg",
  "/images/scalp-detox-face-v4.jpg",
  "/images/hibiscus-hair-butter-card-v2.jpg",
  "/images/moringa-hair-butter-v2.jpg",
  "/images/hair-mist-face-v6.jpg",
  "/images/about-banner-v3.jpg",
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.82a4.85 4.85 0 01-1-.13z" />
    </svg>
  );
}

const socialBtn =
  "inline-flex items-center justify-center gap-2.5 rounded-full border border-jj-black/70 px-7 py-4 min-h-[52px] text-sm font-medium tracking-wide text-jj-black hover:bg-jj-black hover:text-white transition-colors";

/** Home strip: where to find JJ Haircare on social media. The photo row is decorative. */
export default function SocialStrip() {
  return (
    <section aria-labelledby="social-heading" className="bg-gradient-nude pt-14 md:pt-20">
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-3">Follow along</p>
            <h2 id="social-heading" className="font-serif text-3xl md:text-4xl text-jj-black leading-tight">
              Find us on <span className="italic text-jj-olive">Instagram and TikTok</span>
            </h2>
            <p className="mt-4 max-w-xl text-jj-charcoal/80 font-light leading-relaxed">
              Follow JJ Haircare for how-to videos, routines and new arrivals from Nairobi.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className={socialBtn}>
              <Instagram className="w-5 h-5" aria-hidden="true" />
              <span><span className="sr-only">Instagram </span>@jj_haircareke</span>
            </a>
            <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" className={socialBtn}>
              <TikTokIcon className="w-5 h-5" />
              <span><span className="sr-only">TikTok </span>@jj_herbal_haircare</span>
            </a>
            <Link
              href="/contact#order"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-jj-black text-white font-medium px-8 py-4 min-h-[52px] uppercase tracking-wider text-sm hover:bg-jj-olive transition-colors"
            >
              Order now
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <ul aria-hidden="true" className="grid grid-cols-3 md:grid-cols-6">
        {tiles.map((src) => (
          <li key={src} className="relative aspect-square overflow-hidden">
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 768px) 17vw, 34vw"
              className={`object-cover ${src.includes("about-banner") ? "object-right" : ""}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
