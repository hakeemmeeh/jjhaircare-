const teamMembers = [
  { name: "Umi Hussein", role: "Founder", initials: "UH" },
  { name: "Zeitun Ibrahim", role: "Founder · Operations", initials: "ZI" },
  { name: "Dr. Muleha Hussein", role: "Founder · Marketing", initials: "MH" },
];

export default function Team() {
  return (
    <section className="py-20 px-6 md:px-12 border-[1px] border-jj-black/10">
      <div className="max-w-[80%] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-[1.875rem] md:text-[3rem] font-serif text-jj-black mb-3">The Founders</h2>
          <p className="font-sans text-jj-black/70 text-[1.125rem]">The people behind JJ Haircare.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center gap-4">
              <div className="w-28 h-28 rounded-[9999px] bg-jj-black flex items-center justify-center">
                <span className="font-serif text-[1.875rem] text-jj-gold tracking-wide">{member.initials}</span>
              </div>
              <div>
                <h3 className="font-sans font-bold text-[1.25rem] text-jj-black">{member.name}</h3>
                <p className="font-mono text-[0.75rem] text-jj-gold uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
