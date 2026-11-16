import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Camera, MessageCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialStrip from "@/components/SocialStrip";
import { whatsappOrderUrl } from "@/data/site-config";

export const metadata = pageMeta({
  title: "Real Results on Real Hair",
  description:
    "See JJ Haircare on real hair. Follow our community on TikTok and Instagram for results, routines and new arrivals from Nairobi.",
  path: "/testimonials",
});

const ways = [
  { icon: Camera, title: "Share a photo", text: "Send us a before and after, or tag us on Instagram or TikTok." },
  { icon: Star, title: "Tell us how it went", text: "A few honest lines about what changed for your hair." },
  { icon: MessageCircle, title: "Ask a customer question", text: "Not sure what suits your hair? Message us and we'll help." },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-jj-ivory min-h-[100vw] flex flex-col">
      <Navbar />
      <div className="pt-32 flex-1">
        <div className="px-6 md:px-12 pb-14 md:pb-20">
          <div className="mx-auto max-w-[90%]">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.3em] text-jj-gold mb-4">Real results</p>
            <h1 className="font-serif text-[2.25rem] md:text-[3.75rem] text-jj-black leading-tight mb-6">
              See it <span className="italic text-jj-olive">on real hair</span>
            </h1>
            <p className="text-[1.125rem] md:text-[1.25rem] text-jj-charcoal/80 font-light leading-relaxed max-w-[53%]">
              Our customers share their routines and results on TikTok and Instagram. Have a look, then share yours.
            </p>
          </div>
        </div>

        <SocialStrip />

        <section aria-labelledby="share-heading" className="px-6 md:px-12 py-14 md:py-20">
          <div className="mx-auto max-w-[90%] grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
            <div>
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.3em] text-jj-gold mb-3">Your turn</p>
              <h2 id="share-heading" className="font-serif text-[1.875rem] md:text-[2.25rem] text-jj-black leading-tight mb-5">
                Used JJ Haircare? <span className="italic text-jj-olive">Show us.</span>
              </h2>
              <p className="text-jj-charcoal/80 font-light leading-relaxed mb-8">
                With your permission we&apos;ll feature your result here, so others can see what to expect.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={whatsappOrderUrl("Hi JJ Haircare, I'd like to share my result: ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-[9999px] bg-jj-black text-white font-medium px-[0.438em] py-[0.25em] min-h-[52px] uppercase tracking-wider text-[0.875rem] hover:bg-jj-olive transition-colors"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Share on WhatsApp
                </a>
                <Link href="/products" className="py-3 px-2 text-[0.875rem] uppercase tracking-widest text-jj-black underline underline-offset-8">
                  Shop the collection
                </Link>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {ways.map(({ icon: Icon, title, text }) => (
                <li key={title} className="rounded-[16px] border-[1px] border-jj-black/10 bg-white/70 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[9999px] bg-jj-black/5 text-jj-black mb-4">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-[1.25rem] text-jj-black mb-2">{title}</h3>
                  <p className="text-jj-charcoal/80 font-light leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
