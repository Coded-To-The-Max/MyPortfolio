'use client';

import { useEffect, useState } from 'react';
import { userInfo, skills, experiences, futureVision } from '@/lib/data';
import { generateAnimatedHeroTagline } from '@/ai/flows/generate-animated-hero-tagline';
import { AnimatedTagline } from '@/components/animated-tagline';

export function Hero() {
  const [tagline, setTagline] = useState('Crafting digital experiences...');

  useEffect(() => {
    let isCancelled = false;

    const getTagline = async () => {
      try {
        const aiInput = {
          userName: userInfo.name,
          userSkills: skills.map((s) => s.name),
          userExperience: experiences.map((e) => `${e.role} at ${e.company}`).join(', '),
          futureVision: futureVision,
        };
        const result = await generateAnimatedHeroTagline(aiInput);
        if (!isCancelled) {
          setTagline(result.tagline);
        }
      } catch (error) {
        console.error('Error generating tagline:', error);
      }
    };

    getTagline();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <section id="hero" className="relative section-padding overflow-hidden bg-secondary">
      <div className="section-container z-10 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm {userInfo.name}
        </h1>
        <AnimatedTagline
          text={tagline}
          className="mt-6 text-lg tracking-wide text-muted-foreground sm:text-xl md:text-2xl"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-0">
        <div className="absolute left-[20%] top-[10%] h-32 w-32 animate-pulse rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute right-[20%] top-[40%] h-48 w-48 animate-pulse rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[30%] h-24 w-24 animate-pulse rounded-full bg-primary/10 blur-3xl"></div>
      </div>
    </section>
  );
}
