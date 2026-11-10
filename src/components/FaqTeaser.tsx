import Link from "next/link";
import { faqs } from "@/data/faqs";

/** Home teaser: three common questions, no JavaScript needed. */
export default function FaqTeaser() {
  const items = [faqs[0], faqs[1], faqs[2]];
  return (
    <section aria-labelledby="faq-heading" className="bg-[#EBE3D5] px-6 md:px-12 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-olive mb-3">Questions</p>
        <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl text-jj-black leading-tight mb-8">
          Quick answers
        </h2>
        <div className="border-t border-jj-black/15">
          {items.map((f) => (
            <details key={f.question} className="group border-b border-jj-black/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 min-h-[56px] [&::-webkit-details-marker]:hidden">
                <h3 className="font-serif text-lg md:text-xl text-jj-black">{f.question}</h3>
                <span aria-hidden="true" className="text-2xl text-jj-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 pr-10 text-jj-charcoal/80 font-light leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
        <Link href="/faq" className="inline-block mt-8 py-3 text-sm uppercase tracking-widest text-jj-black underline underline-offset-8">
          See all questions →
        </Link>
      </div>
    </section>
  );
}
