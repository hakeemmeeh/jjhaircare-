import { pageMeta } from "@/lib/seo";
export const metadata = pageMeta({
  title: "Contact — Order & Questions",
  description:
    "Message JJ Haircare on WhatsApp to order, ask about our products or talk wholesale. Natural hair care from Nairobi, Kenya.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
