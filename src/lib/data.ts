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
      'CollegeGuide is a dynamic web application designed to assist high school students in their college application journey. Through an intuitive, AI-powered chat interface, students can explore potential colleges, understand admission requirements, and receive personalized guidance. Built as both a functional prototype and a learning project, CollegeGuide showcases full-stack development expertise, authentication, and AI integration.',
    icon: Users,
  },
  {
    company: 'HabitFlow',
    role: 'Developer',
    period: 'Fall 2025',
    description:
      'HabitFlow is a lightweight Chrome extension that helps you build consistency and stay motivated. Track habits, visualize your progress, and get AI-powered insights that adapt to your routines. With simple streaks, reminders, and smart suggestions, HabitFlow makes it easier to stay on track every day.',
    icon: MousePointerSquareDashed,
  },
  {
    company: 'DesGen',
    role: 'Developer',
    period: 'Fall 2025',
    description:
      'Developed a Chrome extension that translates images into mathematical equations for visualization in Desmos. The tool is designed to make mathematical art more accessible and experimental, bridging the gap between artistic creativity and mathematical concepts.',
    icon: DraftingCompass,
  },
];

export const futureVision =
  "My mission is to create software that’s simple, useful, and creative. I want to make information easy to understand and more accessible, especially for students. My goal is to create tangible projects that make a difference in everyday life.";
