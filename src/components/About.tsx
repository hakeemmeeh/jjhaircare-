import { Leaf, Sparkles, Heart } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Only clean, plant-based ingredients. Nothing artificial, ever.",
  },
  {
    icon: Sparkles,
    title: "Handcrafted",
    description: "Small-batch formulations for maximum potency and freshness.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "Never tested on animals. Always kind to the planet.",
  },
];

export default function About() {
  return (
    <section id="about" className="pt-36 pb-20 bg-jj-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-jj-black mb-8 leading-tight">
            Rooted in Nature. <br />
            <span className="italic text-jj-olive">Crafted with Purpose.</span>
          </h1>
          <p className="text-lg md:text-xl text-jj-charcoal/80 font-light leading-relaxed">
            JJHairCare was born from a belief that your hair deserves only the purest, most powerful ingredients nature has to offer. Every product is handcrafted with ethically sourced botanicals, essential oils, and butters — free from sulfates, parabens, and silicones. We celebrate the beauty of natural hair in all its forms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="p-8 rounded-2xl border border-jj-black/10 text-center">
                <div className="w-14 h-14 mx-auto bg-jj-nude rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-jj-black mb-3">{pillar.title}</h3>
                <p className="text-jj-charcoal/70 font-light leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
