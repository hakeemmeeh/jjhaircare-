import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/Testimonials";
import Footer from "@/components/Footer";

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