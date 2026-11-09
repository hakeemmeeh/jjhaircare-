import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Real Results on Real Hair',
  description: 'See JJ Haircare on real hair. Follow our community on TikTok and Instagram for results, routines and new arrivals from Nairobi.',
  alternates: { canonical: '/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <main className="bg-gradient-nude min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-1">
        <TestimonialsSection asPage />
      </div>
      <Footer />
    </main>
  );
}