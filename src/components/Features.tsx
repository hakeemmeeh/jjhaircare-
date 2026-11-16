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
    <section aria-labelledby="ingredients-heading" className="bg-[#EBE3D5] px-6 md:px-12 py-14 md:py-20">
      <div className="mx-auto max-w-[90%]">
        <div className="max-w-[53%] mb-10 md:mb-12">
          <p className="font-mono text-[0.75rem] uppercase tracking-widest text-jj-olive mb-3">The JJ Haircare difference</p>
          <h2 id="ingredients-heading" className="font-serif text-[1.875rem] md:text-[2.25rem] text-jj-black leading-tight mb-4">
            Plant-based, <span className="italic text-jj-olive">and you can name every one</span>
          </h2>
          <p className="text-jj-charcoal/80 font-light leading-relaxed">
            Our formulas start with ingredients from nature. Here is what goes into each product.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.map(({ icon: Icon, name, text, href, product }) => (
            <li key={name}>
              <Link
                href={href}
                className="group flex h-full items-start gap-4 rounded-[16px] border-[1px] border-jj-black/10 bg-white/70 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-jj-black/50 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] lg:flex-col lg:gap-5 lg:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[9999px] bg-jj-black/5 text-jj-black transition-colors group-hover:bg-jj-black group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="font-serif text-[1.25rem] text-jj-black">{name}</span>
                  <span className="mt-1.5 text-jj-charcoal/80 font-light leading-relaxed">{text}</span>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.875rem] uppercase tracking-wider text-jj-black">
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
