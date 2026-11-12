import Image from "next/image";
import Link from "next/link";
import { Leaf, Sparkles, Heart } from "lucide-react";

const pillars = [
  { icon: Leaf, title: "100% Natural", description: "Only clean, plant-based ingredients. Nothing artificial, ever." },
  { icon: Sparkles, title: "Handcrafted", description: "Small-batch formulations for maximum potency and freshness." },
  { icon: Heart, title: "Cruelty-Free", description: "Never tested on animals. Always kind to the planet." },
];

const rows = [
  {
    eyebrow: "Rooted in nature",
    title: "Simple, plant-based ingredients",
    text: "Hibiscus, moringa, neem, honey and herbal oils — every formula starts with ingredients from nature, chosen to nourish your scalp and strands without the fuss.",
    image: "/images/hibiscus-hair-butter-v2.jpg",
    alt: "Hibiscus Hair Butter with fresh hibiscus flower",
    aspect: "aspect-[3/2]",
    position: "object-center",
  },
  {
    eyebrow: "Crafted with intention",
    title: "Made in Nairobi, for everyday crown care",
    text: "JJ Haircare is built by three founders who wanted healthier hair to feel simple. From the herbal oil to the butters, mask and mist, each product is made to fit a routine you will actually keep.",
    image: "/images/herbal-oil-face-v5.jpg",
    alt: "JJ Haircare Herbal Hair Oil",
    aspect: "aspect-square",
    position: "object-center",
  },
];

export default function About() {
  return (
    <section id="about" className="pt-36 pb-20 bg-jj-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-jj-black mb-8 leading-tight">
            Rooted in Nature. <br />
            <span className="italic text-jj-olive">Crafted with Purpose.</span>
          </h1>
          <p className="text-lg md:text-xl text-jj-charcoal/80 font-light leading-relaxed">
            JJ Haircare was born from a belief that your hair deserves the purest, most powerful ingredients nature has to offer. Every product is handcrafted with ethically sourced botanicals, essential oils, and butters — free from sulfates, parabens, and silicones. We celebrate the beauty of natural hair in all its forms.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 mb-20 md:mb-28">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center rounded-3xl bg-white/60 p-8 shadow-sm">
              <Icon className="mx-auto mb-4 h-8 w-8 text-jj-gold" />
              <h2 className="font-serif text-xl text-jj-black mb-2">{title}</h2>
              <p className="text-sm text-jj-charcoal/80 font-light leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
          {rows.map((row, i) => (
            <div
              key={row.title}
              className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <div
                className={`relative ${row.aspect} overflow-hidden rounded-3xl shadow-xl ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={row.image}
                  alt={row.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover ${row.position}`}
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-4">{row.eyebrow}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-jj-black leading-tight mb-5">{row.title}</h2>
                <p className="text-lg text-jj-charcoal/80 font-light leading-relaxed">{row.text}</p>
              </div>
            </div>
          ))}

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-[1672/941] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about-banner-v3.jpg"
                alt="The complete JJ Haircare collection"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-4">The collection</p>
              <h2 className="font-serif text-3xl md:text-4xl text-jj-black leading-tight mb-5">Complete haircare, nourish to grow</h2>
              <p className="text-lg text-jj-charcoal/80 font-light leading-relaxed mb-8">
                Five products, one routine: a herbal oil, a scalp detox mask, hibiscus and moringa butters, and a hair mist. Order any of them straight on WhatsApp.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-jj-black text-white text-sm font-medium uppercase tracking-wider px-8 py-4 min-h-[52px] hover:bg-jj-olive transition-colors"
              >
                Shop the collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
