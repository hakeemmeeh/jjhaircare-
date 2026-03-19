"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
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
  { name: "Ingredients", href: "/ingredients" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // On non-home pages, the navbar is always solid unless we want it transparent over a dark section.
  // But since our subpages have varied light/dark backgrounds starting at the top,
  // making it always solid on non-home pages is safer for visibility.
  const isSolid = !isHomePage || isScrolled;
  const textColor = isSolid ? "text-white" : "text-jj-black";
  const hoverColor = isSolid ? "hover:text-jj-nude" : "hover:text-jj-olive";

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
              <Image src="/logo.png" alt="JJHairCare Logo" fill className="object-cover" />
            </div>
            <span className="font-serif text-2xl md:text-3xl tracking-wider">
              JJHairCare
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "text-sm uppercase tracking-widest transition-colors",
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
                "font-medium px-6 py-2.5 rounded-sm uppercase tracking-wider text-sm transition-all cursor-pointer block",
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
            className={clsx("md:hidden p-2 relative z-[60]", mobileMenuOpen ? "text-jj-black" : textColor)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-gradient-nude flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-4xl md:text-5xl text-jj-black hover:text-jj-olive transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.4 }}
                className="mt-6"
              >
                <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="bg-jj-black text-white font-medium px-10 py-4 rounded-full uppercase tracking-wider text-lg w-full hover:bg-jj-olive transition-colors cursor-pointer text-center block">
                  Shop Now
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
