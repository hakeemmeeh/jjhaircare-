"use client";

import { motion } from "framer-motion";

const ingredients = [
  {
    name: "Shea Butter",
    benefit: "Deep moisture and protection from root to tip.",
    description: "Ethically sourced from West Africa, our unrefined Shea Butter is packed with essential fatty acids and vitamins A and E to deeply nourish, repair breakage, and lock in long-lasting moisture.",
    image: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Jamaican Black Castor Oil",
    benefit: "Promotes growth and strengthens strands.",
    description: "Roasted and cold-pressed to retain its nutrient density, this powerful oil stimulates blood flow to the scalp, encouraging healthy growth while thickening and strengthening thinning edges.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Argan Oil",
    benefit: "Restores shine and tames frizz naturally.",
    description: "Often called 'liquid gold', our pure Moroccan Argan Oil coats the hair shaft to smooth cuticles, drastically reducing frizz and leaving your hair with a brilliant, lightweight shine.",
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Aloe Vera",
    benefit: "Soothes the scalp and locks in hydration.",
    description: "Rich in proteolytic enzymes, fresh Aloe Vera juice heals dead skin cells on the scalp, balances pH levels, and acts as a humectant to draw essential water into thirsty curls.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Tea Tree Oil",
    benefit: "Cleanses and refreshes for a healthy scalp.",
    description: "A natural antibacterial and antifungal powerhouse, Tea Tree oil purifies the scalp, unclogs hair follicles, and relieves itchiness and dandruff without stripping natural oils.",
    image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-32 bg-jj-ivory relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-jj-nude" />
              <h4 className="text-jj-nude text-sm uppercase tracking-[0.2em] font-medium">The Formulations</h4>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-jj-black mb-6 leading-tight">
              What Goes Into <br className="hidden md:block" />
              <span className="italic text-jj-olive">Your Crown</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-jj-charcoal/70 font-light text-lg md:text-xl max-w-md pb-2"
          >
            We source only the finest botanicals to craft formulations that perform. Purity you can feel.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[400px] md:auto-rows-[450px]">
          {ingredients.map((item, index) => {
            // Determine Bento grid span classes based on index
            let gridClasses = "col-span-1 row-span-1";
            
            if (index === 0) {
              // Shea Butter: Hero ingredient, large square/rectangle
              gridClasses = "md:col-span-2 md:row-span-2";
            } else if (index === 1) {
              // Castor Oil: Wide rectangle top right
              gridClasses = "md:col-span-2 md:row-span-1";
            } else if (index === 2) {
              // Argan Oil: Square bottom middle
              gridClasses = "md:col-span-1 md:row-span-1";
            } else if (index === 3) {
              // Aloe Vera: Square bottom right
              gridClasses = "md:col-span-1 md:row-span-1";
            } else if (index === 4) {
              // Tea Tree Oil: Wide rectangle spanning bottom
              gridClasses = "md:col-span-4 md:row-span-1";
            }

            return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] bg-white/70 backdrop-blur-md border border-jj-black/5 hover:bg-white shadow-sm hover:-translate-y-2 transition-all duration-500 p-8 flex flex-col gap-6 ${gridClasses}`}
            >
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="font-serif text-3xl md:text-4xl text-jj-black group-hover:text-jj-gold transition-colors duration-500">
                  {item.name}
                </h3>
                <p className="text-jj-black font-medium text-lg">
                  {item.benefit}
                </p>
                <p className="text-jj-black/70 font-light text-sm md:text-base line-clamp-3 md:line-clamp-none mt-2">
                  {item.description}
                </p>
              </div>

              <div className="flex-1 w-full rounded-2xl overflow-hidden relative min-h-[150px] bg-[#EBE3D5]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}