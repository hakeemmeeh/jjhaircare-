import Image from "next/image";
import Link from "next/link";

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
    image: "/images/herbal-hair-oil-v2.jpg",
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
            JJHairCare was born from a belief that your hair deserves the purest, most powerful ingredients nature has to offer. We celebrate the beauty of natural hair in all its forms.
          </p>
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
                className="inline-block bg-jj-black text-white text-sm uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-jj-olive transition-colors"
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
