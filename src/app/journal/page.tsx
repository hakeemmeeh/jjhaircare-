import Navbar from "@/components/Navbar";
import JournalFull from "@/components/JournalFull";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'The Journal — How It All Began',
  description: 'From a tiny kitchen to a global brand. Read the origin story of JJHairCare and our mission to bring pure, natural care to every crown.',
};

export default function JournalPage() {
  return (
    <main className="bg-jj-ivory min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-1">
        <JournalFull />
      </div>
      <Footer />
    </main>
  );
}