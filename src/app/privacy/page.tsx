import { pageMeta } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = pageMeta({
  title: "Privacy Policy — How We Handle Your Data",
  description:
    "How JJ Haircare collects, uses, and protects your personal information when you browse the site or place an order.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main" className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24 flex-1">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl text-jj-black mb-8">Privacy <span className="italic text-jj-nude">Policy</span></h1>
          
          <div className="prose prose-lg text-jj-charcoal/80 font-sans prose-headings:font-serif prose-headings:text-jj-black prose-a:text-jj-nude hover:prose-a:text-jj-gold transition-colors">
            <p className="text-sm tracking-widest uppercase font-mono text-jj-gold mb-12">Last updated: November 2026</p>

            <p>This website does not currently provide online checkout or take payment details. If you contact JJ Haircare by email or WhatsApp to ask a question or place an order, you may choose to share contact, delivery, and order details so we can respond and arrange your request.</p>
            <p>Please avoid sending payment card details by email or WhatsApp. Any delivery or payment arrangements are discussed directly with you when you place an order.</p>
            <p>This site does not currently use analytics tools or advertising cookies. Your browser may store necessary technical data to load and secure the site.</p>
            <p>You can request access, correction, or deletion of information you have shared with us by emailing <a href="mailto:jjherbal744@gmail.com">jjherbal744@gmail.com</a>. This policy may be updated — changes will be posted here.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
