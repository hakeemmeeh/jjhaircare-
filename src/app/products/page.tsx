import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/Products";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <main className="bg-jj-black min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-1">
        <ProductsSection />
      </div>
      <Footer />
    </main>
  );
}