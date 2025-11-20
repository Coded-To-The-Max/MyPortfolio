import { RepoCard } from '@/components/repo-card';
import { userInfo } from '@/lib/data';
import type { GithubRepo } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '../scroll-reveal';
import { Button } from '../ui/button';
import Link from 'next/link';

async function getRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${userInfo.githubUsername}/repos?sort=updated&direction=desc&per_page=3`, {
      next: { revalidate: 3600 } // revalidate every hour
    });
    if (!res.ok) {
      console.error(`GitHub API responded with ${res.status}`);
      return [];
    }
    const data = await res.json();
    const repos: GithubRepo[] = data as GithubRepo[];

    const customProjects: Partial<GithubRepo>[] = [
      {
        id: 1,
        name: 'CollegeGuide',
        description: 'CollegeGuide is a dynamic web application designed to simplify high school students in their college application journey. Through tools such as an AI-powered chat interface, a way to track potential colleges, understand admissions, and receive personalized guidance. Built as both a functional prototype and a learning project, CollegeGuide AI showcases full-stack development, authentication, and AI integration.',
        language: 'TypeScript',
        html_url: `collegeguide.tech`,
      },
      {
        id: 2,
        name: 'HabitFlow',
        description: 'HabitFlow is a Chrome extension that helps you build consistency and stay motivated. Track habits, visualize your progress, and get AI-powered insights for adaptability. With simple streaks and reminders, HabitFlow makes it easier to stay on track and improve yourself day by day.',
        language: 'JavaScript',
        html_url: `https://github.com/Coded-To-The-Max/HabitFlow`,
      },
      {
        id: 3,
        name: 'DesGen',
        description: 'DesGen is a Chrome extension that transforms images (JPGs) into mathematical sketches in Desmos, allowing users to explore math and visual creativity. Inspired by mathematicians who create intricate Desmos art, its goal is to make this niche more accessible to beginners and aspiring math-loving, artistic students. Users can upload images, adjust settings, and export equations directly into Desmos. DesGen encourages experimentation and provides an entry point for learning, and creative expression without replacing the skill and artistry of Desmos creators.',
        language: 'JavaScript',
        html_url: `https://github.com/Coded-To-The-Max/DesGen`,
      },
    ];

    // Override fetched repos with custom data
    return repos.map((repo, i) => (customProjects[i] ? { ...repo, ...customProjects[i] } : repo)).slice(0, 3);

  } catch (error) {
    console.error("Failed to fetch repos:", error);
    // Return custom projects as a fallback
    return [
      {
        id: 1,
        name: 'CollegeGuide',
        full_name: '',
        description: 'CollegeGuide is a dynamic web application designed to simplify high school students in their college application journey. Through tools such as an AI-powered chat interface, a way to track potential colleges, understand admissions, and receive personalized guidance. Built as both a functional prototype and a learning project, CollegeGuide AI showcases full-stack development, authentication, and AI integration.',
        language: 'TypeScript',
        html_url: `https://github.com/Coded-To-The-Max/CollegeGuide`,
        stargazers_count: 0,
        forks_count: 0,
      },
      {
        id: 2,
        name: 'HabitFlow',
        full_name: '',
        description: 'HabitFlow is a Chrome extension that helps you build consistency and stay motivated. Track habits, visualize your progress, and get AI-powered insights for adaptability. With simple streaks and reminders, HabitFlow makes it easier to stay on track and improve yourself day by day.',
        language: 'JavaScript',
        html_url: `https://github.com/Coded-To-The-Max/HabitFlow`,
        stargazers_count: 0,
        forks_count: 0,
      },
       {
        id: 3,
        name: 'DesGen',
        full_name: '',
        description: 'DesGen is a Chrome extension that transforms images (JPGs) into mathematical sketches in Desmos, allowing users to explore math and visual creativity. Inspired by mathematicians who create intricate Desmos art, its goal is to make this niche more accessible to beginners and aspiring math-loving, artistic students. Users can upload images, adjust settings, and export equations directly into Desmos. DesGen encourages experimentation and provides an entry point for learning, and creative expression without replacing the skill and artistry of Desmos creators.',
        language: 'JavaScript',
        html_url: `https://github.com/Coded-To-The-Max/DesGen`,
        stargazers_count: 0,
        forks_count: 0,
      },
    ] as GithubRepo[];
  }
}

export async function Projects() {
  const repos = await getRepos();

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Latest Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Here are some of my recent projects.
          </p>
        </ScrollReveal>
        
        {repos.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, index) => (
              <ScrollReveal key={repo.id} delay={index * 100}>
                <RepoCard repo={repo} image={PlaceHolderImages[index % PlaceHolderImages.length]} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-muted-foreground">Could not load projects.</p>
        )}

        <ScrollReveal className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
                <Link href={`https://github.com/${userInfo.githubUsername}?tab=repositories`} target="_blank" rel="noopener noreferrer">
                    View All Repositories
                </Link>
            </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
