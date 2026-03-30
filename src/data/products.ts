export type Product = {
  name: string;
  slug: string;
  description: string;
  price: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Hair Mist",
    slug: "hair-mist",
    description: "Refreshing botanical mist for daily hydration and shine.",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hair Mask",
    slug: "hair-mask",
    description: "Intensive restorative treatment for deep nourishment.",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hair Oil",
    slug: "hair-oil",
    description: "Nourishing blend of natural oils for scalp and strands.",
    price: "$38",
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hair Butter",
    slug: "hair-butter",
    description: "Rich, creamy moisture sealant for lasting softness.",
    price: "$32",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
  },
];

/** Query `?goal=` on `/products` → scroll + highlight this card slug. */
export const GOAL_TO_PRODUCT_SLUG: Record<string, string> = {
  hydration: "hair-butter",
  growth: "hair-oil",
  scalp: "hair-mist",
  shine: "hair-oil",
};
