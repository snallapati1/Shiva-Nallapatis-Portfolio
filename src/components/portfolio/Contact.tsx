import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Contact() {
  return (
    <section id="contact" className="pt-6 pb-20 md:pt-8 md:pb-32 bg-section-alt relative overflow-hidden">
      {/* Aurora blobs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'hsl(var(--accent) / 0.08)' }}
      />

      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <ScrollReveal>
            <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Let's connect</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="accent-line w-24 mx-auto mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm currently looking for new grad SWE positions. Whether you have a question,
              want to discuss opportunities, or just want to say hi — my inbox is always open.
            </p>
          </ScrollReveal>

          {/* Contact cards */}
          <ScrollReveal delay={150} className="grid sm:grid-cols-2 gap-4 mt-10 mb-8">
            <a
              href="mailto:shivaramnallapati@gmail.com"
              className="group flex items-center justify-center gap-3 p-5 glass-card rounded-2xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Mail className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                shivaramnallapati@gmail.com
              </span>
            </a>
            <a
              href="tel:+16305320424"
              className="group flex items-center justify-center gap-3 p-5 glass-card rounded-2xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Phone className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                (630) 532-0424
              </span>
            </a>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={250}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-dark transition-all duration-300 px-10 font-semibold"
              style={{ boxShadow: '0 8px 24px hsl(var(--accent) / 0.3)' }}
            >
              <a href="mailto:shivaramnallapati@gmail.com">Say Hello</a>
            </Button>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={350} className="flex items-center justify-center gap-4 mt-10">
            {[
              {
                href: 'https://www.linkedin.com/in/shiva-nallapati/',
                icon: Linkedin,
                label: 'LinkedIn',
                external: true,
              },
              {
                href: 'https://github.com/snallapati1',
                icon: Github,
                label: 'GitHub',
                external: true,
              },
              {
                href: 'mailto:shivaramnallapati@gmail.com',
                icon: Mail,
                label: 'Email',
                external: false,
              },
            ].map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="p-3.5 glass-card rounded-xl text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
