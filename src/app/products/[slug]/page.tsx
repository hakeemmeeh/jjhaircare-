import Link from "next/link";
import { clip, seoTitle, SITE_URL } from "@/lib/seo";
import { Bike, Check, MessageCircle, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { whatsappOrderUrl, WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/data/site-config";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";

/** Curated 3-product routines. The current product is always first; the other two complement it. */
const ROUTINE_FOR: Record<string, [string, string]> = {
  "herbal-hair-oil": ["hibiscus-hair-butter", "hair-mist"],
  "scalp-detox-mask": ["moringa-hair-butter", "hair-mist"],
  "hibiscus-hair-butter": ["herbal-hair-oil", "hair-mist"],
  "moringa-hair-butter": ["scalp-detox-mask", "herbal-hair-oil"],
  "hair-mist": ["herbal-hair-oil", "hibiscus-hair-butter"],
};

const BUNDLE_DISCOUNT = 0.1; // 10% off when buying the routine

function priceOf(p?: string): number {
  return p ? Number(p.replace(/[^0-9]/g, "")) || 0 : 0;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  const name = product.name.replace("JJ Haircare ", "");
  const title = `${name} in Nairobi, Kenya`;
  const lead = `${name}${product.price ? ` (${product.price})` : ""}, made in Nairobi. `;
  const tail = " Order on WhatsApp.";
  const description = lead + clip(product.description, 155 - lead.length - tail.length) + tail;
  const ogImage = product.ogImage ?? product.image;
  return {
    title: seoTitle(title),
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { type: "website", url: `/products/${product.slug}`, siteName: "JJ Haircare", locale: "en_KE", title, description, images: [{ url: ogImage, width: 1200, height: 630, alt: name }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [product.image, ...(product.gallery ?? [])].map((src) => `${SITE_URL}${src}`),
    url: `${SITE_URL}/products/${product.slug}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'JJ Haircare',
    },
    ...(product.price
      ? {
          offers: {
            '@type': 'Offer',
            url: `${SITE_URL}/products/${product.slug}`,
            priceCurrency: 'KES',
            price: product.price.replace(/[^0-9.]/g, ''),
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
          },
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: product.name.replace("JJ Haircare ", ""), item: `${SITE_URL}/products/${product.slug}` },
    ],
  };

  const routineSlugs = ROUTINE_FOR[product.slug] ?? [];
  const routine = [product, ...routineSlugs.map((s) => PRODUCTS.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p))];
  const individualTotal = routine.reduce((sum, p) => sum + priceOf(p.price), 0);
  const bundlePrice = Math.round(individualTotal * (1 - BUNDLE_DISCOUNT));
  const savings = individualTotal - bundlePrice;
  const bundleMessage =
    `Hi JJ Haircare, I'd like to order the routine bundle:\n` +
    routine.map((p) => `• ${p.name} (${p.price})`).join("\n") +
    `\n\nIndividual total: ${individualTotal.toLocaleString()} KES\nBundle price (save ${Math.round(BUNDLE_DISCOUNT * 100)}%): ${bundlePrice.toLocaleString()} KES`;

  return (
    <main id="main" className="bg-jj-ivory min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <div className="flex-1 pt-28 pb-24 md:pt-32">
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
              <nav aria-label="Breadcrumb" className="mb-5 text-sm text-jj-charcoal/70">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link href="/" className="inline-block py-1 hover:text-jj-black">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/products" className="inline-block py-1 hover:text-jj-black">Products</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-jj-black">{product.name.replace("JJ Haircare ", "")}</li>
                </ol>
              </nav>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-jj-nude" />
                <p className="text-jj-nude text-sm uppercase tracking-wider font-medium">Natural hair care · Nairobi, Kenya</p>
              </div>

              <h1 className="font-serif text-4xl md:text-6xl text-jj-black mb-2 leading-tight">{product.name}</h1>
              {product.rating != null && (
                <div className="flex items-center gap-2 mb-3 text-sm">
                  <span className="text-jj-gold" aria-hidden>★</span>
                  <span className="font-medium text-jj-black">{product.rating.toFixed(1)}</span>
                  {product.reviewCount != null && <span className="text-jj-charcoal/60">({product.reviewCount} reviews)</span>}
                  <span className="sr-only">Rated {product.rating} out of 5{product.reviewCount != null ? ` from ${product.reviewCount} reviews` : ""}</span>
                </div>
              )}
              <p className="text-xl md:text-2xl text-jj-olive font-medium mb-2">{product.price ?? "Message us for price"}</p>
              <p className="text-sm font-mono text-jj-gold uppercase tracking-widest mb-8">{product.size}</p>
              
              <p className="text-lg text-jj-charcoal/80 font-light leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="text-base text-jj-charcoal/70 font-light leading-relaxed mb-8">
                Made in Nairobi, Kenya. Order on WhatsApp or call{" "}
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="underline underline-offset-4 hover:text-jj-black">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>

              <a
                href={whatsappOrderUrl(`Hi JJ Haircare, I'd like to order the ${product.name.replace("JJ Haircare ", "")}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2.5 rounded-full bg-jj-black hover:bg-jj-olive text-white font-medium px-10 py-5 uppercase tracking-widest text-sm transition-colors duration-300 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Order on WhatsApp{product.price ? ` — ${product.price}` : ""}
              </a>

              <ul className="mt-6 mb-10 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-3 rounded-2xl border border-jj-black/10 bg-white/60 px-4 py-3">
                  <Bike className="h-5 w-5 shrink-0 text-jj-gold" aria-hidden="true" />
                  <span className="text-sm text-jj-charcoal/80"><strong className="font-medium text-jj-black">Nairobi:</strong> delivered by rider</span>
                </li>
                <li className="flex items-center gap-3 rounded-2xl border border-jj-black/10 bg-white/60 px-4 py-3">
                  <Package className="h-5 w-5 shrink-0 text-jj-gold" aria-hidden="true" />
                  <span className="text-sm text-jj-charcoal/80"><strong className="font-medium text-jj-black">Other towns:</strong> sent by parcel</span>
                </li>
              </ul>

              {/* Collapsible details */}
              <div className="border-t border-jj-black/10">
                {[
                  {
                    title: "Key Benefits",
                    body: (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-jj-charcoal/80 font-light">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-jj-black text-white">
                              <Check className="h-3 w-3" aria-hidden="true" />
                            </span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    title: "How to Use",
                    body: (
                      <ol className="space-y-3 text-jj-charcoal/80 font-light leading-relaxed">
                        {product.howToUse.split("\n").filter(Boolean).map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-jj-black/30 font-mono text-xs text-jj-black">
                              {i + 1}
                            </span>
                            <span>{step.replace(/^\s*\d+[.)]\s*/, "")}</span>
                          </li>
                        ))}
                      </ol>
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
                ].map((item, i) => (
                  <details key={item.title} open={i === 0} className="group border-b border-jj-black/10">
                    <summary className="flex items-center justify-between cursor-pointer list-none py-5 min-h-[56px] font-serif text-xl text-jj-black [&::-webkit-details-marker]:hidden">
                      {item.title}
                      <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full border border-jj-black/15 text-xl text-jj-black leading-none transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="pb-6">{item.body}</div>
                  </details>
                ))}
              </div>

            </div>
          </div>

          {/* Bundle Section */}
          <div className="mt-16 border-t border-jj-black/10 pt-14 md:mt-32 md:pt-24">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-jj-black mb-4">Complete Your <span className="text-jj-nude">Routine</span></h2>
              <p className="text-jj-charcoal/70">Buy these three together and save {Math.round(BUNDLE_DISCOUNT * 100)}%.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {routine.map((related) => (
                related && <ProductCard key={related.slug} product={related} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              ))}
            </div>

            {/* Bundle price + CTA */}
            <div className="mt-10 rounded-[1.75rem] border border-jj-black/10 bg-white/70 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-sm text-jj-charcoal/60 mb-1">Bundle of {routine.length} products</p>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                    <span className="font-serif text-3xl md:text-4xl text-jj-black">{bundlePrice.toLocaleString()} KES</span>
                    <span className="text-jj-charcoal/50 line-through">{individualTotal.toLocaleString()} KES</span>
                    <span className="rounded-full bg-jj-gold/20 text-jj-gold px-3 py-1 text-xs font-bold">Save {savings.toLocaleString()} KES</span>
                  </div>
                </div>
                <a
                  href={whatsappOrderUrl(bundleMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-jj-black hover:bg-jj-olive text-white font-medium px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-300 shadow-lg shrink-0"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Order the routine
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />

      {/* Sticky order bar (mobile only) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-jj-black/10 bg-white/95 backdrop-blur px-4 py-3 lg:hidden">
        <div className="flex items-center justify-between gap-3 max-w-3xl mx-auto">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-jj-black truncate">{product.name.replace("JJ Haircare ", "")}</p>
            <p className="text-xs text-jj-charcoal/70">{product.price ?? "Message us for price"}</p>
          </div>
          <a
            href={whatsappOrderUrl(`Hi JJ Haircare, I'd like to order the ${product.name.replace("JJ Haircare ", "")}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-jj-black px-6 py-3 text-sm font-medium text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Order
          </a>
        </div>
      </div>
    </main>
  );
}
