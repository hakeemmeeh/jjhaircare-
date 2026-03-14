import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Testimonials — Crowned by Our Community',
  description: 'Real stories from our community. See how JJHairCare products have transformed curls, coils, and locs across the world.',
};

export default function TestimonialsPage() {
  return (
    <main className="bg-gradient-nude min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-1">
        <TestimonialsSection />
      </div>
      <Footer />
    </main>
  );
}