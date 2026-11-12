import Link from "next/link";
import { Bike, Package, MessageCircle } from "lucide-react";
import { whatsappOrderUrl } from "@/data/site-config";

const steps = [
  { n: "01", title: "Message us", text: "Tell us what you'd like and where you are." },
  { n: "02", title: "We confirm", text: "We confirm your order, delivery cost and timing." },
  { n: "03", title: "We deliver", text: "By rider in Nairobi, by parcel to other towns." },
];

/** Home strip: how ordering and delivery work. */
export default function DeliveryStrip() {
  return (
    <section aria-labelledby="delivery-heading" className="bg-jj-ivory px-6 md:px-12 py-14 md:py-20">
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-4">Ordering &amp; delivery</p>
          <h2 id="delivery-heading" className="font-serif text-3xl md:text-4xl text-jj-black leading-tight mb-5">
            Order on WhatsApp. <span className="italic text-jj-olive">We bring it to you.</span>
          </h2>
          <ul className="space-y-3 text-jj-charcoal/80 font-light mb-8">
            <li className="flex items-start gap-3">
              <Bike className="h-5 w-5 mt-1 shrink-0 text-jj-gold" aria-hidden="true" />
              <span><strong className="font-medium text-jj-black">Nairobi:</strong> delivered by rider.</span>
            </li>
            <li className="flex items-start gap-3">
              <Package className="h-5 w-5 mt-1 shrink-0 text-jj-gold" aria-hidden="true" />
              <span><strong className="font-medium text-jj-black">Other towns:</strong> sent by parcel.</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href={whatsappOrderUrl("Hi JJ Haircare, I'd like to place an order. My location is: ")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-jj-black text-white font-medium px-8 py-4 min-h-[52px] rounded-full uppercase tracking-wider text-sm whitespace-nowrap hover:bg-jj-olive transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Order on WhatsApp
            </a>
            <Link href="/shipping" className="py-3 text-sm uppercase tracking-widest text-jj-black underline underline-offset-8">
              Delivery details
            </Link>
          </div>
        </div>

        <ol className="grid sm:grid-cols-3 gap-6">
          {steps.map((s) => (
            <li key={s.n} className="border-t-2 border-jj-gold pt-5">
              <span className="font-mono text-sm text-jj-gold">{s.n}</span>
              <h3 className="font-serif text-xl text-jj-black mt-2 mb-2">{s.title}</h3>
              <p className="text-jj-charcoal/80 font-light leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
