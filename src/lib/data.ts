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
      'Learned and developed skills in C++ and Python. Created and prototyped physical products such as working with CPXs, 3D printing, vinyl cutting, and laser engraving. Briefly worked in some entry-level graphic design.',
    icon: Briefcase,
  },
  {
    company: 'CollegeGuide Startup',
    role: 'Founder',
    period: 'Fall 2025',
    description:
      'CollegeGuide is a dynamic web application designed to assist high school students in their college application journey. Coded in TypeScript and JavaScript',
    icon: Users,
  },
  {
    company: 'HabitFlow',
    role: 'Developer',
    period: 'Fall 2025',
    description:
      'HabitFlow is a Chrome extension that helps you build consistency and stay motivated. Coded in JavaScript.',
    icon: MousePointerSquareDashed,
  },
  {
    company: 'DesGen',
    role: 'Developer',
    period: 'Fall 2025',
    description:
      'Developed a Chrome extension that translates images into mathematical equations for visualization in Desmos. Coded in JavaScript. Mostly experimental.',
    icon: DraftingCompass,
  },
];

export const futureVision =
  "My mission is to create software that’s simple, useful, and creative. I want to make information easy to understand and more accessible, especially for students. I also want to create projects that can make a difference in everyday life.";
