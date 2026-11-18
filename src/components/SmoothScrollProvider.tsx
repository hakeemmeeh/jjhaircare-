"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect, useMemo, useState } from "react";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(pointer: fine) and (min-width: 1025px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setIsDesktop(desktop.matches);
      setPrefersReducedMotion(reduced.matches);
    };
    update();
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
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