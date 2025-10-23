import { futureVision } from '@/lib/data';
import { ScrollReveal } from '../scroll-reveal';
import { Target } from 'lucide-react';

export function Mission() {
  return (
    <section id="mission" className="section-padding bg-secondary">
      <div className="section-container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground mb-4">
                <Target className="h-6 w-6"/>
            </div>
          <h2 className="font-headline text-3xl font-bold md:text-4xl">My Mission</h2>
          <blockquote className="mt-6 border-l-2 border-primary pl-6 text-lg italic text-foreground md:text-xl">
            "{futureVision}"
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
