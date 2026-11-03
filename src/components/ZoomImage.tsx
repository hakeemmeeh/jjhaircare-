"use client";

import Image from "next/image";
import { useRef, useState } from "react";

/**
 * Product image with hover-zoom: on desktop the image enlarges and follows the cursor so
 * small print on the artwork can be read. On touch screens it is a plain image.
 */
export default function ZoomImage({
  src,
  alt,
  className = "",
  zoom = 2,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  zoom?: number;
  sizes?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState("50% 50%");
  const [active, setActive] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={onMove}
      className={`relative overflow-hidden lg:cursor-zoom-in ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        draggable={false}
        className="object-cover transition-transform duration-300 ease-out"
        style={{
          transformOrigin: origin,
          transform: active ? `scale(${zoom})` : "scale(1)",
        }}
      />
    </div>
  );
}
