import { GraduationCap, MapPin, Calendar, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const stats = [
  { label: 'Internships', value: '4' },
  { label: 'Projects', value: '10+' },
  { label: 'NASA Collab', value: '✓' },
];

export function About() {
  return (
    <section id="about" className="pt-6 pb-20 md:pt-8 md:pb-32 bg-section-alt relative overflow-hidden">
      {/* Subtle background blob */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'hsl(var(--accent) / 0.06)' }}
      />

      <div className="section-container relative">
        {/* Section header */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Who I am</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="accent-line w-24 mx-auto mt-4" />
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 md:gap-16 items-center">
          {/* Image column */}
          <ScrollReveal direction="left" className="md:col-span-2 flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-3 rounded-2xl blur-2xl"
                style={{ background: 'hsl(var(--accent) / 0.2)' }}
              />
              <img
                src="/HEADSHOT.JPG"
                alt="Shiva Nallapati"
                className="relative w-52 h-52 md:w-72 md:h-72 rounded-2xl object-cover object-top border border-accent/20"
                onError={(e) => {
                  e.currentTarget.src = '/favicon.svg';
                }}
              />
            </div>
          </ScrollReveal>

          {/* Text column */}
          <div className="md:col-span-3 space-y-6">
            <ScrollReveal direction="right" delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! It's nice to meet you! I'm a senior Computer Science student at{' '}
                <span className="text-foreground font-semibold">The Ohio State University</span>,
                graduating in May of 2026. I'm from Chicago, IL, I love playing sports and I'm
                passionate in lots of different fields including neuroscience, space exploration,
                cooking, and of course software engineering.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From architecting production-grade MCP servers at{' '}
                <span className="text-foreground font-semibold">Loop Returns</span> to
                collaborating on NASA's Artemis program through{' '}
                <span className="text-foreground font-semibold">L'SPACE</span>, I thrive on
                tackling complex technical challenges while working in multidisciplinary teams.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you'd like to get to know me more personally, check out my{' '}
                <Link
                  to="/off-the-clock"
                  className="text-accent hover:text-accent-light font-semibold underline underline-offset-4 transition-colors"
                >
                  Off The Clock
                </Link>{' '}
                page!
              </p>
            </ScrollReveal>

            {/* Stats row */}
            <ScrollReveal delay={350}>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-xl p-4 text-center card-hover"
                  >
                    <div className="text-2xl font-black text-accent mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Info tags */}
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-3 pt-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card border border-border rounded-full px-4 py-2">
                  <GraduationCap className="h-4 w-4 text-accent" />
                  B.S. Computer Science @ OSU
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card border border-border rounded-full px-4 py-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  Class of 2026
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card border border-border rounded-full px-4 py-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Columbus, OH
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card border border-border rounded-full px-4 py-2">
                  <Rocket className="h-4 w-4 text-accent" />
                  NASA L'SPACE
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
