import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using the JJHairCare website and purchasing our products.',
};

export default function TermsPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24 flex-1">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl text-jj-black mb-8">Terms of <span className="italic text-jj-nude">Service</span></h1>
          
          <div className="prose prose-lg text-jj-charcoal/80 font-sans prose-headings:font-serif prose-headings:text-jj-black prose-a:text-jj-nude hover:prose-a:text-jj-gold transition-colors">
            <p className="text-sm tracking-widest uppercase font-mono text-jj-gold mb-12">Last updated: March 2026</p>

            <p>By using jjhaircare.com, you agree to these terms.</p>
            <p>Prices are in USD unless stated otherwise and may change without notice. We may cancel orders due to pricing errors or suspected fraud. All site content (text, images, logos, design) is our intellectual property — do not reproduce without permission.</p>
            <p>Our products are for external hair and scalp use only. Always patch test before first use. Liability for any product claim is limited to the purchase price. By submitting reviews or testimonials, you grant us permission to use that content on our platforms.</p>
            <p>These terms are governed by the laws of Kenya. Questions? Email <a href="mailto:legal@jjhaircare.com">legal@jjhaircare.com</a>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}