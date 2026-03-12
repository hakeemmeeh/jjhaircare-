import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import JournalSnippet from "@/components/JournalSnippet";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-jj-ivory min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <JournalSnippet />
      <Products />
      <Testimonials />
      <Footer />
    </main>
  );
}
