import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/Products";
import Footer from "@/components/Footer";
import ProductsZoomParallaxIntro from "@/components/ProductsZoomParallaxIntro";

export const metadata = {
  title: 'Shop The Collection — Hair Oil, Butter, Mask & Mist',
  description: 'Explore our full range of handcrafted natural hair care products. Hair Oil, Hair Butter, Hair Mask, and Hair Mist — formulated for every curl type.',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-jj-black">
      <Navbar />
      <Suspense fallback={<div className="min-h-[100dvh] bg-jj-black" aria-hidden />}>
        <ProductsZoomParallaxIntro />
      </Suspense>
      <div className="relative z-30 -mt-12 rounded-t-[3rem] shadow-[0_-24px_48px_rgba(0,0,0,0.12)] overflow-hidden">
        <Suspense fallback={<div className="min-h-[50vh]" aria-hidden />}>
          <ProductsSection />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
