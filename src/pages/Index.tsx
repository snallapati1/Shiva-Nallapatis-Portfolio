import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
    
      <main className="flex-grow">
        <Hero />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;