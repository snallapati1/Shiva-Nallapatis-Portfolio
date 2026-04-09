import { Rocket, Brain, ShoppingCart, Trophy } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const projects = [
  {
    title: "NASA L'SPACE NPWEE",
    subtitle: 'Engineer',
    icon: Rocket,
    period: 'Jan 2026 – Present',
    description:
      "Selected for a 12-week intensive program, collaborating in a multidisciplinary team to design a technical mission concept aligning with NASA's Artemis program or Moon-to-Mars objectives.",
    highlights: ['NASA Artemis', 'Siemens NX', 'Multidisciplinary'],
    featured: true,
    accentColor: 'hsl(200 80% 55%)',
  },
  {
    title: 'Aivana Capstone Project',
    subtitle: 'Software Engineer',
    icon: Brain,
    period: 'Jan 2026 – Present',
    description:
      'Orchestrating a Multi-AI Boardroom coordination layer enabling multiple LLMs to collaborate through structured debate and synthesis. Developing role-based AI frameworks for complex decision-making scenarios.',
    highlights: ['Multi-LLM', 'AI Frameworks', 'TypeScript'],
    featured: true,
    accentColor: 'hsl(270 72% 65%)',
  },
  {
    title: 'VinylVerse',
    subtitle: 'Team Lead',
    icon: ShoppingCart,
    period: 'Aug – Dec 2025',
    description:
      'Architected a full-stack microservices architecture on AWS, featuring RESTful microservices for Inventory and Order Processing using Lambda, API Gateway, and RDS integrated with a React frontend via AWS Amplify.',
    highlights: ['AWS', 'Microservices', 'React', 'EventBridge', 'CI/CD'],
    featured: true,
    accentColor: 'hsl(174 72% 50%)',
  },
  {
    title: 'MakeOHIO Hackathon',
    subtitle: '2nd Place',
    icon: Trophy,
    period: 'Mar 2024',
    description:
      'Secured 2nd place by developing a wearable solution for real-time core stability to support those with neurodegenerative disorders. Led software development using Matlab to process Arduino data.',
    highlights: ['IoT', 'Matlab', 'Arduino', 'Healthcare'],
    featured: false,
    accentColor: 'hsl(40 90% 55%)',
  },
];

export function Projects() {
  return (
    <section id="projects" className="pt-6 pb-20 md:pt-8 md:pb-32 bg-section-alt relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'hsl(var(--accent) / 0.06)' }}
      />

      <div className="section-container relative">
        {/* Section header */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="accent-line w-24 mx-auto mt-4" />
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto text-base">
            Some of the work I'm proud to share.
          </p>
        </ScrollReveal>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="group h-full glass-card rounded-2xl overflow-hidden card-hover border-transparent hover:border-accent/20 transition-all duration-300">
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: project.accentColor }}
                  />

                  <div className="p-6 md:p-7 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `${project.accentColor}18`,
                          boxShadow: `0 0 0 1px ${project.accentColor}25`,
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: project.accentColor }} />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground bg-secondary/60 rounded-full px-3 py-1">
                        {project.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium mb-4" style={{ color: project.accentColor }}>
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono rounded-full border transition-all duration-200"
                          style={{
                            background: `${project.accentColor}12`,
                            color: project.accentColor,
                            borderColor: `${project.accentColor}20`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
