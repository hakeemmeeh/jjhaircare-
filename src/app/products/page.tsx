import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Shop Natural Hair Oil, Butter, Mask & Mist',
  description: 'Explore JJ Haircare: Herbal Hair Oil, Scalp Detox Mask, Hibiscus Hair Butter, Moringa Hair Butter and Hair Mist — natural hair care from Nairobi.',
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-jj-ivory flex flex-col">
      <Navbar />
      <div className="flex-1">
        <ProductGrid />
      </div>
      <Footer />
    </main>
  );
}
