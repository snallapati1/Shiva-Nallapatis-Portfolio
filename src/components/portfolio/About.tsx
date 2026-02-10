import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-section-alt">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGjRrnxgIRHbQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715231524086?e=1772064000&v=beta&t=ZKYHMeQixcWCJFqfm1GbZtZiZmfdHpwGCH3NIkXeOJU" 
                  alt="Shiva Nallapati" 
                  className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border-2 border-accent/20 glow"
                />
                <div className="absolute -inset-2 bg-accent/20 rounded-2xl -z-10 blur-xl" />
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! It's nice to meet you! I'm a senior Computer Science student at <span className="text-foreground font-medium">The Ohio State University</span>, 
                graduating in may of 2026. I'm from Chicago, IL, I love playing sports
                and I'm passionate in lots of different fields including neuroscience, space exploration, cooking, and of course software engineering.
                I've always been curious and wanting to constantly learn new things, which, brought me here!
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From architecting production-grade MCP servers at <span className="text-foreground font-medium">Loop Returns</span> to 
                collaborating on NASA's Artemis program through <span className="text-foreground font-medium">L'SPACE</span>, I thrive 
                on tackling complex technical challenges while working in multidisciplinary teams.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                If you'd like to get to know me more personally, check out my{" "}
                <Link 
                  to="/off-the-clock" 
                  className="text-accent hover:text-accent/80 font-medium underline underline-offset-4 transition-all"
                >
                  Off The Clock
                </Link>{" "}
                page!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <span>B.S. Computer Science @ OSU</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Class of 2026</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Columbus, OH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
