import Navbar from "@/components/Navbar";
import IngredientsSection from "@/components/Ingredients";
import Footer from "@/components/Footer";

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