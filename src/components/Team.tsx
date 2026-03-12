"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Umi Hussein.",
    role: "Founder & Formulator",
    bio: '"Started JJ Haircare from her kitchen. Now in 12 countries."',
    image: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Zeitun ibrahim",
    role: "Head of Product",
    bio: '"Former L\'Oréal. Left to build something real."',
    image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "DR Muleha Hussein",
    role: "Chief Botanist",
    bio: '"PhD in plant chemistry. Obsessed with baobab."',
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Team() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-jj-ivory to-jj-black/10 relative z-10 border-t border-jj-olive/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col gap-4 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif text-jj-black"
          >
            The Hands Behind the Formula.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-jj-black/70 text-lg md:text-xl"
          >
            A team of naturalists, chemists, and hair care obsessives.
          </motion.p>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-10 snap-x snap-mandatory hide-scroll">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="min-w-[280px] md:min-w-0 snap-start group bg-white/70 backdrop-blur-md rounded-[2rem] p-6 pb-8 flex flex-col gap-6 text-center items-center border border-jj-black/5 shadow-sm hover:-translate-y-2 hover:bg-white hover:border-jj-gold/30 transition-all duration-500 will-change-transform cursor-pointer"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border border-jj-olive/50 relative">
                <div className="absolute inset-0 border-[3px] border-jj-gold rounded-full scale-100 opacity-100 md:scale-110 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 transition-all duration-500 z-10 box-border pointer-events-none" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="flex flex-col items-center">
                <h3 className="font-sans font-bold text-xl text-jj-black mb-1">{member.name}</h3>
                <p className="font-mono text-xs text-jj-gold uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="font-serif text-jj-black/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
