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
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-1">
        <AboutSection />
        <Team />
      </div>
      <Footer />
    </main>
  );
}