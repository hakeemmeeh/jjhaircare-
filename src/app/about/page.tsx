import Navbar from "@/components/Navbar";
import AboutSection from "@/components/About";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'About Us — Our Story & Team',
  description: 'Meet the naturalists, chemists, and hair care obsessives behind JJHairCare. Learn how we craft premium natural products from ethically sourced ingredients.',
};

export default function AboutPage() {
  return (
    <main className="bg-jj-ivory min-h-screen relative">
      <Navbar />
      
      {/* 1. Sticky About Section */}
      <div className="sticky top-0 z-0 h-screen overflow-hidden">
        <AboutSection />
      </div>
      
      {/* 2. Overlapping Team Section */}
      <div className="relative z-10 -mt-12 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_50px_rgba(0,0,0,0.1)] bg-[#f9f7f4]">
        <Team />
      </div>

      {/* 3. Footer */}
      <div className="relative z-20 -mt-12 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_50px_rgba(0,0,0,0.2)] bg-jj-black">
        <Footer />
      </div>
    </main>
  );
}