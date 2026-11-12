import { pageMeta } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import JournalFull from "@/components/JournalFull";
import Footer from "@/components/Footer";

export const metadata = pageMeta({
  title: "Our Journal — How JJ Haircare Began",
  description:
    "The origin story of JJ Haircare: how three founders in Nairobi set out to bring simple, plant-based hair care to every crown.",
  path: "/journal",
});

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