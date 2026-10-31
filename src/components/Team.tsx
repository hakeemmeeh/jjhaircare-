"use client";

import { motion } from "framer-motion";

const teamMembers = [
  { name: "Umi Hussein", role: "Founder", initials: "UH" },
  { name: "Zeitun Ibrahim", role: "Founder", initials: "ZI" },
  { name: "Dr. Muleha Hussein", role: "Founder", initials: "MH" },
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
            The founders of JJ Haircare.
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
              <div className="w-32 h-32 rounded-full border border-jj-olive/50 relative flex items-center justify-center bg-jj-black">
                <div className="absolute inset-0 border-[3px] border-jj-gold rounded-full scale-100 opacity-100 md:scale-110 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 transition-all duration-500 z-10 box-border pointer-events-none" />
                <span className="font-serif text-4xl text-jj-gold tracking-wide">{member.initials}</span>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="font-sans font-bold text-xl text-jj-black mb-1">{member.name}</h3>
                <p className="font-mono text-xs text-jj-gold uppercase tracking-widest mb-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
