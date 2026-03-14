import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Privacy Policy',
  description: 'How JJHairCare collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24 flex-1">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl text-jj-black mb-8">Privacy <span className="italic text-jj-nude">Policy</span></h1>
          
          <div className="prose prose-lg text-jj-charcoal/80 font-sans prose-headings:font-serif prose-headings:text-jj-black prose-a:text-jj-nude hover:prose-a:text-jj-gold transition-colors">
            <p className="text-sm tracking-widest uppercase font-mono text-jj-gold mb-12">Last updated: March 2026</p>

            <p>JJHairCare collects your name, email, shipping address, and payment info when you place an order. We also collect basic browsing data (browser type, pages visited) via cookies and analytics.</p>
            <p>We use this data to fulfill orders, send shipping updates, and improve our site. Marketing emails are only sent if you subscribe — unsubscribe anytime.</p>
            <p>We never sell your data. We share it only with payment processors, shipping providers, and analytics tools (anonymized) as needed to operate.</p>
            <p>You can request access, correction, or deletion of your data at any time by emailing <a href="mailto:privacy@jjhaircare.com">privacy@jjhaircare.com</a>. We use SSL encryption to protect your information. This policy may be updated — changes will be posted here.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}