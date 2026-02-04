import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-section-alt">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Image/Avatar placeholder */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-accent-foreground text-6xl md:text-7xl font-bold glow">
                  SN
                </div>
                <div className="absolute -inset-2 bg-accent/20 rounded-2xl -z-10 blur-xl" />
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a senior Computer Science student at <span className="text-foreground font-medium">The Ohio State University</span>, 
                graduating in 2026. My passion lies in building scalable software systems and creating 
                solutions that bridge both engineering and business needs.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From architecting production-grade MCP servers at <span className="text-foreground font-medium">Loop Returns</span> to 
                collaborating on NASA's Artemis program through <span className="text-foreground font-medium">L'SPACE</span>, I thrive 
                on tackling complex technical challenges while working in multidisciplinary teams.
              </p>

              {/* Quick Facts */}
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
