import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[780px] w-full overflow-hidden bg-[#e8f2ec] pt-24 sm:min-h-[840px] md:min-h-[min(920px,100dvh)] md:pt-20">
      <Image
        src="/images/luxury-mint-green-haircare-collection.png"
        alt="JJ Haircare's complete natural collection arranged on a marble display"
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-[1.1] translate-y-[6%] object-cover object-[61%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(235,246,239,0.98)_0%,rgba(235,246,239,0.94)_24%,rgba(235,246,239,0.78)_37%,rgba(235,246,239,0.12)_62%,rgba(235,246,239,0)_100%)] max-md:bg-[linear-gradient(90deg,rgba(235,246,239,0.97)_0%,rgba(235,246,239,0.91)_48%,rgba(235,246,239,0.45)_76%,rgba(235,246,239,0.1)_100%)]" />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1800px] items-center px-5 pb-16 pt-12 sm:px-10 md:min-h-[min(820px,calc(100dvh-5rem))] md:px-[clamp(2.5rem,7vw,8rem)] md:pb-20">
        <div className="w-full max-w-[600px]">
          <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-jj-olive sm:text-sm sm:tracking-[0.25em]">
            <span aria-hidden="true" className="h-px w-8 bg-jj-olive/60" />
            Herbal hair care · Nairobi, Kenya
          </p>

          <h1 className="mb-6 font-serif text-[2.65rem] font-bold leading-[1.06] tracking-tight text-jj-black sm:text-6xl xl:text-7xl">
            Natural hair care,{" "}
            <span className="block italic text-jj-olive">made in Nairobi.</span>
          </h1>

          <p className="mb-8 max-w-md text-base font-light leading-relaxed text-jj-charcoal/80 sm:text-lg md:mb-10 md:text-xl">
            Herbal oil, butters, a scalp mask and hair mist for natural, curly and coily hair.
          </p>

          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact#order"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-jj-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-jj-olive"
            >
              Order now <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-full border border-jj-black/70 bg-white/35 px-8 py-4 text-sm font-medium uppercase tracking-wider text-jj-black backdrop-blur-sm transition-colors duration-300 hover:bg-jj-black hover:text-white"
            >
              Shop the collection
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.12em] text-jj-charcoal/65 sm:text-xs sm:tracking-widest">
            <li>100% natural ingredients</li>
            <li>Hair oil · Butters · Scalp mask · Mist</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
