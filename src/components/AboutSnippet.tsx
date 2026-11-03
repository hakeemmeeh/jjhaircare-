import Image from "next/image";
import Link from "next/link";

/** Our Story: statement panel and collection banner side by side. */
export default function AboutSnippet() {
  return (
    <section id="about" className="bg-jj-ivory px-6 md:px-12 py-20 md:py-28">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl">
        <div className="bg-[#26301F] flex flex-col justify-center px-8 md:px-14 py-14 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-6">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Natural hair care, <span className="italic text-jj-gold">made in Nairobi</span> — built by three founders who believe healthy hair starts with simple, plant-based care.
          </h2>
          <Link
            href="/about"
            className="self-start mt-8 py-3 text-sm uppercase tracking-[0.2em] text-white border-b border-jj-gold hover:text-jj-gold transition-colors"
          >
            Read our story →
          </Link>
        </div>
        <div className="relative aspect-[1672/941] md:aspect-auto md:min-h-[460px]">
          <Image
            src="/images/about-banner-v3.jpg"
            alt="The JJ Haircare collection: scalp detox mask, hair mist, herbal hair oil, moringa and hibiscus hair butter"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
