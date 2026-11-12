import { pageMeta } from "@/lib/seo";
export const metadata = pageMeta({
  title: "FAQ — Hair Types, Ingredients & Orders",
  description:
    "Answers about JJ Haircare products, ingredients, ordering on WhatsApp, delivery and returns.",
  path: "/faq",
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
