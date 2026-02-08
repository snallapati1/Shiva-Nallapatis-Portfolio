import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-section-alt">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">
              I'm currently looking for new grad SWE positions. Whether you have a question, 
              want to discuss opportunities, or just want to say hi, my inbox is always open!
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <a
              href="mailto:shivaramnallapati@gmail.com"
              className="flex items-center justify-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors group"
            >
              <Mail className="h-5 w-5 text-accent" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                shivaramnallapati@gmail.com
              </span>
            </a>
            <a
              href="tel:+16305320424"
              className="flex items-center justify-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors group"
            >
              <Phone className="h-5 w-5 text-accent" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                (630) 532-0424
              </span>
            </a>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent-dark transition-all duration-300 glow"
          >
            <a href="mailto:shivaramnallapati@gmail.com">Say Hello</a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <a
              href="https://www.linkedin.com/in/shiva-nallapati/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/snallapati1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:shivaramnallapati@gmail.com"
              className="p-3 bg-card rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
