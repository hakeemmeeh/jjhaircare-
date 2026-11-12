import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Bike, Package, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_NUMBER, PHONE_DISPLAY, whatsappOrderUrl } from "@/data/site-config";

export const metadata = pageMeta({
  title: "Delivery in Nairobi & Across Kenya",
  description:
    "Rider delivery across Nairobi, including Westlands, Kilimani, Kileleshwa, Lavington, South B, South C and Eastleigh. Parcel delivery to other towns.",
  path: "/shipping",
});

const NAIROBI_AREAS = ["South C", "South B", "Westlands", "Kilimani", "Kileleshwa", "Hurlingham", "Lavington", "Eastleigh"];

const steps = [
  { title: "Message us", text: "Tell us what you'd like and your location on WhatsApp." },
  { title: "We confirm", text: "We confirm your order, the delivery cost and when to expect it." },
  { title: "We deliver", text: "A rider brings it to you in Nairobi, or we send it by parcel to your town." },
];

export default function ShippingPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24 flex-1">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-4">Delivery</p>
          <h1 className="font-serif text-4xl md:text-6xl text-jj-black mb-6 leading-tight">
            Delivery in Nairobi <span className="italic text-jj-olive">&amp; across Kenya</span>
          </h1>
          <p className="text-lg md:text-xl text-jj-charcoal/80 font-light leading-relaxed max-w-2xl mb-14">
            We deliver by rider in Nairobi and by parcel to other towns. Message us your location and we&apos;ll confirm the cost and timing before you pay.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <section className="bg-white/70 p-8 md:p-10">
              <Bike className="h-8 w-8 text-jj-gold mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl text-jj-black mb-3">In Nairobi — by rider</h2>
              <p className="text-jj-charcoal/80 font-light leading-relaxed">
                Most of our orders are delivered within Nairobi by a rider, straight to you — from South C and South B to Westlands, Kilimani and Eastleigh. Send us your area on WhatsApp and we&apos;ll confirm the delivery fee and when it will arrive.
              </p>
            </section>
            <section className="bg-white/70 p-8 md:p-10">
              <Package className="h-8 w-8 text-jj-gold mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl text-jj-black mb-3">Outside Nairobi — by parcel</h2>
              <p className="text-jj-charcoal/80 font-light leading-relaxed">
                For other towns we send your order as a parcel. Tell us your town and we&apos;ll arrange it, then confirm the cost and how you&apos;ll collect it.
              </p>
            </section>
          </div>

          <section aria-labelledby="areas-heading" className="mb-16">
            <h2 id="areas-heading" className="font-serif text-3xl text-jj-black mb-4">Areas we deliver to in Nairobi</h2>
            <p className="text-jj-charcoal/80 font-light leading-relaxed max-w-2xl mb-6">
              Our rider covers all of Nairobi. These are the areas we deliver to most often:
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {NAIROBI_AREAS.map((a) => (
                <li key={a} className="border border-jj-black/20 bg-white/70 px-4 py-2 text-jj-black">
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-jj-charcoal/70 font-light">
              Don&apos;t see your area? We still deliver there. Just tell us where you are when you order.
            </p>
          </section>

          <h2 className="font-serif text-3xl text-jj-black mb-8">How it works</h2>
          <ol className="grid md:grid-cols-3 gap-6 mb-16">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-jj-gold pt-5">
                <span className="font-mono text-sm text-jj-gold">0{i + 1}</span>
                <h3 className="font-serif text-xl text-jj-black mt-2 mb-2">{s.title}</h3>
                <p className="text-jj-charcoal/80 font-light leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
            <a
              href={whatsappOrderUrl("Hi JJ Haircare, I'd like to place an order. My location is: ")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-jj-black text-white font-medium px-8 py-4 min-h-[52px] rounded-full uppercase tracking-wider text-sm whitespace-nowrap hover:bg-jj-olive transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Order on WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="inline-flex items-center justify-center gap-2.5 border border-jj-black/70 text-jj-black font-medium px-8 py-4 min-h-[52px] rounded-full uppercase tracking-wider text-sm whitespace-nowrap hover:bg-jj-black hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <p className="text-jj-charcoal/70 font-light">
            If anything arrives damaged or isn&apos;t right, message us straight away. See also our{" "}
            <Link href="/returns" className="underline underline-offset-4 hover:text-jj-black">returns page</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
