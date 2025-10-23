import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Mission } from '@/components/sections/mission';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
