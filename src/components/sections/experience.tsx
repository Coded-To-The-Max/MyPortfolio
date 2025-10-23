import { experiences } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from '../scroll-reveal';

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Professional Journey</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            My career path and key roles I've undertaken.
          </p>
        </ScrollReveal>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

          {experiences.map((exp, index) => (
            <ScrollReveal key={index} className="mb-12">
              <div className="group relative flex items-center">
                <div className={`flex w-1/2 items-center justify-end pr-8 text-right ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
                  <Card className="w-full max-w-md transition-shadow duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                      <p className="text-sm font-medium text-primary">{exp.company}</p>
                      <p className="text-xs text-muted-foreground">{exp.period}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline circle */}
                <div className="order-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <exp.icon className="h-4 w-4 text-primary" />
                </div>

                {/* Spacer */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
