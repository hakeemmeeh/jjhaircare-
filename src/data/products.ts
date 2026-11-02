export type Product = {
  name: string;
  slug: string;
  description: string;
  /** Shown as-is. Leave unset to show "Message us for price". */
  price?: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Herbal Hair Oil",
    slug: "herbal-hair-oil",
    price: "KES 1,000",
    description: "Nourish. Strengthen. Grow. A 100% natural herbal oil for scalp and strands.",
    image: "/images/herbal-oil-face-v5.jpg",
  },
  {
    name: "Scalp Detox Mask",
    slug: "scalp-detox-mask",
    price: "KES 1,500",
    description: "A honey and neem scalp mask that detoxifies, hydrates and repairs.",
    image: "/images/scalp-detox-face-v4.jpg",
  },
  {
    name: "Hibiscus Hair Butter",
    slug: "hibiscus-hair-butter",
    price: "KES 1,500",
    description: "Deep nourishment, lasting shine — with hibiscus extract, shea butter and aloe vera.",
    image: "/images/hibiscus-hair-butter-card-v2.jpg",
  },
  {
    name: "Moringa Hair Butter",
    slug: "moringa-hair-butter",
    price: "KES 1,500",
    description: "A rich, creamy moringa butter that deeply moisturises, strengthens and leaves hair soft.",
    image: "/images/moringa-hair-butter-v2.jpg",
  },
  {
    name: "Hair Mist",
    slug: "hair-mist",
    price: "KES 1,500",
    description: "A lightweight everyday mist that refreshes, adds shine and tames frizz.",
    image: "/images/hair-mist-card-v2.jpg",
  },
];

/** Query `?goal=` on `/products` → scroll + highlight this card slug. */
export const GOAL_TO_PRODUCT_SLUG: Record<string, string> = {
  hydration: "hibiscus-hair-butter",
  growth: "herbal-hair-oil",
  scalp: "scalp-detox-mask",
  shine: "hibiscus-hair-butter",
};
