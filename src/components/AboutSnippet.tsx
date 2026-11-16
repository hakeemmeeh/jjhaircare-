import Image from "next/image";
import Link from "next/link";

/** Our Story: statement panel beside the full, uncropped collection banner. */
export default function AboutSnippet() {
  return (
    <section id="about" className="bg-jj-ivory px-0 py-10 md:py-12">
      <div className="w-[100%] grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] overflow-hidden bg-[#26301F]">
        <div className="flex flex-col justify-center px-6 md:px-12 xl:px-20 py-12 lg:py-8">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.3em] text-jj-gold mb-6">Our Story</p>
          <h2 className="font-serif text-[1.875rem] md:text-[2.25rem] lg:text-[1.5rem] xl:text-[1.875rem] text-white leading-snug">
            Built by <span className="italic text-jj-gold">three founders</span> who believe healthy hair starts with simple, plant-based care.
          </h2>
          <Link
            href="/about"
            className="self-start mt-8 py-3 text-[0.875rem] uppercase tracking-[0.2em] text-white border-[1px] border-jj-gold hover:text-jj-gold transition-colors"
          >
            Read our story →
          </Link>
        </div>
        <div className="relative aspect-[1672/941]">
          <Image
            src="/images/about-banner-v3.jpg"
            alt="The JJ Haircare collection: scalp detox mask, hair mist, herbal hair oil, moringa and hibiscus hair butter"
            fill
            sizes="(min-width: 1536px) 940px, (min-width: 1024px) 65vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
