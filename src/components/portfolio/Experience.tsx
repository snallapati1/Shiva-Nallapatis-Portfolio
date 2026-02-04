import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'Loop Returns',
    role: 'Software Engineering Intern',
    location: 'Columbus, OH',
    period: 'May 2025 – August 2025',
    description: [
      'Architected a production-grade MCP server following the full SDLC to integrate with Loop\'s returns platform, featuring secure API endpoints for AI assistance.',
      'Streamlined client access to return data and analytics, reducing the learning curve and accelerating decision-making.',
      'Implemented OAuth 2.1 with PKCE and JWT validation with JWKS for authentication and token management.',
      'Used TypeScript/Node.js to deliver scalable integrations along with Express and Vue frameworks.',
    ],
    technologies: ['TypeScript', 'Node.js', 'Express', 'Vue', 'OAuth 2.1', 'JWT'],
  },
  {
    company: 'OSA Technology Partners',
    role: 'Solutions Intern',
    location: 'Columbus, OH',
    period: 'May 2024 - August 2024',
    description: [
      'Earned JumpCloud and Sophos Certifications, enhancing cybersecurity for client companies by migrating devices and users to secure platforms.',
      'Orchestrated and deployed a full-stack website using Ruby on Rails and MySQL, delivering a comprehensive web solution for a client.',
    ],
    technologies: ['Ruby on Rails', 'MySQL', 'JumpCloud', 'Sophos'],
  },
  {
    company: 'CodeDay Labs - Robyn',
    role: 'Open-source Software Engineering Intern',
    location: 'Remote',
    period: 'June 2023 - August 2023',
    description: [
      'Gained proficiency in Rust and optimized website runtime. Utilized GitHub for version control and project insights.',
      'Engineered a Rust-based function implementation with multiple yield statements, modifying function execution flow.',
    ],
    technologies: ['Rust', 'GitHub', 'Open Source'],
  },
  {
    company: 'Dynamo Surfaces',
    role: 'Software Engineering Intern',
    location: 'Arlington Heights, IL',
    period: 'April 2023 - June 2023',
    description: [
      'Improved website\'s search engine optimization (SEO) to increase organic traffic and visibility.',
      'Utilized WordPress, HTML/CSS, and JavaScript to implement improvements to overall design and function.',
    ],
    technologies: ['WordPress', 'HTML/CSS', 'JavaScript', 'SEO'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 border-4 border-background glow" />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="bg-card rounded-xl p-6 shadow-lg border border-border card-hover">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-accent mt-1.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
