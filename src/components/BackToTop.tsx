"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 md:bottom-28 md:right-9 z-[90] w-12 h-12 bg-jj-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-jj-nude hover:text-jj-black transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? "opacity-100 scale-100 translate-y-0" : "pointer-events-none opacity-0 scale-50 translate-y-5"
      }`}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}