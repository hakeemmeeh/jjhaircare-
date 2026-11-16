import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/data/products";

export const metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="bg-jj-ivory min-h-[100vw] flex flex-col">
      <Navbar />
      <div className="flex-1 pt-36 pb-24 px-6 md:px-12">
        <div className="mx-auto max-w-[60%]">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.3em] text-jj-gold mb-4">Error 404</p>
          <h1 className="font-serif text-[2.25rem] md:text-[3.75rem] text-jj-black leading-tight mb-6">
            We can&apos;t find <span className="italic text-jj-olive">that page.</span>
          </h1>
          <p className="text-[1.125rem] text-jj-charcoal/80 font-light leading-relaxed mb-10">
            The link may be old or mistyped. Here is where most people are headed:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-[9999px] bg-jj-black text-white font-medium px-[0.438em] py-[0.25em] min-h-[52px] uppercase tracking-wider text-[0.875rem] hover:bg-jj-olive transition-colors"
            >
              Shop the collection
            </Link>
            <Link
              href="/contact#order"
              className="inline-flex items-center justify-center rounded-[9999px] border-[1px] border-jj-black/70 text-jj-black font-medium px-[0.438em] py-[0.25em] min-h-[52px] uppercase tracking-wider text-[0.875rem] hover:bg-jj-black hover:text-white transition-colors"
            >
              Order now
            </Link>
          </div>
          <ul className="border-[1px] border-jj-black/15">
            {PRODUCTS.map((p) => (
              <li key={p.slug} className="border-[1px] border-jj-black/15">
                <Link href={`/products/${p.slug}`} className="flex items-center justify-between gap-4 py-4 min-h-[56px] text-jj-black hover:text-jj-olive">
                  <span className="font-serif text-[1.25rem]">{p.name}</span>
                  <span className="text-[0.875rem] text-jj-charcoal/70">{p.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
