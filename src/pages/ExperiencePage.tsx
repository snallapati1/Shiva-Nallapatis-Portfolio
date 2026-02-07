import Navbar from "@/components/portfolio/Navbar";
import {Experience} from "@/components/portfolio/Experience";
import Footer from "@/components/portfolio/Footer";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;