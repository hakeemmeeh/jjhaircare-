import Navbar from "@/components/Navbar";
import IngredientsSection from "@/components/Ingredients";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Our Ingredients — What Goes Into Your Crown',
  description: 'Ethically sourced shea butter, Jamaican black castor oil, argan oil, aloe vera, and tea tree oil. Learn about the pure botanicals in every JJHairCare product.',
};

export default function IngredientsPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-1">
        <IngredientsSection />
      </div>
      <Footer />
    </main>
  );
}