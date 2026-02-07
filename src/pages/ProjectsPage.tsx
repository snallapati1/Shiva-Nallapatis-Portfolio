import Navbar from "@/components/portfolio/Navbar";
import {Projects} from "@/components/portfolio/Projects";
import Footer from "@/components/portfolio/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;