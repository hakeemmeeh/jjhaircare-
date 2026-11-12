import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/data/products";

export const metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-36 pb-24 px-6 md:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-jj-gold mb-4">Error 404</p>
          <h1 className="font-serif text-4xl md:text-6xl text-jj-black leading-tight mb-6">
            We can&apos;t find <span className="italic text-jj-olive">that page.</span>
          </h1>
          <p className="text-lg text-jj-charcoal/80 font-light leading-relaxed mb-10">
            The link may be old or mistyped. Here is where most people are headed:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-jj-black text-white font-medium px-7 py-4 min-h-[52px] uppercase tracking-wider text-sm hover:bg-jj-olive transition-colors"
            >
              Shop the collection
            </Link>
            <Link
              href="/contact#order"
              className="inline-flex items-center justify-center rounded-full border border-jj-black/70 text-jj-black font-medium px-7 py-4 min-h-[52px] uppercase tracking-wider text-sm hover:bg-jj-black hover:text-white transition-colors"
            >
              Order now
            </Link>
          </div>
          <ul className="border-t border-jj-black/15">
            {PRODUCTS.map((p) => (
              <li key={p.slug} className="border-b border-jj-black/15">
                <Link href={`/products/${p.slug}`} className="flex items-center justify-between gap-4 py-4 min-h-[56px] text-jj-black hover:text-jj-olive">
                  <span className="font-serif text-xl">{p.name}</span>
                  <span className="text-sm text-jj-charcoal/70">{p.price}</span>
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
