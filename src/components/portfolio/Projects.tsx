import { ExternalLink, Github, Rocket, Brain, ShoppingCart, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'NASA L\'SPACE NPWEE',
    subtitle: 'Engineer',
    icon: Rocket,
    period: 'January 2026 - Present',
    description:
      'Selected for a 12-week intensive program, collaborating in a multidisciplinary team to design a technical mission concept aligning with NASA\'s Artemis program or Moon-to-Mars objectives.',
    highlights: ['NASA Artemis Program', 'Siemens NX', 'Multidisciplinary Team'],
    featured: true,
  },
  {
    title: 'Aivana Capstone Project',
    subtitle: 'Software Engineer',
    icon: Brain,
    period: 'January 2026 - Present',
    description:
      'Orchestrating a Multi-AI Boardroom coordination layer enabling multiple LLMs to collaborate through structured debate and synthesis. Developing role-based AI frameworks for complex decision-making scenarios.',
    highlights: ['Multi-LLM Coordination', 'AI Frameworks', 'Human-Centered AI'],
    featured: true,
  },
  {
    title: 'VinylVerse',
    subtitle: 'Team Lead',
    icon: ShoppingCart,
    period: 'August 2025 - Present',
    description:
      'Architected a full-stack microservices architecture on AWS, featuring RESTful microservices for Inventory and Order Processing using Lambda, API Gateway, and RDS integrated with a React frontend via AWS Amplify.',
    highlights: ['AWS', 'Microservices', 'React', 'EventBridge', 'CI/CD'],
    featured: true,
  },
  {
    title: 'MakeOHIO Hackathon - 2nd Place',
    subtitle: 'Developer',
    icon: Trophy,
    period: 'March 2024',
    description:
      'Secured 2nd place by developing a wearable solution for real-time core stability to support those with neurodegenerative disorders. Led software development using Matlab to process Arduino data.',
    highlights: ['IoT', 'Matlab', 'Arduino', 'Healthcare Tech'],
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-section-alt">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, from NASA mission concepts to AI-powered platforms
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group bg-card rounded-xl border border-border overflow-hidden card-hover ${
                  project.featured ? 'md:row-span-1' : ''
                }`}
              >
                {/* Card Header with Icon */}
                <div className="p-6 pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-3">
                    {project.subtitle}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights/Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
