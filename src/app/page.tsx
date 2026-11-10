import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutSnippet from "@/components/AboutSnippet";
import Features from "@/components/Features";
import HairGoals from "@/components/HairGoals";
import FeaturedProduct from "@/components/FeaturedProduct";
import JournalSnippet from "@/components/JournalSnippet";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import DeliveryStrip from "@/components/DeliveryStrip";
import SocialStrip from "@/components/SocialStrip";
import FaqTeaser from "@/components/FaqTeaser";

export const metadata = {
  title: { absolute: "Natural Hair Care in Nairobi, Kenya | JJ Haircare" },
  description:
    "Natural hair care made in Nairobi, Kenya: herbal hair oil, hair butters, scalp detox mask and hair mist. Order on WhatsApp or call 0743 600 499.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="bg-jj-ivory min-h-screen relative">
      <Navbar />
      
      {/* 1. Sticky Hero */}
      <div className="md:sticky md:top-0 z-0 md:h-screen md:overflow-hidden">
        <Hero />
      </div>

      {/* 1b. About */}
      <div className="relative z-10 overflow-hidden bg-jj-ivory">
        <Marquee />
        <AboutSnippet />
      </div>

      {/* 2. Overlapping Features */}
      <div className="relative z-[12] overflow-hidden bg-jj-black">
        <Features />
      </div>

      {/* 2b. Shop by hair goal — after Features */}
      <div className="relative z-[15] overflow-hidden bg-gradient-nude">
        <HairGoals />
      </div>

      {/* 2c. Featured product spotlight */}
      <div className="relative z-[18] overflow-hidden bg-[#26301F]">
        <FeaturedProduct />
      </div>

      {/* 3. Overlapping Journal */}
      <div className="relative z-20 overflow-hidden bg-jj-ivory">
        <JournalSnippet />
      </div>

      {/* 4. Overlapping Products */}
      <div className="relative z-30 bg-[#EBE3D5]">
        <Suspense fallback={<div className="min-h-[40vh]" aria-hidden />}>
          <Products />
        </Suspense>
      </div>

      {/* 4b. Ordering and delivery */}
      <div className="relative z-[35] overflow-hidden bg-jj-ivory">
        <DeliveryStrip />
      </div>

      {/* 5. Overlapping Testimonials */}
      <div className="relative z-40 overflow-hidden bg-gradient-nude">
        <Testimonials />
      </div>

      {/* 5b. Social strip */}
      <div className="relative z-[45] overflow-hidden bg-jj-ivory">
        <SocialStrip />
      </div>

      {/* 5c. FAQ teaser */}
      <div className="relative z-[48] overflow-hidden bg-[#EBE3D5]">
        <FaqTeaser />
      </div>

      {/* 6. Footer */}
      <div className="relative z-50 overflow-hidden bg-jj-black">
        <Footer />
      </div>
    </main>
  );
}
