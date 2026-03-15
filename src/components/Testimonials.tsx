"use client";

import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The Hair Oil completely transformed my curls. My hair has never been this soft and defined.",
    name: "Amara K.",
    designation: "4C Coils",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "I've tried dozens of products, and JJHairCare is the only brand I trust with my locs. The Hair Butter is everything.",
    name: "David T.",
    designation: "Locs",
    src: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "The Hair Mist is my holy grail. Lightweight, smells amazing, and keeps my hair moisturized all day.",
    name: "Priya S.",
    designation: "3B Curls",
    src: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "The Hair Mask brought my damaged hair back to life. I use it every week now — absolute game changer.",
    name: "Nia R.",
    designation: "3C Curls",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-gradient-nude relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 flex flex-col items-center">
          <p className="text-xs tracking-[3.5px] uppercase text-[#a0784c] mb-2 text-center font-serif">
            Testimonials
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-medium text-[#2c1810] mb-4 text-center"
          >
            Crowned by Our Community
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6b5440] mb-12 text-center max-w-lg"
          >
            Real stories from real crowns.
          </motion.p>
        </div>

        <div className="w-full max-w-[1456px] flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#2c1810",
              designation: "#a0784c",
              testimony: "#3d2b1f",
              arrowBackground: "#3d2b1f",
              arrowForeground: "#faf5ef",
              arrowHoverBackground: "#c9a96e",
            }}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "20px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
