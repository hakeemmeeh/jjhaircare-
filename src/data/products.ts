export type Product = {
  name: string;
  slug: string;
  /** Short marketing tagline, e.g. "Nourish. Strengthen. Grow." */
  tagline?: string;
  description: string;
  /** Shown as-is. Leave unset to show "Message us for price". */
  price?: string;
  size: string;
  image: string;
  /** Additional photos for the product gallery. */
  gallery?: string[];
  /** Tailwind aspect class for the gallery. Defaults to "aspect-square". */
  imageAspect?: string;
  /** How the card image fits its square frame. Defaults to "cover". Use "contain" for non-square art. */
  imageFit?: "cover" | "contain";
  /** 1200x630 social share image. Falls back to `image` if unset. */
  ogImage?: string;
  /** Optional second photo shown on hover (texture, back of pack, etc.). */
  hoverImage?: string;
  /** Corner badge, e.g. "Best seller", "New". */
  badge?: string;
  /** Average rating out of 5. */
  rating?: number;
  /** Number of ratings behind `rating`. */
  reviewCount?: number;
  /** Key benefits shown as a checklist. */
  benefits: string[];
  /** Ingredients description. */
  ingredients: string;
  /** How-to-use steps, newline-separated. */
  howToUse: string;
  /** Who the product is good for. */
  hairTypes: string;
};

const ASK_US = "Message us on WhatsApp and we'll guide you to the right routine for your hair.";

export const PRODUCTS: Product[] = [
  {
    name: "JJ Haircare Herbal Hair Oil",
    slug: "herbal-hair-oil",
    tagline: "Nourish. Strengthen. Grow.",
    description: "A 100% natural herbal hair oil made to nourish and strengthen hair, support healthy growth and reduce breakage. Healthy hair, naturally.",
    price: "KES 1,000",
    size: "200ml",
    image: "/images/herbal-hair-oil-ad.webp",
    ogImage: "/images/og-herbal-hair-oil.jpg",
    gallery: ["/images/herbal-hair-oil-v2.jpg", "/images/herbal-oil-pour-v5.jpg"],
    imageAspect: "aspect-square",
    hoverImage: "/images/herbal-oil-face-v5.jpg",
    badge: "Best seller",
    rating: 4.9,
    reviewCount: 214,
    benefits: ["Nourishes hair", "Strengthens hair", "Promotes hair growth", "Reduces hair breakage"],
    ingredients: "100% natural ingredients. The full ingredient list is printed on the bottle.",
    howToUse: "Pour a small amount into your palm and work it through your scalp and hair.",
    hairTypes: ASK_US,
  },
  {
    name: "JJ Haircare Scalp Detox Mask",
    slug: "scalp-detox-mask",
    tagline: "Detoxify. Hydrate. Repair.",
    description: "A scalp detox mask infused with honey and neem that cleanses build-up, hydrates and helps repair — for a healthier scalp and stronger hair.",
    price: "KES 1,500",
    size: "100ml scalp mask",
    image: "/images/scalp-detox-face-v4.jpg",
    ogImage: "/images/og-scalp-detox-mask.jpg",
    gallery: ["/images/scalp-detox-sq-1-v4.jpg", "/images/scalp-detox-for-you-v5.jpg"],
    imageAspect: "aspect-square",
    hoverImage: "/images/scalp-detox-for-you-v5.jpg",
    badge: "New",
    rating: 4.8,
    reviewCount: 156,
    benefits: ["Detoxifies the scalp", "Removes build-up", "Hydrates", "Helps repair dry, stressed hair", "Infused with honey and neem"],
    ingredients: "Infused with honey and neem. The full ingredient list is printed on the tube.",
    howToUse: "1. Apply to clean scalp and hair\n2. Massage gently and leave for 20–30 minutes\n3. Rinse thoroughly with lukewarm water\n4. Use 1–2 times a week for best results",
    hairTypes: ASK_US,
  },
  {
    name: "JJ Haircare Hibiscus Hair Butter",
    slug: "hibiscus-hair-butter",
    tagline: "Deep Nourishment. Lasting Shine.",
    description: "A rich, creamy hair butter made with hibiscus extract, shea butter, aloe vera and natural oils for deep moisture, natural shine and stronger hair.",
    price: "KES 1,500",
    size: "Hair butter",
    image: "/images/hibiscus-hair-butter-ad.webp",
    ogImage: "/images/og-hibiscus-hair-butter.jpg",
    gallery: ["/images/hibiscus-hair-butter-v2.jpg", "/images/hibiscus-hair-butter-card-v2.jpg"],
    imageAspect: "aspect-[3/2]",
    imageFit: "contain",
    hoverImage: "/images/hibiscus-hair-butter-card-v2.jpg",
    badge: "Best seller",
    rating: 4.9,
    reviewCount: 189,
    benefits: ["Deep moisturization", "Adds natural shine", "Reduces breakage", "Strengthens hair"],
    ingredients: "Made with hibiscus extract, shea butter, aloe vera and natural oils — 100% natural ingredients. The full list is printed on the jar.",
    howToUse: "Warm a small amount between your palms and work it through your hair, focusing on the lengths and ends.",
    hairTypes: ASK_US,
  },
  {
    name: "JJ Haircare Moringa Hair Butter",
    slug: "moringa-hair-butter",
    tagline: "Nourish. Strengthen. Grow.",
    description: "A rich, creamy hair butter made with moringa and 100% natural ingredients. It deeply moisturises dry hair, strengthens strands and supports healthy-looking growth, leaving hair soft, nourished and easy to manage.",
    price: "KES 1,500",
    size: "Hair butter",
    image: "/images/moringa-hair-butter-ad.webp",
    ogImage: "/images/og-moringa-hair-butter.jpg",
    gallery: ["/images/moringa-hair-butter-v2.jpg"],
    imageAspect: "aspect-square",
    hoverImage: "/images/moringa-hair-butter-v2.jpg",
    rating: 4.7,
    reviewCount: 132,
    benefits: ["Deeply moisturises", "Strengthens hair", "Promotes hair growth", "Leaves hair soft and manageable", "Rich, creamy texture"],
    ingredients: "100% natural ingredients. The full ingredient list is printed on the jar.",
    howToUse: "1. Start with clean hair, damp or dry\n2. Warm a small amount between your palms\n3. Work it through your lengths and ends, section by section\n4. Style as usual — a little goes a long way",
    hairTypes: ASK_US,
  },
  {
    name: "JJ Haircare Hair Mist",
    slug: "hair-mist",
    tagline: "Refresh. Nourish. Shine.",
    description: "A lightweight everyday mist that refreshes your hair, adds natural shine and helps tame frizz — hair care, all day. Perfect for a quick refresh between wash days.",
    price: "KES 1,500",
    size: "Hair mist",
    image: "/images/hair-mist-face-v6.jpg",
    ogImage: "/images/og-hair-mist.jpg",
    gallery: ["/images/hair-mist-sq-v6.jpg"],
    imageAspect: "aspect-square",
    hoverImage: "/images/hair-mist-sq-v6.jpg",
    badge: "New",
    rating: 4.8,
    reviewCount: 98,
    benefits: ["Nourishes hair", "Adds natural shine", "Reduces frizz", "Strengthens hair", "Refreshes hair through the day"],
    ingredients: "The full ingredient list is printed on the bottle.",
    howToUse: "1. Hold the bottle about 15–20 cm from your hair\n2. Mist evenly over damp or dry hair\n3. Smooth through with your hands or a brush\n4. Reapply through the day whenever hair needs a refresh",
    hairTypes: ASK_US,
  },
];

/** Query `?goal=` on `/products` → scroll + highlight this card slug. */
export const GOAL_TO_PRODUCT_SLUG: Record<string, string> = {
  hydration: "hibiscus-hair-butter",
  growth: "herbal-hair-oil",
  scalp: "scalp-detox-mask",
  shine: "hibiscus-hair-butter",
};