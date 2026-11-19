import Link from "next/link";
import { faqs } from "@/data/faqs";

/** Home teaser: three common questions, no JavaScript needed. */
export default function FaqTeaser() {
  const items = [faqs[0], faqs[1], faqs[2]];
  return (
    <section aria-labelledby="faq-heading" className="bg-stone px-6 md:px-12 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">Questions</p>
        <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl text-jj-forest leading-[1.1] mb-8">
          Quick answers
        </h2>
        <div className="border-t border-jj-forest/15">
          {items.map((f) => (
            <details key={f.question} className="group border-b border-jj-forest/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 min-h-[56px] [&::-webkit-details-marker]:hidden">
                <h3 className="font-serif text-lg md:text-xl text-jj-forest">{f.question}</h3>
                <span aria-hidden="true" className="text-2xl text-jj-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 pr-10 text-jj-charcoal/75 font-light leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
        <Link href="/faq" className="inline-flex items-center gap-1.5 mt-8 py-3 text-sm font-medium tracking-[0.06em] text-jj-forest hover:text-jj-accent transition-colors">
          See all questions <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
