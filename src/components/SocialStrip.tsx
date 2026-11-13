import Link from "next/link";
import { ArrowRight, Droplets, Heart, Instagram, Lightbulb, Play, PlayCircle } from "lucide-react";
import { SOCIALS } from "@/data/site-config";

const TIKTOK = "https://www.tiktok.com/@jj_herbal_haircare";

/** What we post, each tile opening a real video on our TikTok. */
const tiles = [
  {
    icon: PlayCircle,
    label: "How-to guides",
    text: "A guide on how to use our products.",
    href: `${TIKTOK}/video/7470204098118225157`,
    tone: "bg-[#26301F] text-white",
  },
  {
    icon: Lightbulb,
    label: "Hair care tips",
    text: "Is your hair shedding or breaking? How to tell the difference.",
    href: `${TIKTOK}/video/7699568326892129557`,
    tone: "bg-[#E8D8B8] text-jj-black",
  },
  {
    icon: Droplets,
    label: "Routine advice",
    text: "Why oil is not a moisturiser, and what your hair needs first.",
    href: `${TIKTOK}/video/7705094188991401236`,
    tone: "bg-jj-black text-white",
  },
  {
    icon: Heart,
    label: "Behind the brand",
    text: "Lessons from building JJ Haircare, from our founder.",
    href: `${TIKTOK}/video/7701399169507921172`,
    tone: "bg-white text-jj-black",
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

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map(({ icon: Icon, label, text, href, tone }) => {
          const dark = tone.includes("text-white");
          return (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label}: ${text} Watch on TikTok`}
                className={`group relative flex h-full min-h-[260px] flex-col overflow-hidden p-7 md:p-8 lg:min-h-[340px] ${tone}`}
              >
                {/* hover wash */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 ${
                    dark ? "bg-white/5" : "bg-jj-black/5"
                  }`}
                />

                <span
                  aria-hidden="true"
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full ${dark ? "bg-white/15" : "bg-jj-black/10"}`}
                >
                  <Icon className="h-5 w-5" />
                </span>

                {/* play button: pops in at the centre on hover, always shown on touch screens */}
                <span aria-hidden="true" className="relative flex flex-1 items-center justify-center py-6">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-full shadow-xl transition-all duration-300 ease-out motion-reduce:transition-none lg:h-20 lg:w-20 lg:scale-50 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100 lg:group-focus-visible:scale-100 lg:group-focus-visible:opacity-100 ${
                      dark ? "bg-white text-jj-black" : "bg-jj-black text-white"
                    }`}
                  >
                    <Play className="ml-1 h-7 w-7 fill-current lg:h-8 lg:w-8" />
                  </span>
                </span>

                <span aria-hidden="true" className="relative">
                  <span className="block font-serif text-2xl leading-tight">{label}</span>
                  <span className={`mt-2 block font-light leading-relaxed sm:min-h-[3.25rem] ${dark ? "text-white/80" : "text-jj-charcoal/80"}`}>{text}</span>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
                    Watch on TikTok
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
