"use client";

import { motion } from "framer-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  maskColor?: string; // e.g., "bg-jj-ivory", "bg-jj-black"
  className?: string;
}

export default function ImageReveal({ children, maskColor = "bg-jj-ivory", className = "" }: ImageRevealProps) {
  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      {/* The Image/Content scaling down */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full relative"
      >
        {children}
      </motion.div>

      {/* The Solid Mask sliding away */}
      <motion.div
        initial={{ y: "0%" }}
        whileInView={{ y: "-100%" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`absolute inset-0 z-10 ${maskColor}`}
      />
    </div>
  );
}