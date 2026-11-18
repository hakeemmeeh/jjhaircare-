import Link from "next/link";
import { ArrowRight, Headphones, Instagram, Play } from "lucide-react";
import { SOCIALS } from "@/data/site-config";

const TIKTOK = SOCIALS.tiktok;

/** What we post, each tile opening a real video on our TikTok. */
const tiles = [
  {
    label: "How-to guides",
    text: "A guide on how to use our products.",
    href: `${TIKTOK}/video/7470204098118225157`,
    tone: "bg-[#e4efe6]",
  },
  {
    label: "Hair care tips",
    text: "Is your hair shedding or breaking? How to tell the difference.",
    href: `${TIKTOK}/video/7699568326892129557`,
    tone: "bg-[#f0e9dc]",
  },
  {
    label: "Routine advice",
    text: "Why oil is not a moisturiser, and what your hair needs first.",
    href: `${TIKTOK}/video/7705094188991401236`,
    tone: "bg-[#dcebe0]",
  },
  {
    label: "Behind the brand",
    text: "Lessons from building JJ Haircare, from our founder.",
    href: `${TIKTOK}/video/7701399169507921172`,
    tone: "bg-[#ebe9df]",
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
    <section aria-labelledby="social-heading" className="bg-gradient-nude py-12 md:py-20">
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

      <div className="px-6 md:px-12">
        <ul className="hide-scroll -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-5 sm:mx-0 sm:gap-5 sm:px-0 lg:mx-auto lg:max-w-6xl lg:gap-4">
          {tiles.map(({ label, text, href, tone }) => {
            return (
              <li key={label} className="flex w-[min(78vw,18rem)] shrink-0 snap-start sm:w-[42vw] lg:w-0 lg:min-w-0 lg:flex-1">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}: ${text} Watch on TikTok`}
                  className={`group relative flex min-h-[190px] h-full flex-col overflow-hidden rounded-2xl border border-jj-olive/15 p-5 text-jj-black shadow-[0_8px_24px_rgba(28,31,22,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-jj-olive/35 sm:min-h-[205px] sm:p-6 ${tone}`}
                >
                  <span aria-hidden="true" className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e5efe6] text-jj-olive"><Headphones className="h-4 w-4" /></span>
                  <span aria-hidden="true" className="font-serif text-xl leading-tight sm:text-2xl">{label}</span>
                  <span aria-hidden="true" className="mt-2 text-sm leading-relaxed text-jj-charcoal/65">{text}</span>
                  <span aria-hidden="true" className="mt-auto inline-flex items-center gap-2 pt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-jj-olive">Watch on TikTok <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 flex h-10 w-10 scale-75 items-center justify-center rounded-full bg-jj-olive text-white opacity-0 shadow-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 motion-reduce:transition-none max-lg:scale-100 max-lg:opacity-100"><Play className="ml-0.5 h-4 w-4 fill-current" /></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
