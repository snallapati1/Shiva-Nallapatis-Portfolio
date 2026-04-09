import { Code, Server, Cloud, Shield, Wrench, Brain } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Rust', 'Ruby', 'C#', 'SQL', 'HTML/CSS'],
    accent: 'hsl(174 72% 50%)',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    skills: ['Node.js', 'Express', 'Vue', 'React', 'Ruby on Rails', 'PHP Laravel', 'FastAPI'],
    accent: 'hsl(200 80% 55%)',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS Lambda', 'RDS', 'Amplify', 'API Gateway', 'EventBridge', 'SNS', 'CI/CD', 'Docker', 'Kubernetes', 'Git'],
    accent: 'hsl(215 80% 60%)',
  },
  {
    title: 'Security & Auth',
    icon: Shield,
    skills: ['OAuth 2.1', 'PKCE', 'JWT', 'JWKS', 'JumpCloud Certified', 'Sophos Certified'],
    accent: 'hsl(270 72% 65%)',
  },
  {
    title: 'Tools & Other',
    icon: Wrench,
    skills: ['WordPress', 'Siemens NX', 'MatLab', 'Arduino'],
    accent: 'hsl(40 90% 55%)',
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['Scikit-Learn', 'Pandas', 'Matplotlib', 'Spotify API', 'LLM Orchestration'],
    accent: 'hsl(320 70% 60%)',
  },
];

export function Skills() {
  return (
    <section id="skills" className="pt-6 pb-20 md:pt-8 md:pb-32 relative overflow-hidden">
      {/* Background blob */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -translate-y-1/2"
        style={{ background: 'hsl(var(--accent) / 0.05)' }}
      />

      <div className="section-container relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Stack</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="accent-line w-24 mx-auto mt-4" />
        </ScrollReveal>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={index} delay={index * 70}>
                <div className="glass-card rounded-2xl p-6 h-full card-hover group">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${category.accent}18`,
                        boxShadow: `0 0 0 1px ${category.accent}25`,
                      }}
                    >
                      <Icon className="h-4 w-4" style={{ color: category.accent }} />
                    </div>
                    <h3 className="font-bold text-foreground text-sm">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Affiliations */}
        <ScrollReveal delay={200} className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">
            Professional <span className="text-gradient">Affiliations</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                name: 'Theta Tau',
                role: 'Professional Engineering Fraternity',
                desc: 'Ohio State Chapter',
              },
              {
                name: 'Kappa Theta Pi',
                role: 'Professional Technology Fraternity',
                desc: 'Ohio State Chapter',
              },
            ].map((org) => (
              <div
                key={org.name}
                className="glass-card rounded-2xl p-6 text-center card-hover group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-accent text-sm font-black">{org.name[0]}</span>
                </div>
                <h4 className="font-bold text-foreground mb-1">{org.name}</h4>
                <p className="text-accent text-sm font-medium mb-1">{org.role}</p>
                <p className="text-muted-foreground text-xs">{org.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
