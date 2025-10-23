import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '../scroll-reveal';

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">My Skills</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            A look at the technologies and tools I work with.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 100}>
              <Card className="transform-gpu transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <skill.icon className="h-10 w-10 text-primary" />
                  <p className="mt-4 text-sm font-medium text-center">{skill.name}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
