
import Image from "next/image";

export default function JournalFull() {
  return (
    <section className="py-32 bg-gradient-nude relative">
      <div className="container mx-auto px-6 md:px-12 max-w-[80%]">
        <div className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-jj-nude" />
            <p className="text-jj-nude text-[0.875rem] uppercase tracking-wider font-medium">Our Story</p>
            <div className="h-[1px] w-12 bg-jj-nude" />
          </div>
          
          <h1 className="font-serif text-[3.75rem] md:text-[4.5rem] lg:text-8xl text-jj-black leading-tight mb-12">
            It Began in <br className="hidden md:block" />
            <span className="italic text-jj-olive">the Kitchen.</span>
          </h1>
          
          <div className="max-w-[60%] mx-auto aspect-[1672/941] relative rounded-[2px] overflow-hidden border-[1px] border-jj-gold/30 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] mb-16">
            <Image
              src="/images/about-banner-v3.jpg" 
              alt="The JJ Haircare collection" 
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[60%] text-[1.25rem] md:text-[1.5rem] text-jj-charcoal/80 font-light leading-relaxed space-y-8"
        >
          <p className="first-letter:font-serif first-letter:text-[4.5rem] first-letter:font-bold first-letter:text-jj-black first-letter:float-left first-letter:mr-4 first-letter:mt-2">
            Long before the bottles and jars you see today, JJ Haircare was just a collection of raw shea butter, pure oils, and a deep desire for something better.
          </p>
          <p>
            It started with frustration. Walking down store aisles, looking at shelves filled with products that promised moisture but delivered nothing but buildup and breakage. The ingredients lists were full of words we couldn&apos;t pronounce—sulfates, silicones, parabens—things that stripped our natural hair of its life and vitality.
          </p>
          
          <h3 className="font-serif text-[2.25rem] md:text-[3rem] text-jj-black mt-20 mb-8">Taking Matters into Our Own Hands</h3>
          
          <p>
            We realized that if we wanted products that actually nourished our coils, curls, and locs, we had to make them ourselves. We started sourcing ethical, unrefined shea butter from Ghana, cold-pressed Jamaican Black Castor oil, and pure essential oils.
          </p>
          <p>
            Our founder&apos;s kitchen became a laboratory. There were late nights spent melting butter, whisking oils, and testing ratios to find the perfect balance. We weren&apos;t just making hair care; we were crafting food for our crowns.
          </p>

          <blockquote className="my-16 py-8 border-[1px] border-jj-gold/20 text-center px-4 md:px-12">
            <span className="block font-serif text-[1.875rem] md:text-[2.25rem] text-jj-black italic leading-tight">
              &ldquo;We weren&apos;t just making hair care; we were crafting food for our crowns.&rdquo;
            </span>
          </blockquote>

          <h3 className="font-serif text-[2.25rem] md:text-[3rem] text-jj-black mt-20 mb-8">From Friends and Family to the World</h3>
          
          <p>
            At first, the products were just for personal use. But soon, friends started noticing the difference. Hair that had been dry for years was suddenly thriving. Breakage stopped. Shine returned. We started giving away small mason jars of our handcrafted hair butter. Word spread, and soon, those friends were asking for more, and bringing their friends along with them.
          </p>
          <p>
            That was the moment JJ Haircare was truly born. We realized that our community was starving for authentic, luxurious, natural care. We scaled up our operations, moving out of the kitchen, but we never compromised on the process. To this day, our formulations are crafted with that exact same intention and purity.
          </p>
          
          <div className="pt-16 text-center">
            <div className="w-12 h-[1px] bg-jj-black/20 mx-auto mb-8" />
            <p className="font-serif italic text-[1.5rem] text-jj-black">
              Welcome to JJ Haircare. Where nature meets beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
