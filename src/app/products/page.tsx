import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/Products";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Shop The Collection — Hair Oil, Butter, Mask & Mist',
  description: 'Explore our full range of handcrafted natural hair care products. Hair Oil, Hair Butter, Hair Mask, and Hair Mist — formulated for every curl type.',
};

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