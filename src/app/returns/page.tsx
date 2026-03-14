import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Returns & Exchanges',
  description: 'Not satisfied? Return unopened products within 30 days for a full refund. Learn about our hassle-free returns process.',
};

export default function ReturnsPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24 flex-1">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl text-jj-black mb-8">Returns & <span className="italic text-jj-nude">Exchanges</span></h1>
          
          <div className="prose prose-lg text-jj-charcoal/80 font-sans prose-headings:font-serif prose-headings:text-jj-black prose-a:text-jj-nude hover:prose-a:text-jj-gold transition-colors">
            <p className="text-sm tracking-widest uppercase font-mono text-jj-gold mb-12">Last updated: March 2026</p>

            <p>We accept returns within 30 days of delivery on unopened, unused products in original packaging. Sale items and gift cards are final sale.</p>

            <h3 className="text-2xl mt-12 mb-6">How it Works</h3>
            <ol className="space-y-3 mb-8">
              <li>Email <a href="mailto:support@jjhaircare.com">support@jjhaircare.com</a> with your order number.</li>
              <li>We'll reply within 24 hours with return instructions.</li>
              <li>Ship the item back (tracked). Refund processes within 5–7 business days of receipt.</li>
            </ol>

            <p>For exchanges, initiate a return and place a new order.</p>

            <h3 className="text-2xl mt-12 mb-6">Damaged Products</h3>
            <p>Email us within 7 days with a photo — we'll replace it free, no return needed. Return shipping is the customer's responsibility unless the product arrived damaged or defective.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}