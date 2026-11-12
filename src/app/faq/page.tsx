import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqs } from "@/data/faqs";
import { whatsappOrderUrl } from "@/data/site-config";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FAQPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <div className="pt-32 pb-24 flex-1 px-6 md:px-12">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-4">Questions</p>
            <h1 className="font-serif text-4xl md:text-6xl text-jj-black leading-tight mb-6">
              Frequently asked <span className="italic text-jj-olive">questions</span>
            </h1>
            <p className="text-lg text-jj-charcoal/80 font-light leading-relaxed mb-8">
              Answers about our products, ordering and delivery. Can&apos;t find yours? Ask us directly.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:items-center lg:items-start xl:items-center">
              <a
                href={whatsappOrderUrl("Hi JJ Haircare, I have a question: ")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-jj-black text-white font-medium px-7 py-4 min-h-[52px] uppercase tracking-wider text-sm hover:bg-jj-olive transition-colors"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Ask on WhatsApp
              </a>
              <Link href="/contact#order" className="py-3 px-2 text-sm uppercase tracking-widest text-jj-black underline underline-offset-8">
                Order form
              </Link>
            </div>
          </div>

          <div className="border-t border-jj-black/15">
            {faqs.map((f, i) => (
              <details key={f.question} open={i === 0} className="group border-b border-jj-black/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 min-h-[64px] [&::-webkit-details-marker]:hidden">
                  <h2 className="font-serif text-xl md:text-2xl text-jj-black">{f.question}</h2>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-jj-black/15 text-xl text-jj-black transition-transform group-open:rotate-45 group-open:bg-jj-black group-open:text-white"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-7 pr-12 text-lg text-jj-charcoal/80 font-light leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
