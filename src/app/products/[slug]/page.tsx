import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Re-using the same products array for lookup (in a real app, this would be a DB fetch)
const products = [
  {
    name: "Hair Mist",
    slug: "hair-mist",
    description: "Refreshing botanical mist for daily hydration and shine. Perfect for a midday moisture boost or reviving second-day curls.",
    price: "$24",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Lightweight hydration", "Instant shine", "Soothes scalp", "Refreshes curls"],
    ingredients: ["Aloe Vera Juice", "Rose Water", "Glycerin", "Peppermint Extract"],
    howToUse: "Shake well. Mist lightly over hair from roots to ends. Use daily or as needed to refresh and rehydrate."
  },
  {
    name: "Hair Mask",
    slug: "hair-mask",
    description: "Intensive restorative treatment for deep nourishment. Penetrates the hair shaft to repair damage and restore elasticity.",
    price: "$35",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Repairs damage", "Restores elasticity", "Deeply conditioning", "Prevents breakage"],
    ingredients: ["Shea Butter", "Honey", "Avocado Oil", "Silk Amino Acids"],
    howToUse: "Apply generously to clean, wet hair. Leave on for 15-30 minutes. Rinse thoroughly. For deeper conditioning, use with heat."
  },
  {
    name: "Hair Oil",
    slug: "hair-oil",
    description: "Nourishing blend of natural oils for scalp and strands. Seals in moisture, promotes growth, and delivers brilliant shine.",
    price: "$38",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Seals in moisture", "Stimulates growth", "Adds brilliant shine", "Tames frizz"],
    ingredients: ["Argan Oil", "Jojoba Oil", "Jamaican Black Castor Oil", "Vitamin E"],
    howToUse: "Apply a few drops to palms and massage into scalp, or distribute evenly through damp or dry hair to seal ends."
  },
  {
    name: "Hair Butter",
    slug: "hair-butter",
    description: "Rich, creamy moisture sealant for lasting softness. Melts into the hair to provide heavy-duty protection against the elements.",
    price: "$32",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop",
    benefits: ["Heavy-duty moisture", "Ultimate softness", "Protects ends", "Perfect for twist-outs"],
    ingredients: ["Mango Butter", "Cocoa Butter", "Coconut Oil", "Sweet Almond Oil"],
    howToUse: "Take a small amount, rub between palms to melt, and apply to damp or dry hair. Focus on the ends to prevent split ends."
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

  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
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

              <h1 className="font-serif text-5xl md:text-6xl text-jj-black mb-4">{product.name}</h1>
              <p className="text-2xl text-jj-olive font-medium mb-8">{product.price}</p>
              
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
                        <div className="w-1.5 h-1.5 rounded-full bg-jj-nude" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-jj-black/10 pt-8">
                  <h3 className="font-serif text-2xl text-jj-black mb-4">How to Use</h3>
                  <p className="text-jj-charcoal/70 font-light leading-relaxed">
                    {product.howToUse}
                  </p>
                </div>

                <div className="border-t border-jj-black/10 pt-8">
                  <h3 className="font-serif text-2xl text-jj-black mb-4">Hero Ingredients</h3>
                  <p className="text-jj-charcoal/70 font-light leading-relaxed">
                    {product.ingredients.join(", ")}
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}