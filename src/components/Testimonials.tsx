"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

const testimonials = [
  {
    quote: "The Hair Oil completely transformed my curls. My hair has never been this soft and defined.",
    name: "Amara K.",
    hairType: "4C Coils",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "I've tried dozens of products, and JJHairCare is the only brand I trust with my locs. The Hair Butter is everything.",
    name: "David T.",
    hairType: "Locs",
    image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "The Hair Mist is my holy grail. Lightweight, smells amazing, and keeps my hair moisturized all day.",
    name: "Priya S.",
    hairType: "3B Curls",
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "The Hair Mask brought my damaged hair back to life. I use it every week now — absolute game changer.",
    name: "Nia R.",
    hairType: "3C Curls",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-32 bg-gradient-nude relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-jj-black"
          >
            Crowned by <span className="italic text-jj-olive">Our Community</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote mark decoration */}
          <div className="absolute -top-10 left-0 md:-left-10 text-jj-gold/20 z-0">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          <div className="overflow-hidden relative z-10" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex-[0_0_100%] min-w-0 px-4 flex flex-col items-center text-center"
                >
                  <p className="font-serif italic text-2xl md:text-4xl text-jj-black leading-relaxed mb-10 text-balance">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-jj-gold p-1 mb-4 shadow-lg">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h4 className="font-medium text-jj-black text-lg">{testimonial.name}</h4>
                    <p className="text-jj-charcoal/60 text-sm uppercase tracking-wider mt-1">
                      {testimonial.hairType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-12 relative z-10">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-jj-black/10 flex items-center justify-center hover:bg-jj-black hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={clsx(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === selectedIndex ? "bg-jj-gold w-6" : "bg-jj-black/20"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-jj-black/10 flex items-center justify-center hover:bg-jj-black hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
