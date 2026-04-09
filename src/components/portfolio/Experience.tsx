import { Calendar, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const experiences = [
  {
    company: 'Loop Returns',
    role: 'Software Engineering Intern',
    location: 'Columbus, OH',
    period: 'May 2025 – Aug 2025',
    description: [
      'Architected a production-grade MCP server following the full SDLC to integrate with Loop\'s returns platform, featuring secure API endpoints for AI assistance.',
      'Streamlined client access to return data and analytics, reducing learning curve and accelerating decision-making.',
      'Implemented OAuth 2.1 with PKCE and JWT validation with JWKS for authentication and token management.',
      'Used TypeScript/Node.js to deliver scalable integrations along with Express and Vue frameworks.',
    ],
    technologies: ['TypeScript', 'Node.js', 'Express', 'Vue', 'OAuth 2.1', 'JWT'],
    accent: 'hsl(174 72% 50%)',
  },
  {
    company: 'OSA Technology Partners',
    role: 'Solutions Intern',
    location: 'Columbus, OH',
    period: 'May 2024 – Aug 2024',
    description: [
      'Earned JumpCloud and Sophos Certifications, enhancing cybersecurity for client companies by migrating devices and users to secure platforms.',
      'Orchestrated and deployed a full-stack website using Ruby on Rails and MySQL, delivering a comprehensive web solution for a client.',
    ],
    technologies: ['Ruby on Rails', 'MySQL', 'JumpCloud', 'Sophos'],
    accent: 'hsl(200 72% 50%)',
  },
  {
    company: 'CodeDay Labs – Robyn',
    role: 'Open-source Software Engineering Intern',
    location: 'Remote',
    period: 'Jun 2023 – Aug 2023',
    description: [
      'Gained proficiency in Rust and optimized website runtime. Utilized GitHub for version control and project insights.',
      'Engineered a Rust-based function implementation with multiple yield statements, modifying function execution flow.',
    ],
    technologies: ['Rust', 'GitHub', 'Open Source'],
    accent: 'hsl(30 90% 55%)',
  },
  {
    company: 'Dynamo Surfaces',
    role: 'Software Engineering Intern',
    location: 'Arlington Heights, IL',
    period: 'Apr 2023 – Jun 2023',
    description: [
      'Improved website\'s search engine optimization (SEO) to increase organic traffic and visibility.',
      'Utilized WordPress, HTML/CSS, and JavaScript to implement improvements to overall design and function.',
    ],
    technologies: ['WordPress', 'HTML/CSS', 'JavaScript', 'SEO'],
    accent: 'hsl(270 72% 60%)',
  },
];

export function Experience() {
  return (
    <section id="experience" className="pt-6 pb-20 md:pt-8 md:pb-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'hsl(var(--accent) / 0.05)' }}
      />

      <div className="section-container relative">
        {/* Section header */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Career</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="accent-line w-24 mx-auto mt-4" />
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Outer wrapper — no padding so the line and dots share the same left reference */}
          <div className="relative">
            {/* Vertical line at left-7 (28px) */}
            <div className="absolute top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" style={{ left: '28px' }} />

            {experiences.map((exp, index) => (
              /* Each item adds its own left padding so cards clear the dot */
              <ScrollReveal key={index} delay={index * 100} className="relative pl-16 mb-10 last:mb-0">
                {/* Timeline dot — positioned relative to ScrollReveal div.
                    ScrollReveal starts at left-0 of the outer container,
                    so left:28px here aligns exactly with the line above. */}
                <div
                  className="absolute top-6 w-3.5 h-3.5 rounded-full border-2 border-background"
                  style={{
                    background: 'hsl(var(--accent))',
                    boxShadow: '0 0 10px hsl(var(--accent) / 0.5)',
                    left: '28px',
                    transform: 'translateX(-50%)',
                  }}
                />

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 md:p-8 card-hover grad-border group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/60 rounded-full px-3 py-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="text-accent mt-1 shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full border border-accent/10 transition-all duration-200 hover:bg-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
