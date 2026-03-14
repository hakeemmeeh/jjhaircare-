import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Re-using the same products array for lookup (in a real app, this would be a DB fetch)
const products = [
  {
    name: "JJHairCare Hair Mist",
    slug: "hair-mist",
    tagline: "Refreshing botanical mist for daily hydration and shine.",
    description: "Your everyday hydration hero. A feather-light botanical mist that refreshes curls, adds instant shine, and keeps hair moisturised between wash days. Spray and go — no buildup, no residue, just soft, happy hair.",
    price: "$24",
    size: "150ml / 5 fl oz",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Instant moisture boost any time of day",
      "Revives and refreshes second and third day curls",
      "Lightweight formula — zero buildup or greasiness",
      "Smells incredible (rose, lavender, and citrus blend)"
    ],
    ingredients: "Distilled Water, Aloe Vera Juice, Rose Water, Vegetable Glycerin, Jojoba Oil, Lavender Essential Oil, Sweet Orange Essential Oil, Vitamin B5",
    howToUse: "1. Shake well before each use\n2. Hold 6-8 inches from hair and mist evenly\n3. Scrunch curls gently to reactivate definition\n4. Use daily or as needed. Works on dry or damp hair.",
    hairTypes: "All types — 2A to 4C, locs, braids, and protective styles"
  },
  {
    name: "JJHairCare Hair Mask",
    slug: "hair-mask",
    tagline: "Intensive restorative treatment for deep nourishment.",
    description: "A weekly deep conditioning treatment that reverses damage, restores elasticity, and delivers intense hydration to over-processed, dry, or heat-damaged hair. Leave it on, let it work — your curls will thank you.",
    price: "$35",
    size: "250g / 8.8 oz",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Reverses damage from heat, colour, and chemical processing",
      "Restores elasticity and reduces breakage by up to 70%",
      "Deeply penetrates the hair shaft for lasting moisture",
      "Leaves hair silky, manageable, and defined"
    ],
    ingredients: "Shea Butter, Avocado Oil, Baobab Oil, Honey, Aloe Vera Juice, Hydrolyzed Wheat Protein, Rosemary Extract, Vitamin E",
    howToUse: "1. After shampooing, apply generously to damp hair from roots to ends\n2. Cover with a plastic cap or warm towel\n3. Leave on for 20-30 minutes (or overnight for extra repair)\n4. Rinse thoroughly with cool water. Use once a week.",
    hairTypes: "All types — especially damaged, colour-treated, or heat-styled hair"
  },
  {
    name: "JJHairCare Hair Oil",
    slug: "hair-oil",
    tagline: "Nourishing blend of natural oils for scalp and strands.",
    description: "Our signature Hair Oil is a lightweight yet deeply nourishing blend designed to stimulate the scalp, reduce breakage, and restore natural shine. Cold-pressed and handcrafted in small batches to preserve maximum potency.",
    price: "$38",
    size: "100ml / 3.4 fl oz",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Stimulates scalp circulation and promotes healthy growth",
      "Reduces breakage and strengthens strands from root to tip",
      "Adds brilliant shine without heaviness or greasiness",
      "Soothes dry, itchy scalp"
    ],
    ingredients: "Jamaican Black Castor Oil, Argan Oil, Jojoba Oil, Sweet Almond Oil, Tea Tree Essential Oil, Rosemary Essential Oil, Vitamin E",
    howToUse: "1. Apply 3-5 drops to fingertips\n2. Massage into scalp in circular motions for 2-3 minutes\n3. Work remaining oil through mid-lengths and ends\n4. Use 2-3 times per week. Can be applied to damp or dry hair.",
    hairTypes: "All types — 2A to 4C, locs, and protective styles"
  },
  {
    name: "JJHairCare Hair Butter",
    slug: "hair-butter",
    tagline: "Rich, creamy moisture sealant for lasting softness.",
    description: "A thick, whipped butter that seals moisture deep into every strand. Formulated with unrefined shea butter and beeswax to provide long-lasting hydration and definition, especially for thicker textures that need extra love.",
    price: "$32",
    size: "200g / 7 oz",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Seals in moisture for up to 3 days between wash days",
      "Defines curls and coils without crunchiness",
      "Protects edges and ends from dryness and breakage",
      "Rich, creamy texture melts on contact"
    ],
    ingredients: "Unrefined Shea Butter, Mango Butter, Beeswax, Coconut Oil, Jamaican Black Castor Oil, Lavender Essential Oil, Vitamin E",
    howToUse: "1. Scoop a small amount and warm between palms\n2. Apply to freshly washed, damp hair section by section\n3. Use the LOC or LCO method — apply after your leave-in and oil\n4. Style as desired. Reapply to dry areas between wash days.",
    hairTypes: "Best for 3B–4C curls, coils, and locs"
  },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'JJHairCare',
    },
    offers: {
      '@type': 'Offer',
      url: `https://jjhaircare.vercel.app/products/${product.slug}`,
      priceCurrency: 'USD',
      price: product.price.replace('$', ''),
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  };

  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <div className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            
            {/* Left: Product Image */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden bg-jj-black/5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="w-full lg:w-1/2 lg:py-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-jj-nude" />
                <h4 className="text-jj-nude text-sm uppercase tracking-[0.2em] font-medium">Shop The Collection</h4>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl text-jj-black mb-2">{product.name}</h1>
              <p className="text-xl md:text-2xl text-jj-olive font-medium mb-2">{product.price}</p>
              <p className="text-sm font-mono text-jj-gold uppercase tracking-widest mb-8">{product.size}</p>
              
              <h3 className="text-xl font-serif text-jj-black mb-4">{product.tagline}</h3>
              <p className="text-lg text-jj-charcoal/80 font-light leading-relaxed mb-10">
                {product.description}
              </p>

              <button className="w-full md:w-auto bg-jj-black hover:bg-jj-nude text-white hover:text-jj-black font-medium px-12 py-5 rounded-sm uppercase tracking-widest text-sm transition-all duration-300 mb-16 shadow-lg hover:shadow-xl">
                Add to Cart — {product.price}
              </button>

              {/* Accordion / Details sections */}
              <div className="space-y-8 border-t border-jj-black/10 pt-8">
                
                <div>
                  <h3 className="font-serif text-2xl text-jj-black mb-4">Key Benefits</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-jj-charcoal/70 font-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-jj-nude flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-jj-black/10 pt-8">
                  <h3 className="font-serif text-2xl text-jj-black mb-4">How to Use</h3>
                  <div className="text-jj-charcoal/70 font-light leading-relaxed space-y-2">
                    {product.howToUse.split('\n').map((step, i) => (
                      <p key={i}>{step}</p>
                    ))}
                  </div>
                </div>

                <div className="border-t border-jj-black/10 pt-8">
                  <h3 className="font-serif text-2xl text-jj-black mb-4">Full Ingredient List</h3>
                  <p className="text-jj-charcoal/70 font-light leading-relaxed">
                    {product.ingredients}
                  </p>
                </div>

                <div className="border-t border-jj-black/10 pt-8">
                  <h3 className="font-serif text-2xl text-jj-black mb-4">Hair Types</h3>
                  <p className="text-jj-charcoal/70 font-light leading-relaxed">
                    {product.hairTypes}
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Cross-Sell Section */}
          <div className="mt-32 border-t border-jj-black/10 pt-24">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-jj-black mb-4">Complete Your <span className="italic text-jj-nude">Routine</span></h2>
              <p className="text-jj-charcoal/70">Pair it with these community favorites.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.filter(p => p.slug !== product.slug).slice(0, 3).map((relatedProduct) => (
                <a
                  key={relatedProduct.name}
                  href={`/products/${relatedProduct.slug}`}
                  className="group relative bg-white/70 backdrop-blur-md rounded-[2rem] p-6 pb-20 overflow-hidden border border-transparent hover:border-jj-black/20 transition-colors block cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="w-full aspect-square overflow-hidden rounded-[1.5rem] bg-[#EBE3D5] relative">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover md:grayscale md:mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-2 relative z-10">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-sans text-xl font-bold text-jj-black group-hover:text-jj-gold transition-colors">
                        {relatedProduct.name.replace('JJHairCare ', '')}
                      </h3>
                      <span className="font-mono text-jj-gold font-medium mt-1">
                        {relatedProduct.price}
                      </span>
                    </div>
                  </div>

                  <button className="absolute bottom-6 left-6 right-6 bg-jj-black text-white font-sans font-bold py-3 rounded-xl translate-y-0 opacity-100 lg:translate-y-20 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 hover:bg-jj-gold text-sm">
                    View Details
                  </button>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}