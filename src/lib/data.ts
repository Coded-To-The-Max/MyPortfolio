import {
  Code,
  Layers,
  Database,
  Feather,
  Users,
  Briefcase,
  type LucideIcon,
  MousePointerSquareDashed,
  DraftingCompass,
} from 'lucide-react';

export const userInfo = {
  name: 'Max Zhou',
  githubUsername: 'Coded-To-The-Max',
};

export const skills: { name: string; icon: LucideIcon }[] = [
  { name: 'React', icon: Code },
  { name: 'Python', icon: Code },
  { name: 'C++', icon: Code },
  { name: 'Node.js', icon: Database },
  { name: 'Tailwind CSS', icon: Feather },
  { name: 'JavaScript', icon: Code },
];

export const experiences = [
  {
    company: 'Connected Lane County',
    role: 'Invention Lab Intern',
    period: 'Summer 2024',
    description:
      'Prototyped hardware projects using C++, Python, and Circuit Playground Express microcontrollers. Applied 3D printing, vinyl cutting, and laser engraving to fabricate and refine physical designs.',
    icon: Briefcase,
  },
  {
    company: 'CollegeGuide Startup',
    role: 'Founder',
    period: 'Fall 2025',
    description:
      'Founded and independently built a full-stack college guidance application using TypeScript and JavaScript. Integrated authentication, AI-powered advising, and college tracking tools to support the application process.',
    icon: Users,
  },
  {
    company: 'HabitFlow',
    role: 'Developer',
    period: 'Fall 2025',
    description:
      'Independently developed a JavaScript Chrome extension for habit tracking, progress visualization, and reminders. Integrated AI-powered insights to help users adapt routines and build consistency.',
    icon: MousePointerSquareDashed,
  },
  {
    company: 'DesGen',
    role: 'Developer',
    period: 'Fall 2025',
    description:
      'Independently developed an experimental JavaScript Chrome extension that converts images into mathematical equations for Desmos. Implemented image upload, adjustable settings, and equation export for mathematical visualization.',
    icon: DraftingCompass,
  },
  {
    company: 'Stock Screener',
    role: 'Developer',
    period: 'Fall 2026',
    description:
      'Developed a Python equity screener integrating Yahoo Finance and SEC EDGAR APIs. Implemented asynchronous processing, rate limiting, retries, and caching for full-universe screening. Built financial risk analytics, automated reporting, and forward performance evaluation, validated through 87 automated tests.',
    icon: Code,
  },
];

export const futureVision =
  "My mission is to build useful, creative software that makes technology more accessible. I want the projects I create to solve real problems and make a meaningful difference in people's everyday lives.";
