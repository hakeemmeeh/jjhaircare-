import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { whatsappOrderUrl } from "@/data/site-config";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";

type ProductDetail = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price?: string;
  size: string;
  image: string;
  gallery?: string[];
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
    image: "/images/herbal-oil-face-v5.jpg",
    gallery: ["/images/herbal-hair-oil-v2.jpg", "/images/herbal-oil-pour-v5.jpg"],
    imageAspect: "aspect-square",
    benefits: ["Nourishes hair", "Strengthens hair", "Promotes hair growth", "Reduces hair breakage"],
    ingredients: "100% natural ingredients. The full ingredient list is printed on the bottle.",
    howToUse: "Pour a small amount into your palm and work it through your scalp and hair.",
    hairTypes: ASK_US,
  },
  {
    name: "JJHairCare Scalp Detox Mask",
    slug: "scalp-detox-mask",
    price: "KES 1,500",
    tagline: "Detoxify. Hydrate. Repair.",
    description: "A scalp detox mask infused with honey and neem that cleanses build-up, hydrates and helps repair — for a healthier scalp and stronger hair.",
    size: "100ml scalp mask",
    image: "/images/scalp-detox-face-v4.jpg",
    gallery: ["/images/scalp-detox-sq-1-v4.jpg", "/images/scalp-detox-for-you-v5.jpg"],
    imageAspect: "aspect-square",
    benefits: ["Detoxifies the scalp", "Removes build-up", "Hydrates", "Helps repair dry, stressed hair", "Infused with honey and neem"],
    ingredients: "Infused with honey and neem. The full ingredient list is printed on the tube.",
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
    image: "/images/hibiscus-hair-butter-v2.jpg",
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
    description: "A rich, creamy hair butter made with moringa and 100% natural ingredients. It deeply moisturises dry hair, strengthens strands and supports healthy-looking growth, leaving hair soft, nourished and easy to manage.",
    size: "Hair butter",
    image: "/images/moringa-hair-butter-v2.jpg",
    imageAspect: "aspect-square",
    benefits: ["Deeply moisturises", "Strengthens hair", "Promotes hair growth", "Leaves hair soft and manageable", "Rich, creamy texture"],
    ingredients: "100% natural ingredients. The full ingredient list is printed on the jar.",
    howToUse: "1. Start with clean hair, damp or dry\n2. Warm a small amount between your palms\n3. Work it through your lengths and ends, section by section\n4. Style as usual — a little goes a long way",
    hairTypes: ASK_US,
  },
  {
    name: "JJHairCare Hair Mist",
    slug: "hair-mist",
    price: "KES 1,500",
    tagline: "Refresh. Nourish. Shine.",
    description: "A lightweight everyday mist that refreshes your hair, adds natural shine and helps tame frizz — hair care, all day. Perfect for a quick refresh between wash days.",
    size: "Hair mist",
    image: "/images/hair-mist-v2.jpg",
    imageAspect: "aspect-[3/2]",
    benefits: ["Nourishes hair", "Adds natural shine", "Reduces frizz", "Strengthens hair", "Refreshes hair through the day"],
    ingredients: "The full ingredient list is printed on the bottle.",
    howToUse: "1. Hold the bottle about 15–20 cm from your hair\n2. Mist evenly over damp or dry hair\n3. Smooth through with your hands or a brush\n4. Reapply through the day whenever hair needs a refresh",
    hairTypes: ASK_US,
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  const name = product.name.replace("JJHairCare ", "");
  const title = product.price ? `${name} — ${product.price}` : name;
  const description = `${product.tagline} ${product.description}`;
  return {
    title,
    description,
    openGraph: { type: "website", title, description, images: [{ url: product.image, alt: name }] },
    twitter: { card: "summary_large_image", title, description, images: [product.image] },
  };
}

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
              <ProductGallery
                images={[product.image, ...(product.gallery ?? [])]}
                alt={product.name}
                aspect={product.imageAspect ?? "aspect-[4/5]"}
              />
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
              
              <p className="text-lg text-jj-charcoal/80 font-light leading-relaxed mb-8">
                {product.description}
              </p>

              <a
                href={whatsappOrderUrl(`Hi JJ Haircare, I'd like to order the ${product.name.replace("JJHairCare ", "")}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto text-center bg-jj-black hover:bg-jj-nude text-white hover:text-jj-black font-medium px-12 py-5 rounded-sm uppercase tracking-widest text-sm transition-all duration-300 mb-10 shadow-lg hover:shadow-xl"
              >
                Order on WhatsApp{product.price ? ` — ${product.price}` : ""}
              </a>

              {/* Collapsible details */}
              <div className="border-t border-jj-black/10">
                {[
                  {
                    title: "Key Benefits",
                    body: (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-3 text-jj-charcoal/70 font-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-jj-nude flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    title: "How to Use",
                    body: (
                      <div className="text-jj-charcoal/70 font-light leading-relaxed space-y-2">
                        {product.howToUse.split("\n").map((step, i) => (
                          <p key={i}>{step}</p>
                        ))}
                      </div>
                    ),
                  },
                  {
                    title: "Ingredients",
                    body: <p className="text-jj-charcoal/70 font-light leading-relaxed">{product.ingredients}</p>,
                  },
                  {
                    title: "Good for",
                    body: <p className="text-jj-charcoal/70 font-light leading-relaxed">{product.hairTypes}</p>,
                  },
                ].map((item) => (
                  <details key={item.title} className="group border-b border-jj-black/10">
                    <summary className="flex items-center justify-between cursor-pointer list-none py-5 font-serif text-xl text-jj-black [&::-webkit-details-marker]:hidden">
                      {item.title}
                      <span className="text-2xl text-jj-gold leading-none transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="pb-6">{item.body}</div>
                  </details>
                ))}
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
              {PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3).map((related) => (
                <ProductCard key={related.slug} product={related} sizes="(max-width: 768px) 100vw, 33vw" />
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}