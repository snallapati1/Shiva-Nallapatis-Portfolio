import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Gradient overlay so grid fades at edges */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, hsl(var(--background)) 100%)',
        }}
      />

      {/* Aurora blobs */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[130px] animate-float-slow"
        style={{ background: 'hsl(var(--accent) / 0.12)' }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full blur-[150px] animate-float animation-delay-300"
        style={{ background: 'hsl(var(--accent) / 0.08)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px] animate-float animation-delay-200"
        style={{ background: 'hsl(174 80% 50% / 0.06)' }}
      />

      <div className="relative z-10 section-container text-center">
        <div className="space-y-6 md:space-y-8">
          {/* Status badge */}
          <div className="flex justify-center animate-fade-in opacity-0">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wide">
              <span className="status-dot" />
              Open to new grad SWE roles
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none animate-fade-in opacity-0 animation-delay-100">
            Shiva Nallapati
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-muted-foreground animate-fade-in opacity-0 animation-delay-200">
            I build{' '}
            <span className="text-gradient font-semibold">scalable software systems</span>
          </h2>

          {/* Bio */}
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground/80 leading-relaxed animate-fade-in opacity-0 animation-delay-300">
            Senior in Computer Science at The Ohio State University — from NASA Artemis to
            production MCP servers, I thrive building things that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 animate-fade-in opacity-0 animation-delay-400">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-xl px-8 font-semibold"
              style={{ boxShadow: '0 8px 24px hsl(var(--accent) / 0.25)' }}
            >
              <a href="projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:border-accent/60 text-foreground hover:text-accent hover:bg-accent/5 transition-all duration-300 px-8"
            >
              <a href="contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 animate-fade-in opacity-0 animation-delay-400">
            <a
              href="https://www.linkedin.com/in/shiva-nallapati/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-card/80 border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/snallapati1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-card/80 border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:shivaramnallapati@gmail.com"
              className="p-2.5 rounded-xl bg-card/80 border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a
            href="about"
            aria-label="Scroll to about section"
            className="animate-bounce text-muted-foreground/40 hover:text-accent transition-colors duration-300"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
