import Image from "next/image";
import { Instagram } from "lucide-react";
import { SOCIALS } from "@/data/site-config";

const tiles = [
  { src: "/images/herbal-oil-face-v5.jpg", alt: "Herbal Hair Oil" },
  { src: "/images/scalp-detox-face-v4.jpg", alt: "Scalp Detox Mask" },
  { src: "/images/hibiscus-hair-butter-card-v2.jpg", alt: "Hibiscus Hair Butter" },
  { src: "/images/moringa-hair-butter-v2.jpg", alt: "Moringa Hair Butter" },
  { src: "/images/hair-mist-face-v6.jpg", alt: "Hair Mist" },
  { src: "/images/herbal-oil-pour-v5.jpg", alt: "Herbal Hair Oil being poured" },
];

/** Home strip: follow JJ Haircare on Instagram and TikTok. Tiles link to the profile. */
export default function SocialStrip() {
  return (
    <section aria-labelledby="social-heading" className="bg-jj-ivory py-14 md:py-20">
      <div className="px-6 md:px-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-3">Follow along</p>
          <h2 id="social-heading" className="font-serif text-3xl md:text-4xl text-jj-black leading-tight">
            See JJ Haircare <span className="italic text-jj-olive">on your feed</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-jj-black/70 px-5 py-3 min-h-[48px] text-sm uppercase tracking-wider text-jj-black hover:bg-jj-black hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" aria-hidden="true" /> @jj_haircareke
          </a>
          <a
            href={SOCIALS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-jj-black/70 px-5 py-3 min-h-[48px] text-sm uppercase tracking-wider text-jj-black hover:bg-jj-black hover:text-white transition-colors"
          >
            TikTok @jj_herbal_haircare
          </a>
        </div>
      </div>
      </div>

      <ul className="grid grid-cols-3 md:grid-cols-6">
        {tiles.map((t) => (
          <li key={t.src} className="relative aspect-square overflow-hidden group">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.alt} — open JJ Haircare on Instagram`}
              className="absolute inset-0"
            >
              <Image
                src={t.src}
                alt=""
                fill
                sizes="(min-width: 768px) 17vw, 34vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-jj-black/0 group-hover:bg-jj-black/35 transition-colors" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
