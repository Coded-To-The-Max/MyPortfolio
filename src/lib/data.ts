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
  { name: 'AI applications & integration', icon: Layers },
  { name: 'Authentication', icon: Users },
  { name: 'Databases', icon: Database },
  { name: 'Vercel', icon: Layers },
  { name: 'Git', icon: Code },
  { name: 'HTML', icon: Code },
];

export const experiences = [
  {
    company: 'Connected Lane County',
    role: 'Invention Lab Intern',
    period: 'Summer 2024',
    description:
      'Engineered and debugged software for 3+ Arduino-based hardware projects using Python and C++, developing practical experience in embedded systems and hardware–software integration. Collaborated on hands-on design and prototyping work using Circuit Playground Express, vinyl cutters, laser engravers, 3D printers, and Procreate. Applied critical thinking and iterative problem-solving to connect digital designs with physical prototypes.',
    icon: Briefcase,
  },
  {
    company: 'CollegeGuide',
    role: 'Founder & Developer',
    period: 'Sep 2025 – Present',
    description:
      'Founded and engineered a nonprofit AI-powered college guidance platform in TypeScript and JavaScript. Led frontend-to-backend product design and development, managed stored databases, and implemented authentication, AI advising, and college tracking. Gathered feedback from 5+ beta testers among friends and family to inform early product refinement.',
    icon: Users,
  },
  {
    company: 'HabitFlow',
    role: 'Developer',
    period: 'Fall 2025',
    description:
      'Designed and independently developed a JavaScript Chrome extension for habit tracking, progress visualization, streaks, and reminders. Integrated AI-powered insights to help users reflect on their routines and adapt their goals, with an emphasis on clear interaction design and approachable day-to-day use.',
    icon: MousePointerSquareDashed,
  },
  {
    company: 'DesGen',
    role: 'Developer',
    period: 'Oct 2025 – Present',
    description:
      'Built a JavaScript browser extension that translates uploaded images into mathematical equations and automatically enters them into Desmos. Developed the edge-detection, image-processing, and equation-generation framework, with adjustable controls for exploring graph-based artwork and mathematical visualization.',
    icon: DraftingCompass,
  },
  {
    company: 'Stock Screener',
    role: 'Developer',
    period: 'Sep 2026 – Present',
    description:
      'Developed a sub-$10 equity research tool in Python, integrating Yahoo Finance and SEC EDGAR APIs to evaluate financial statements, insider transactions, and liquidity metrics. Implemented asynchronous processing, rate limiting, retry logic, and caching for reliable full-universe screening. Built financial risk analytics, automated reporting, and forward performance evaluation, with implementation validated through 87 automated tests.',
    icon: Code,
  },
];

export const futureVision =
  "My mission is to build useful, creative software that makes technology more accessible. I want the projects I create to solve real problems and make a meaningful difference in people's everyday lives.";
