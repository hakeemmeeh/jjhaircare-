import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Our Story: the full origin — three founders, a Nairobi kitchen,
 * and the plant-based care they built. Replaces the old AboutSnippet
 * + JournalSnippet pair.
 */
export default function OurStory() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* Left: image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-3 border border-jj-accent/30 rounded-sm translate-x-3 translate-y-3 -z-10" />
            <div className="aspect-[1672/941] relative rounded-sm overflow-hidden shadow-[0_30px_60px_-30px_rgba(24,60,50,0.4)]">
              <Image
                src="/images/complete-natural-collection.png"
                alt="The JJ Haircare collection: scalp detox mask, hair mist, herbal hair oil, moringa and hibiscus hair butter"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: story */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-jj-accent" />
              <p className="eyebrow">Our Story</p>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-jj-forest mb-8 leading-[1.1] text-balance">
              It Began in <span className="text-jj-accent">the Kitchen.</span>
            </h2>

            <div className="pl-6 border-l border-jj-accent/40 mb-8 space-y-4">
              <p className="text-lg text-jj-charcoal/75 font-light leading-relaxed">
                Long before the bottles and jars you see today, JJ Haircare was just a collection of raw shea butter, pure oils, and a deep desire for something better.
              </p>
              <p className="text-lg text-jj-charcoal/75 font-light leading-relaxed">
                Three founders, one tiny Nairobi kitchen, and a belief that healthy hair starts with simple, plant-based care. We hand-whipped formulations, searching for the perfect balance of moisture and strength for natural hair.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-jj-forest hover:text-jj-accent transition-colors group text-sm font-medium tracking-[0.06em]"
            >
              <span className="border-b border-jj-forest/40 group-hover:border-jj-accent pb-1 transition-colors">Read the Full Story</span>
              <span className="w-9 h-9 rounded-full border border-jj-forest/20 flex items-center justify-center group-hover:border-jj-accent transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
