import type { MetadataRoute } from "next";
import { SITE_URL as BASE } from "@/lib/seo";
import { PRODUCTS } from "@/data/products";



export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/about", "/journal", "/testimonials", "/contact", "/faq", "/shipping", "/returns", "/privacy", "/terms"];
  return [
    ...pages.map((path) => ({ url: `${BASE}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...PRODUCTS.map((p) => ({ url: `${BASE}/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
