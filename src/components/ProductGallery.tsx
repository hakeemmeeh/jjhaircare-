"use client";

import { useState } from "react";
import ZoomImage from "./ZoomImage";

/** Main product image (hover zoom) with small thumbnails underneath when there is more than one photo. */
export default function ProductGallery({
  images,
  alt,
  aspect,
}: {
  images: string[];
  alt: string;
  aspect: string;
}) {
  const [index, setIndex] = useState(0);
  const current = images[index] ?? images[0];

  return (
    <div>
      <ZoomImage
        key={current}
        src={current}
        alt={alt}
        className={`${aspect} rounded-sm bg-jj-black/5`}
      />
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-5 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1} of ${images.length}`}
              aria-current={i === index}
              className={`relative aspect-square overflow-hidden rounded-sm bg-jj-black/5 border-2 transition-colors cursor-pointer ${
                i === index ? "border-jj-gold" : "border-transparent hover:border-jj-black/20"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
