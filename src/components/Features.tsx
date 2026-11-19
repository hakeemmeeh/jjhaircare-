import Link from "next/link";
import { ArrowRight, Droplets, Flower2, Leaf, Sprout } from "lucide-react";

const ingredients = [
  {
    icon: Flower2,
    name: "Hibiscus",
    text: "With shea butter and aloe vera in our Hibiscus Hair Butter.",
    href: "/products/hibiscus-hair-butter",
    product: "Hibiscus Hair Butter",
  },
  {
    icon: Leaf,
    name: "Moringa",
    text: "The heart of our rich, creamy Moringa Hair Butter.",
    href: "/products/moringa-hair-butter",
    product: "Moringa Hair Butter",
  },
  {
    icon: Sprout,
    name: "Honey & neem",
    text: "Infused in the Scalp Detox Mask to detoxify, hydrate and repair.",
    href: "/products/scalp-detox-mask",
    product: "Scalp Detox Mask",
  },
  {
    icon: Droplets,
    name: "Herbal oils",
    text: "A 100% natural blend in our Herbal Hair Oil, for scalp and strands.",
    href: "/products/herbal-hair-oil",
    product: "Herbal Hair Oil",
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

        <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl bg-jj-paper/10 ring-1 ring-jj-paper/10">
          {ingredients.map(({ icon: Icon, name, text, href, product }) => (
            <li key={name} className="bg-jj-forest">
              <Link
                href={href}
                className="group flex h-full flex-col gap-5 p-6 md:p-8 transition-colors duration-300 hover:bg-jj-forest-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-jj-accent/15 text-jj-accent ring-1 ring-jj-accent/30 transition-colors group-hover:bg-jj-accent group-hover:text-jj-forest">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="font-serif text-2xl text-jj-paper">{name}</span>
                  <span className="mt-2 text-jj-paper/70 font-light leading-relaxed">{text}</span>
                  <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-medium tracking-[0.02em] text-jj-accent">
                    {product}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}