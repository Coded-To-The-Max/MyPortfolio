import { RepoCard } from '@/components/repo-card';
import { userInfo } from '@/lib/data';
import type { PortfolioProject } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const projects: PortfolioProject[] = [
  {
    id: 1,
    name: 'CollegeGuide',
    description: 'CollegeGuide is a dynamic web application designed to simplify high school students in their college application journey. Through tools such as an AI-powered chat interface, a way to track potential colleges, understand admissions, and receive personalized guidance. Built as both a functional prototype and a learning project, CollegeGuide AI showcases full-stack development, authentication, and AI integration.',
    language: 'TypeScript',
    html_url: 'https://collegeguide.tech',
  },
  {
    id: 2,
    name: 'HabitFlow',
    description: 'HabitFlow is a Chrome extension that helps you build consistency and stay motivated. Track habits, visualize your progress, and get AI-powered insights for adaptability. With simple streaks and reminders, HabitFlow makes it easier to stay on track and improve yourself day by day.',
    language: 'JavaScript',
    html_url: 'https://github.com/Coded-To-The-Max/HabitFlow',
  },
  {
    id: 3,
    name: 'DesGen',
    description: 'DesGen is a Chrome extension that transforms images (JPGs) into mathematical sketches in Desmos, allowing users to explore math and visual creativity. Inspired by mathematicians who create intricate Desmos art, its goal is to make this niche more accessible to beginners and aspiring math-loving, artistic students. Users can upload images, adjust settings, and export equations directly into Desmos. DesGen encourages experimentation and provides an entry point for learning, and creative expression without replacing the skill and artistry of Desmos creators.',
    language: 'JavaScript',
    html_url: 'https://github.com/Coded-To-The-Max/DesGen',
  },
  {
    id: 4,
    name: 'Stock Screener',
    description: 'Stock Screener is a Python tool integrating Yahoo Finance and SEC EDGAR APIs to evaluate equities using financial statements, insider transactions, and liquidity metrics. Asynchronous processing, rate limiting, retry logic, and caching support reliable data retrieval and full-universe screening. The project includes financial risk analytics, automated reporting, and forward performance evaluation, validated through 87 automated tests.',
    language: 'Python',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-block projects">
      <div className="section-container">
        <div className="section-head">
          <h2 className="section-title">Selected builds</h2>
          <p className="section-summary">Four projects spanning college guidance, habit tracking, mathematical image translation, and equity screening.</p>
        </div>
        <div className="project-list">
          {projects.map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} image={repo.name === 'CollegeGuide' ? PlaceHolderImages.find((image) => image.id === 'project-1') : undefined} index={index} />
          ))}
        </div>
        <div className="projects-cta">
          <Link className="secondary-link" href={`https://github.com/${userInfo.githubUsername}?tab=repositories`} target="_blank" rel="noreferrer">Browse all repositories</Link>
        </div>
      </div>
    </section>
  );
}
