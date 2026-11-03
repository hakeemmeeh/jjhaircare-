import Image from "next/image";
import Link from "next/link";

/** Our Story: big statement band, with the collection banner overlapping it below. */
export default function AboutSnippet() {
  return (
    <section id="about" className="bg-jj-ivory pb-20 md:pb-28">
      <div className="bg-[#26301F] px-6 md:px-12 pt-20 md:pt-28 pb-40 md:pb-56 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-6">Our Story</p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto">
          Natural hair care, <span className="italic text-jj-gold">made in Nairobi</span> — built by three founders who believe healthy hair starts with simple, plant-based care.
        </h2>
        <Link
          href="/about"
          className="inline-block mt-10 text-sm uppercase tracking-[0.2em] text-white border-b border-jj-gold pb-1 hover:text-jj-gold transition-colors"
        >
          Read our story →
        </Link>
      </div>

      <div className="px-6 md:px-12 -mt-24 md:-mt-40">
        <div className="relative mx-auto max-w-6xl aspect-[1672/941] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/images/about-banner-v3.jpg"
            alt="The JJ Haircare collection: scalp detox mask, hair mist, herbal hair oil, moringa and hibiscus hair butter"
            fill
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
