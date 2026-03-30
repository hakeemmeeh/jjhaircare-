import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HairGoals from "@/components/HairGoals";
import JournalSnippet from "@/components/JournalSnippet";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-jj-ivory min-h-screen relative">
      <Navbar />
      
      {/* 1. Sticky Hero */}
      <div className="md:sticky md:top-0 z-0 md:h-screen md:overflow-hidden">
        <Hero />
      </div>

      {/* 2. Overlapping Features */}
      <div className="relative z-10 -mt-12 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_50px_rgba(0,0,0,0.3)] bg-jj-black">
        <Features />
      </div>

      {/* 2b. Shop by hair goal — after Features */}
      <div className="relative z-[15] -mt-12 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_50px_rgba(0,0,0,0.1)] bg-gradient-nude">
        <HairGoals />
      </div>

      {/* 3. Overlapping Journal */}
      <div className="relative z-20 -mt-12 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_50px_rgba(0,0,0,0.1)] bg-jj-ivory">
        <JournalSnippet />
      </div>

      {/* 4. Overlapping Products */}
      <div className="relative z-30 -mt-12 rounded-t-[3rem] shadow-[0_-30px_50px_rgba(0,0,0,0.1)] bg-[#EBE3D5]">
        <Suspense fallback={<div className="min-h-[40vh]" aria-hidden />}>
          <Products />
        </Suspense>
      </div>

      {/* 5. Overlapping Testimonials */}
      <div className="relative z-40 -mt-12 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_50px_rgba(0,0,0,0.1)] bg-gradient-nude">
        <Testimonials />
      </div>

      {/* 6. Footer */}
      <div className="relative z-50 -mt-12 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_50px_rgba(0,0,0,0.2)] bg-jj-black">
        <Footer />
      </div>
    </main>
  );
}
