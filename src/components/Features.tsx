import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ingredients = [
  {
    name: "Hibiscus",
    text: "With shea butter and aloe vera in our Hibiscus Hair Butter.",
    href: "/products/hibiscus-hair-butter",
    product: "Hibiscus Hair Butter",
    image: "/images/hibiscus-hair-butter-ad.webp",
  },
  {
    name: "Moringa",
    text: "The heart of our rich, creamy Moringa Hair Butter.",
    href: "/products/moringa-hair-butter",
    product: "Moringa Hair Butter",
    image: "/images/moringa-hair-butter-ad.webp",
  },
  {
    name: "Honey & neem",
    text: "Infused in the Scalp Detox Mask to detoxify, hydrate and repair.",
    href: "/products/scalp-detox-mask",
    product: "Scalp Detox Mask",
    image: "/images/scalp-detox-studio.png",
  },
  {
    name: "Herbal oils",
    text: "A 100% natural blend in our Herbal Hair Oil, for scalp and strands.",
    href: "/products/herbal-hair-oil",
    product: "Herbal Hair Oil",
    image: "/images/herbal-hair-oil-marble.png",
  },
];

/** Home: what goes into the products, each card linking to the product it is in. */
export default function Features() {
  return (
    <section aria-labelledby="ingredients-heading" className="bg-jj-forest px-6 md:px-12 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">The JJ Haircare difference</p>
          <h2 id="ingredients-heading" className="font-serif text-3xl md:text-5xl text-jj-paper leading-[1.1] mb-5 text-balance">
            Plant-based, and you can <span className="text-jj-accent">name every one.</span>
          </h2>
          <p className="text-jj-paper/70 text-lg font-light leading-relaxed max-w-xl">
            Our formulas start with ingredients from nature. Here is what goes into each product.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.map(({ name, text, href, product, image }, index) => (
            <li key={name}>
              <Link
                href={href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-jj-forest-soft ring-1 ring-jj-paper/10 transition-all duration-300 hover:-translate-y-1 hover:ring-jj-accent/40"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-jj-forest/85 font-mono text-xs text-jj-accent ring-1 ring-jj-accent/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-serif text-2xl text-jj-paper">{name}</h3>
                  <p className="mt-2 text-sm text-jj-paper/70 font-light leading-relaxed">{text}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-medium tracking-[0.02em] text-jj-accent">
                    {product}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}