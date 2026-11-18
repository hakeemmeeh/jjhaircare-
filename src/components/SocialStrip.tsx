import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Droplets, Heart, Instagram, Lightbulb, Play, PlayCircle } from "lucide-react";
import { SOCIALS } from "@/data/site-config";

const TIKTOK = SOCIALS.tiktok;

/** What we post, each tile opening a real video on our TikTok. */
const tiles = [
  {
    icon: PlayCircle,
    label: "How to",
    text: "Get more from your hair care essentials.",
    href: `${TIKTOK}/video/7470204098118225157`,
    image: "/images/scalp-detox-studio.png",
    alt: "JJ Haircare Scalp Detox Mask on a mint green marble display",
  },
  {
    icon: Lightbulb,
    label: "Hair tip",
    text: "Shedding or breakage? Learn the difference.",
    href: `${TIKTOK}/video/7699568326892129557`,
    image: "/images/herbal-hair-oil-marble.png",
    alt: "JJ Haircare Herbal Hair Oil with botanical leaves",
  },
  {
    icon: Droplets,
    label: "Routine",
    text: "Why oil isn’t a moisturiser, and what comes first.",
    href: `${TIKTOK}/video/7705094188991401236`,
    image: "/images/hair-mist-mint-ad.png",
    alt: "JJ Haircare Hair Mist on a mint green marble display",
  },
  {
    icon: Heart,
    label: "Our story",
    text: "The idea and care behind JJ Haircare.",
    href: `${TIKTOK}/video/7701399169507921172`,
    image: "/images/herbal-oil-pour-v5.jpg",
    alt: "JJ Haircare founder sharing the herbal hair oil",
  },
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

/** Home strip: where to find JJ Haircare on social media, with four real videos to start with. */
export default function SocialStrip() {
  return (
    <section aria-labelledby="social-heading" className="bg-gradient-nude pt-14 md:pt-20">
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-jj-gold mb-3">Follow along</p>
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

      <ul className="hide-scroll -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:mx-0 sm:gap-5 sm:px-0 lg:gap-5">
        {tiles.map(({ icon: Icon, label, text, href, image, alt }) => {
          return (
            <li key={label} className="w-[82vw] max-w-[360px] shrink-0 snap-start sm:w-[48vw] lg:w-0 lg:min-w-0 lg:flex-1">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label}: ${text} Watch on TikTok`}
                className="group relative flex h-[390px] min-h-[360px] flex-col overflow-hidden rounded-[1.25rem] bg-jj-olive text-white shadow-[0_14px_35px_rgba(28,31,22,0.13)] transition-transform duration-300 hover:-translate-y-1 sm:h-[420px]"
              >
                <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 25vw, 82vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/20" />

                <span className="relative flex items-center justify-between p-5">
                  <span className="rounded-full border border-white/40 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">{label}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"><Icon className="h-4 w-4" /></span>
                </span>

                <span aria-hidden="true" className="relative mt-auto p-5 sm:p-6">
                  <span className="block max-w-[18rem] font-serif text-2xl leading-tight sm:text-[1.7rem]">{text}</span>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                    Watch guide <Play className="h-4 w-4 fill-current" />
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
