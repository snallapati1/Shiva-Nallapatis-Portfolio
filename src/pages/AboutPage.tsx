import  Navbar  from "@/components/portfolio/Navbar";
import {About} from "@/components/portfolio/About";
import Footer from "@/components/portfolio/Footer";

const AboutPage = () => {
  return (
    
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
     
      <main className="flex-grow pt-20"> 
        <About />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;