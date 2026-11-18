"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 1025px)");
    const update = () => setIsDesktop(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const options = useMemo(
    () => ({
      lerp: 0.1,
      duration: 1.35,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
    }),
    [],
  );

  // Skip lenis on mobile, touch devices, and reduced-motion users.
  // Native scroll is smoother and lighter on mobile than JS-based smooth scroll.
  if (!isDesktop || prefersReducedMotion) return <>{children}</>;

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}