import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

/**
 * CSS-only hover lift. Replaces the old framer-motion magnetic effect
 * (which shipped ~219 KB of JS for a decorative hover).
 */
export default function MagneticButton({ children, className = "" }: MagneticButtonProps) {
  return (
    <div
      className={`inline-block transition-transform duration-300 ease-out hover:scale-[1.03] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none ${className}`}
    >
      {children}
    </div>
  );
}