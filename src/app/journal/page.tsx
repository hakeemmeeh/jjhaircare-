import Navbar from "@/components/Navbar";
import JournalFull from "@/components/JournalFull";
import Footer from "@/components/Footer";

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