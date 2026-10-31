import Navbar from "@/components/Navbar";
import AboutSection from "@/components/About";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'About Us — Our Story & Founders',
  description: 'Meet the founders behind JJ Haircare and the story of our natural hair care from Nairobi.',
};

export default function AboutPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <AboutSection />
        <Team />
      </div>
      <Footer />
    </main>
  );
}
