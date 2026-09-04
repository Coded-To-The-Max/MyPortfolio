import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Mission } from '@/components/sections/mission';

export default function Home() {
  return (
    <div className="page-shell">
      <Header />
      <main>
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
