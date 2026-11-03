"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ZoomImage from "./ZoomImage";

/** Swipeable product image carousel (arrows, dots, thumbnails). Single photo = plain zoom image. */
export default function ProductGallery({
  images,
  alt,
  aspect,
}: {
  images: string[];
  alt: string;
  aspect: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const many = images.length > 1;

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const n = (i + images.length) % images.length;
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
    setIndex(n);
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  if (!many) {
    return <ZoomImage src={images[0]} alt={alt} priority className={`${aspect} rounded-sm bg-jj-black/5`} />;
  }

  return (
    <div>
      <div className="relative">
        <div
          ref={track}
          onScroll={onScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((src, i) => (
            <div key={src} className="min-w-full snap-center">
              <ZoomImage src={src} alt={`${alt} — photo ${i + 1}`} priority={i === 0} className={`${aspect} bg-jj-black/5`} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 text-jj-black shadow flex items-center justify-center hover:bg-white cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 text-jj-black shadow flex items-center justify-center hover:bg-white cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 pointer-events-none">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/60"}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-5 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show photo ${i + 1} of ${images.length}`}
            className={`relative aspect-square overflow-hidden rounded-sm bg-jj-black/5 border-2 transition-colors cursor-pointer ${
              i === index ? "border-jj-gold" : "border-transparent hover:border-jj-black/20"
            }`}
          >
            <Image src={src} alt="" fill sizes="120px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
