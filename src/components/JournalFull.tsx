
export default function JournalFull() {
  return (
    <section className="py-32 bg-gradient-nude relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-jj-nude" />
            <p className="text-jj-nude text-sm uppercase tracking-[0.2em] font-medium">Our Story</p>
            <div className="h-[1px] w-12 bg-jj-nude" />
          </div>
          
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-jj-black leading-tight mb-12">
            It Began in <br className="hidden md:block" />
            <span className="italic text-jj-olive">the Kitchen.</span>
          </h1>
          
          <div className="max-w-sm mx-auto aspect-[1199/1312] relative rounded-sm overflow-hidden border border-jj-gold/30 shadow-lg mb-16">
            <img 
              src="/images/scalp-detox-mask.jpg" 
              alt="JJ Haircare Scalp Detox Mask" 
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-xl md:text-2xl text-jj-charcoal/80 font-light leading-relaxed space-y-8"
        >
          <p className="first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:text-jj-black first-letter:float-left first-letter:mr-4 first-letter:mt-2">
            Long before the luxurious bottles and global shipping, JJ Haircare was just a collection of raw shea butter, pure oils, and a deep desire for something better. 
          </p>
          <p>
            It started with frustration. Walking down store aisles, looking at shelves filled with products that promised moisture but delivered nothing but buildup and breakage. The ingredients lists were full of words we couldn't pronounce—sulfates, silicones, parabens—things that stripped our natural hair of its life and vitality.
          </p>
          
          <h3 className="font-serif text-4xl md:text-5xl text-jj-black mt-20 mb-8">Taking Matters into Our Own Hands</h3>
          
          <p>
            We realized that if we wanted products that actually nourished our coils, curls, and locs, we had to make them ourselves. We started sourcing ethical, unrefined shea butter from Ghana, cold-pressed Jamaican Black Castor oil, and pure essential oils.
          </p>
          <p>
            Our founder's kitchen became a laboratory. There were late nights spent melting butter, whisking oils, and testing ratios to find the perfect balance. We weren't just making hair care; we were crafting food for our crowns. 
          </p>

          <blockquote className="my-16 py-8 border-y border-jj-gold/20 text-center px-4 md:px-12">
            <span className="block font-serif text-3xl md:text-4xl text-jj-black italic leading-tight">
              "We weren't just making hair care; we were crafting food for our crowns."
            </span>
          </blockquote>

          <h3 className="font-serif text-4xl md:text-5xl text-jj-black mt-20 mb-8">From Friends and Family to the World</h3>
          
          <p>
            At first, the products were just for personal use. But soon, friends started noticing the difference. Hair that had been dry for years was suddenly thriving. Breakage stopped. Shine returned. We started giving away small mason jars of our handcrafted hair butter. Word spread, and soon, those friends were asking for more, and bringing their friends along with them.
          </p>
          <p>
            That was the moment JJ Haircare was truly born. We realized that our community was starving for authentic, luxurious, natural care. We scaled up our operations, moving out of the kitchen, but we never compromised on the process. To this day, our formulations are crafted with that exact same intention and purity.
          </p>
          
          <div className="pt-16 text-center">
            <div className="w-12 h-[1px] bg-jj-black/20 mx-auto mb-8" />
            <p className="font-serif italic text-2xl text-jj-black">
              Welcome to JJ Haircare. Where nature meets beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}