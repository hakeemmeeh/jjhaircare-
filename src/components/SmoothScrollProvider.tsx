"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [isCoarseOrMobile, setIsCoarseOrMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse), (max-width: 1024px)");
    const updateInputMode = () => setIsCoarseOrMobile(mediaQuery.matches);

    updateInputMode();
    mediaQuery.addEventListener("change", updateInputMode);
    return () => mediaQuery.removeEventListener("change", updateInputMode);
  }, []);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  const options = useMemo(
    () =>
      isCoarseOrMobile
        ? {
            // Mobile/tablet: keep scrolling close to native and responsive.
            lerp: 0.2,
            duration: 0.85,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1,
          }
        : {
            // Desktop: smoother, premium glide similar to editorial sites.
            lerp: 0.1,
            duration: 1.35,
            smoothWheel: true,
            wheelMultiplier: 0.85,
            touchMultiplier: 1,
          },
    [isCoarseOrMobile]
  );

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}