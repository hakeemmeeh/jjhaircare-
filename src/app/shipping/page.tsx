import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Shipping Policy',
  description: 'Free shipping on orders over $50. We ship worldwide from Nairobi. Learn about delivery times, tracking, and international shipping.',
};

export default function ShippingPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24 flex-1">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl text-jj-black mb-8">Shipping <span className="italic text-jj-nude">Policy</span></h1>
          
          <div className="prose prose-lg text-jj-charcoal/80 font-sans prose-headings:font-serif prose-headings:text-jj-black prose-a:text-jj-nude hover:prose-a:text-jj-gold transition-colors">
            <p className="text-sm tracking-widest uppercase font-mono text-jj-gold mb-12">Last updated: March 2026</p>

            <p>Orders are processed within 1–3 business days. All shipments include tracking sent to your email.</p>

            <h3 className="text-2xl mt-12 mb-6">Rates & Delivery Times</h3>
            <ul className="space-y-3 mb-8">
              <li><strong>Kenya Standard (5–7 days):</strong> KES 300 | <strong>Express (2–3 days):</strong> KES 600</li>
              <li><strong>East Africa (5–10 days):</strong> $8 | <strong>Rest of Africa (7–14 days):</strong> $12</li>
              <li><strong>US, Canada, UK & Europe (10–18 days):</strong> $15</li>
              <li><strong>Rest of World (14–21 days):</strong> $20</li>
              <li><strong>Free shipping:</strong> orders over KES 5,000 (domestic) or $100 (international)</li>
            </ul>

            <p>International orders may be subject to customs duties — these are the buyer's responsibility.</p>
            <p>If your package is damaged or lost, email <a href="mailto:support@jjhaircare.com">support@jjhaircare.com</a> within 7 days and we'll reship or refund in full.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}