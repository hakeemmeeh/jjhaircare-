import Image from "next/image";
import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section id="about" className="pt-28 pb-24 bg-jj-ivory">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center max-w-6xl">
        <div className="relative aspect-[1672/941] rounded-2xl overflow-hidden">
          <Image
            src="/images/collection-hero.jpg"
            alt="The JJ Haircare collection"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-jj-gold mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-5xl text-jj-black leading-tight mb-6">
            Rooted in Nature. <span className="italic text-jj-olive">Made in Nairobi.</span>
          </h2>
          <p className="text-jj-charcoal/80 font-light leading-relaxed text-lg mb-4">
            JJ Haircare is a natural hair care brand built by three founders who believe healthy hair starts with simple, plant-based care. From our herbal oil to our butters, mask and mist, every product is made to nourish your scalp and strands.
          </p>
          <p className="text-jj-charcoal/80 font-light leading-relaxed text-lg mb-8">
            Where nature meets beauty — and where you can order straight on WhatsApp.
          </p>
          <Link
            href="/about"
            className="inline-block bg-jj-black text-white text-sm uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-jj-olive transition-colors"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
}
