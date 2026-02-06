import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="relative z-10 section-container text-center">
        <div className="space-y-6 md:space-y-8">
          {/* Greeting */}
          <p className="text-accent font-mono text-sm md:text-base animate-fade-in opacity-0">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight animate-fade-in opacity-0 animation-delay-100">
            Shiva Nallapati
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground animate-fade-in opacity-0 animation-delay-200">
            I build <span className="text-gradient">scalable software systems</span>
          </h2>

          {/* Bio */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground animate-fade-in opacity-0 animation-delay-300">
            Senior in Computer Science and Engineering at The Ohio State University, passionate about building .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in opacity-0 animation-delay-400">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-dark transition-all duration-300 glow"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent/10 transition-all duration-300"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in opacity-0 animation-delay-400">
            <a
              href="https://www.linkedin.com/in/shiva-nallapati/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/snallapati1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:shivaramnallapati@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
