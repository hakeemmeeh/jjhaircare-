export type Product = {
  name: string;
  slug: string;
  description: string;
  /** Shown as-is. Leave unset to show "Message us for price". */
  price?: string;
  image: string;
  /** Optional second photo shown on hover (texture, back of pack, etc.). */
  hoverImage?: string;
  /** How the card image fits its square frame. Defaults to "cover". Use "contain" for non-square art. */
  imageFit?: "cover" | "contain";
  /** Corner badge, e.g. "Best seller", "New". */
  badge?: string;
  /** Average rating out of 5. */
  rating?: number;
  /** Number of ratings behind `rating`. */
  reviewCount?: number;
};

export const PRODUCTS: Product[] = [
  {
    name: "Herbal Hair Oil",
    slug: "herbal-hair-oil",
    price: "KES 1,000",
    description: "Nourish. Strengthen. Grow. A 100% natural herbal oil for scalp and strands.",
    image: "/images/herbal-hair-oil-ad.png",
    hoverImage: "/images/herbal-oil-face-v5.jpg",
    badge: "Best seller",
    rating: 4.9,
    reviewCount: 214,
  },
  {
    name: "Scalp Detox Mask",
    slug: "scalp-detox-mask",
    price: "KES 1,500",
    description: "A honey and neem scalp mask that detoxifies, hydrates and repairs.",
    image: "/images/scalp-detox-face-v4.jpg",
    hoverImage: "/images/scalp-detox-for-you-v5.jpg",
    badge: "New",
    rating: 4.8,
    reviewCount: 156,
  },
  {
    name: "Hibiscus Hair Butter",
    slug: "hibiscus-hair-butter",
    price: "KES 1,500",
    description: "Deep nourishment, lasting shine — with hibiscus extract, shea butter and aloe vera.",
    image: "/images/hibiscus-hair-butter-ad.png",
    hoverImage: "/images/hibiscus-hair-butter-card-v2.jpg",
    imageFit: "contain",
    badge: "Best seller",
    rating: 4.9,
    reviewCount: 189,
  },
  {
    name: "Moringa Hair Butter",
    slug: "moringa-hair-butter",
    price: "KES 1,500",
    description: "A rich, creamy moringa butter that deeply moisturises, strengthens and leaves hair soft.",
    image: "/images/moringa-hair-butter-ad.png",
    hoverImage: "/images/moringa-hair-butter-v2.jpg",
    rating: 4.7,
    reviewCount: 132,
  },
  {
    name: "Hair Mist",
    slug: "hair-mist",
    price: "KES 1,500",
    description: "A lightweight everyday mist that refreshes, adds shine and tames frizz.",
    image: "/images/hair-mist-face-v6.jpg",
    hoverImage: "/images/hair-mist-sq-v6.jpg",
    badge: "New",
    rating: 4.8,
    reviewCount: 98,
  },
];

/** Query `?goal=` on `/products` → scroll + highlight this card slug. */
export const GOAL_TO_PRODUCT_SLUG: Record<string, string> = {
  hydration: "hibiscus-hair-butter",
  growth: "herbal-hair-oil",
  scalp: "scalp-detox-mask",
  shine: "hibiscus-hair-butter",
};
