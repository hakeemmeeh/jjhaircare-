"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MagneticButton from "@/components/MagneticButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "Products", href: "/products" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Initialize state properly when component mounts
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const menu = mobileMenuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusable?.[0]?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // On non-home pages, the navbar is always solid unless we want it transparent over a dark section.
  // But since our subpages have varied light/dark backgrounds starting at the top,
  // making it always solid on non-home pages is safer for visibility.
  const isSolid = !isHomePage || isScrolled;
  const textColor = isSolid ? "text-white" : "text-jj-black";

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isSolid
            ? "bg-jj-black/95 backdrop-blur-md py-4 shadow-lg"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={clsx("flex items-center gap-3 group", textColor)}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 bg-jj-black border border-white/10 shadow-sm">
              <Image src="/logo.png" alt="JJ Haircare Logo" fill className="object-cover" />
            </div>
            <span className="font-serif text-2xl md:text-3xl lg:text-2xl xl:text-3xl tracking-wider">
              JJ Haircare
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            <ul className="flex items-center gap-5 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.name} className={link.name === "Home" ? "hidden xl:block" : undefined}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "text-xs xl:text-sm uppercase tracking-wider xl:tracking-widest whitespace-nowrap transition-colors",
                      isSolid ? "text-white/80 hover:text-jj-nude" : "text-jj-black/80 hover:text-jj-black"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <MagneticButton>
              <Link href="/products" className={clsx(
                "font-medium px-5 xl:px-7 py-2.5 rounded-full uppercase tracking-wider text-xs xl:text-sm transition-all cursor-pointer block whitespace-nowrap",
                isSolid
                  ? "bg-jj-nude hover:bg-jj-gold text-jj-black hover:shadow-[0_0_15px_rgba(184,150,78,0.4)]"
                  : "bg-jj-black hover:bg-jj-olive text-white hover:shadow-[0_0_15px_rgba(10,10,10,0.2)]"
              )}>
                Shop Now
              </Link>
            </MagneticButton>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            ref={menuToggleRef}
            className={clsx("lg:hidden p-2 relative z-[60]", mobileMenuOpen ? "text-jj-black" : textColor)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay — CSS clip-path reveal (no JS animation lib) */}
      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
        className="fixed inset-0 z-[55] bg-gradient-nude flex flex-col justify-center items-center"
        style={{
          clipPath: mobileMenuOpen
            ? "circle(150% at calc(100% - 2.5rem) 2.5rem)"
            : "circle(0% at calc(100% - 2.5rem) 2.5rem)",
          transition: "clip-path 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
      >
        <ul className="flex flex-col items-center gap-6 text-center">
          {navLinks.map((link, i) => (
            <li
              key={link.name}
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                transitionDelay: mobileMenuOpen ? `${0.1 + i * 0.05}s` : "0s",
              }}
            >
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-4xl md:text-5xl text-jj-black hover:text-jj-olive transition-colors block"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li
            className="mt-6"
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
              transitionDelay: mobileMenuOpen ? `${0.1 + navLinks.length * 0.05}s` : "0s",
            }}
          >
            <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="bg-jj-black text-white font-medium px-10 py-4 rounded-full uppercase tracking-wider text-lg w-full hover:bg-jj-olive transition-colors cursor-pointer text-center block">
              Shop Now
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
