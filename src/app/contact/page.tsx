import Navbar from "@/components/Navbar";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-1">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}