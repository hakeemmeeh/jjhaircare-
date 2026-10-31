import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { whatsappOrderUrl } from "@/data/site-config";

type ProductDetail = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price?: string;
  size: string;
  image: string;
  imageAspect?: string;
  benefits: string[];
  ingredients: string;
  howToUse: string;
  hairTypes: string;
};

const ASK_US = "Message us on WhatsApp and we'll guide you to the right routine for your hair.";

// Details below come from the JJ Haircare packaging and brand artwork.
const products: ProductDetail[] = [
  {
    name: "JJHairCare Herbal Hair Oil",
    slug: "herbal-hair-oil",
    price: "KES 1,000",
    tagline: "Nourish. Strengthen. Grow.",
    description: "A 100% natural herbal hair oil made to nourish and strengthen hair, support healthy growth and reduce breakage. Healthy hair, naturally.",
    size: "200ml",
    image: "/images/herbal-hair-oil-v2.jpg",
    imageAspect: "aspect-square",
    benefits: ["Nourishes hair", "Strengthens hair", "Promotes hair growth", "Reduces hair breakage"],
    ingredients: "100% natural ingredients. The full ingredient list is printed on the bottle.",
    howToUse: "Pour a small amount into your palm and work it through your scalp and hair.",
    hairTypes: ASK_US,
  },
  {
    name: "JJHairCare Scalp Detox Mask",
    slug: "scalp-detox-mask",
    tagline: "Cleanse. Detox. Revive.",
    description: "A natural deep cleansing treatment designed to remove build-up, soothe the scalp and promote healthy, strong hair growth. Healthy scalp, stronger hair.",
    size: "Natural powder mask",
    image: "/images/scalp-detox-mask-v2.jpg",
    imageAspect: "aspect-square",
    benefits: ["Deep cleansing", "Removes build-up", "Soothes the scalp", "Promotes healthy hair growth", "Restores natural shine"],
    ingredients: "Natural ingredients. The full ingredient list is printed on the pouch.",
    howToUse: "1. Apply to clean scalp and hair\n2. Massage gently and leave for 20–30 minutes\n3. Rinse thoroughly with lukewarm water\n4. Use 1–2 times a week for best results",
    hairTypes: ASK_US,
  },
  {
    name: "JJHairCare Hibiscus Hair Butter",
    slug: "hibiscus-hair-butter",
    price: "KES 1,500",
    tagline: "Deep Nourishment. Lasting Shine.",
    description: "A rich, creamy hair butter made with hibiscus extract, shea butter, aloe vera and natural oils for deep moisture, natural shine and stronger hair.",
    size: "Hair butter",
    image: "/images/hibiscus-hair-butter.jpg",
    imageAspect: "aspect-[3/2]", // wide banner — show it uncropped
    benefits: ["Deep moisturization", "Adds natural shine", "Reduces breakage", "Strengthens hair"],
    ingredients: "Made with hibiscus extract, shea butter, aloe vera and natural oils — 100% natural ingredients. The full list is printed on the jar.",
    howToUse: "Warm a small amount between your palms and work it through your hair, focusing on the lengths and ends.",
    hairTypes: ASK_US,
  },
  {
    name: "JJHairCare Moringa Hair Butter",
    slug: "moringa-hair-butter",
    price: "KES 1,500",
tagline: "Nourish. Strengthen. Grow.",
    description: "A rich, creamy moringa hair butter made with 100% natural ingredients to deeply moisturise, strengthen hair and promote growth.",
    size: "Hair butter",
    image: "/images/moringa-hair-butter-v2.jpg",
    imageAspect: "aspect-square",
    benefits: ["Deeply moisturises", "Strengthens hair", "Promotes hair growth"],
    ingredients: "100% natural ingredients. The full ingredient list is printed on the jar.",
    howToUse: "Warm a small amount between your palms and work it through your hair.",
    hairTypes: ASK_US,
  },
  {
    name: "JJHairCare Hair Mist",
    slug: "hair-mist",
    price: "KES 1,500",
    tagline: "Refresh. Nourish. Shine.",
    description: "A natural hair mist for hair care all day — for healthier, softer and shinier hair.",
    size: "Hair mist",
    image: "/images/hair-mist.jpg",
    imageAspect: "aspect-[1199/1312]",
    benefits: ["Nourishes hair", "Adds natural shine", "Reduces frizz", "Strengthens hair"],
    ingredients: "The full ingredient list is printed on the bottle.",
    howToUse: "Hold the bottle a little away from your hair and mist evenly. Use it through the day to refresh and add shine.",
    hairTypes: ASK_US,
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
    ...(product.price
      ? {
          offers: {
            '@type': 'Offer',
            url: `https://jjhaircare.vercel.app/products/${product.slug}`,
            priceCurrency: 'KES',
            price: product.price.replace(/[^0-9.]/g, ''),
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
          },
        }
      : {}),
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
              <div className={`${product.imageAspect ?? "aspect-[4/5]"} relative rounded-sm overflow-hidden bg-jj-black/5`}>
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
              <p className="text-xl md:text-2xl text-jj-olive font-medium mb-2">{product.price ?? "Message us for price"}</p>
              <p className="text-sm font-mono text-jj-gold uppercase tracking-widest mb-8">{product.size}</p>
              
              <h3 className="text-xl font-serif text-jj-black mb-4">{product.tagline}</h3>
              <p className="text-lg text-jj-charcoal/80 font-light leading-relaxed mb-10">
                {product.description}
              </p>

              <a
                href={whatsappOrderUrl(`Hi JJ Haircare, I'd like to order the ${product.name.replace("JJHairCare ", "")}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto text-center bg-jj-black hover:bg-jj-nude text-white hover:text-jj-black font-medium px-12 py-5 rounded-sm uppercase tracking-widest text-sm transition-all duration-300 mb-16 shadow-lg hover:shadow-xl"
              >
                Order on WhatsApp{product.price ? ` — ${product.price}` : ""}
              </a>

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
                  <h3 className="font-serif text-2xl text-jj-black mb-4">Not sure what's right for you?</h3>
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
              <p className="text-jj-charcoal/70">More from JJ Haircare.</p>
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
                      {relatedProduct.price && (
                        <span className="font-mono text-jj-gold font-medium mt-1">
                          {relatedProduct.price}
                        </span>
                      )}
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