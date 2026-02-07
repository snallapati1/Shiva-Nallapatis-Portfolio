import { Code, Server, Cloud, Shield, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Rust', 'Ruby', 'C#', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    skills: ['Node.js', 'Express', 'Vue', 'React', 'Ruby on Rails', 'PHP Laravel', 'FastAPI'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS (Lambda, RDS, Amplify, API Gateway, EventBridge, SNS)', 'CI/CD', 'Git', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Security & Auth',
    icon: Shield,
    skills: ['OAuth 2.1', 'PKCE', 'JWT', 'JWKS', 'JumpCloud Certified', 'Sophos Certified'],
  },
  {
    title: 'Tools & Other',
    icon: Wrench,
    skills: ['WordPress', 'Siemens NX', 'MatLab', 'Arduino'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain, 
    skills: ['Python', 'Scikit-Learn', 'Pandas', 'Spotify API integration', 'Matplotlib'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border card-hover"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg transition-colors hover:bg-accent/10 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Affiliations */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">
            Professional <span className="text-gradient">Affiliations</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <h4 className="font-semibold text-foreground mb-2">Theta Tau</h4>
              <p className="text-accent text-sm mb-2">Professional Engineering Fraternity</p>
              <p className="text-muted-foreground text-sm">
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <h4 className="font-semibold text-foreground mb-2">Kappa Theta Pi</h4>
              <p className="text-accent text-sm mb-2">Professional Technology Fraternity</p>
              <p className="text-muted-foreground text-sm">
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
