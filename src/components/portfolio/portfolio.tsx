'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { experiences, skills, userInfo } from '@/lib/data';
import { projects, gallery } from './projects';
import { BackgroundVideo } from './background-video';
import { LoadingScreen } from './loading-screen';
import { Journal } from './journal';

const GITHUB = `https://github.com/${userInfo.githubUsername}`;
const roles = ['Developer', 'Creative', 'Founder', 'Builder'];
const nav = [{ label: 'Home', id: 'hero' }, { label: 'Work', id: 'projects' }, { label: 'Thoughts', id: 'thoughts' }, { label: 'Experience', id: 'experience' }];

export function Portfolio() {
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paused, setPaused] = useState(false);
  const [role, setRole] = useState(0);
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const lightboxTrigger = useRef<HTMLButtonElement | null>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const motionOff = !ready || !!reducedMotion || paused;
  const complete = useCallback(() => {
    setLoading(false);
    try { sessionStorage.setItem('portfolio-intro-seen', '1'); } catch { /* Storage can be unavailable in private sessions. */ }
  }, []);

  useEffect(() => {
    setReady(true);
    let seen = false;
    try { seen = sessionStorage.getItem('portfolio-intro-seen') === '1'; } catch { /* Intro still works without storage. */ }
    if (!seen && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !window.location.hash) setLoading(true);
  }, []);
  useEffect(() => {
    if (reducedMotion) complete();
  }, [reducedMotion, complete]);
  useEffect(() => {
    if (motionOff || loading) return;
    const interval = setInterval(() => setRole(index => (index + 1) % roles.length), 2000);
    return () => clearInterval(interval);
  }, [motionOff, loading]);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      const current = [...nav].reverse().find(item => {
        const element = document.getElementById(item.id);
        return element && element.getBoundingClientRect().top <= window.innerHeight * 0.4;
      });
      if (current) setActive(current.id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!ready || loading || motionOff) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    void Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.from('.p-name', { opacity: 0, y: 50, duration: 1.2, ease: 'power3.out' });
        gsap.from('.p-blur-in', { opacity: 0, y: 20, duration: 1, stagger: 0.1, delay: 0.3, ease: 'power3.out' });
        gsap.to('.p-marquee-track', { xPercent: -50, duration: 40, repeat: -1, ease: 'none' });
        const media = gsap.matchMedia();
        media.add('(min-width: 900px)', () => {
          const section = galleryRef.current;
          if (!section) return;
          ScrollTrigger.create({ trigger: section, start: 'top top', end: 'bottom bottom', pin: '.p-explore-center', pinSpacing: false });
          gsap.fromTo('.p-gallery-left', { y: 160 }, { y: -240, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1 } });
          gsap.fromTo('.p-gallery-right', { y: 380 }, { y: -380, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1 } });
        });
      }, root);
      cleanup = () => context.revert();
    });
    return () => { disposed = true; cleanup?.(); };
  }, [ready, loading, motionOff]);
  useEffect(() => {
    if (lightbox === null) return;
    const modal = dialog.current;
    if (!modal) return;
    modal.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { modal.close(); document.body.style.overflow = previous; lightboxTrigger.current?.focus({ preventScroll: true }); };
  }, [lightbox]);
  const reveal = motionOff ? {} : {
    initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' }, transition: { duration: 0.8 },
  };

  return <div className={`portfolio ${motionOff ? 'p-motion-off' : ''}`} ref={root}>
    <AnimatePresence>{loading && <LoadingScreen onComplete={complete} />}</AnimatePresence>
    <div ref={node => { node?.toggleAttribute('inert', loading); }}>
      <a href="#projects" className="p-skip">Skip to projects</a>
      <header className={`p-header ${scrolled ? 'is-scrolled' : ''}`}>
        <nav aria-label="Primary navigation" className="p-nav">
          <a href="#hero" className="p-logo" aria-label="Max Zhou, home"><span>MZ</span></a>
          <span className="p-nav-divider" />
          {nav.map(item => <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'is-active' : ''} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}
          <span className="p-nav-divider" />
          <a className="p-say-hi" href={GITHUB} target="_blank" rel="noreferrer">Say hi <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main>
        <section id="hero" className="p-hero">
          <BackgroundVideo paused={motionOff} />
          <div className="p-hero-content">
            <p className="p-eyebrow p-blur-in">Collection ’26</p>
            <h1 className="p-name">Max Zhou</h1>
            <p className="p-role p-blur-in">A <span key={role}>{roles[role]}</span> with a curious mind.</p>
            <p className="p-hero-description p-blur-in">Building useful software at the intersection of everyday problems and creative possibilities.</p>
            <div className="p-actions p-blur-in"><a className="p-button p-button-solid" href="#projects">See works <span aria-hidden="true">↗</span></a><a className="p-button" href={GITHUB} target="_blank" rel="noreferrer">Reach out… <span aria-hidden="true">↗</span></a></div>
          </div>
          <a href="#projects" className="p-scroll"><span>Scroll to explore</span><i /></a>
          <span className="p-hero-note">Independent ideas.<br />Thoughtfully built.</span>
          <button className="p-motion-toggle" onClick={() => setPaused(value => !value)} aria-pressed={paused} disabled={ready && !!reducedMotion}>{ready && reducedMotion ? 'Reduced motion' : paused ? 'Play motion' : 'Pause motion'} <span aria-hidden="true">{motionOff ? '▷' : 'Ⅱ'}</span></button>
        </section>

        <section className="p-section p-works" id="projects">
          <div className="p-container">
            <motion.div className="p-section-heading" {...reveal}><div><p className="p-eyebrow">Selected work</p><h2>Featured <em>projects</em></h2><p>A few ideas I’ve taken from curiosity to code.</p></div><a className="p-button p-small" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">All repositories <span aria-hidden="true">↗</span></a></motion.div>
            <div className="p-work-grid">{projects.map((project, index) => <motion.article className={`p-work-card p-work-${index}`} key={project.name} {...reveal}>
              <a href={project.href} target={project.href.startsWith('#') ? undefined : '_blank'} rel={project.href.startsWith('#') ? undefined : 'noreferrer'} onClick={() => { if (project.href.startsWith('#')) document.getElementById('screener-details')?.setAttribute('open', ''); }} className="p-work-visual" aria-label={project.name === 'Stock Screener' ? 'Read about Stock Screener' : `View ${project.name}`}>
                <Image src={project.image} alt={`${project.name}: centered typography on charcoal`} fill sizes="(max-width: 700px) 95vw, 55vw" />
                <span className="p-work-hover"><span>View <em>{project.name}</em> ↗</span></span>
              </a>
              <div className="p-work-copy"><div><p>{project.category}</p><h3>{project.name}</h3></div><span className="p-work-arrow" aria-hidden="true">↗</span><p className="p-work-description">{project.description}</p><span className="p-work-stack">{project.stack}</span></div>
            </motion.article>)}</div>
          </div>
        </section>

        <Journal />

        <section className="p-section p-experience" id="experience"><div className="p-container">
          <motion.div className="p-section-heading" {...reveal}><div><p className="p-eyebrow">Along the way</p><h2>Learning by <em>building</em></h2><p>Independent projects and hands-on experience.</p></div><a className="p-button p-small" href="#skills">My toolkit <span aria-hidden="true">↓</span></a></motion.div>
          <div className="p-experience-list">{[...experiences].reverse().map(item => <motion.details id={item.company === 'Stock Screener' ? 'screener-details' : undefined} className="p-experience-row" key={item.company} {...reveal}>
            <summary><span className="p-experience-icon" aria-hidden="true"><item.icon size={22} strokeWidth={1.2} /></span><span className="p-experience-title"><strong>{item.company}</strong><span>{item.role}</span></span><span className="p-experience-date">{item.period}</span><span className="p-experience-plus" aria-hidden="true">+</span></summary><p>{item.description}</p>
          </motion.details>)}</div>
        </div></section>

        <section className="p-explorations" ref={galleryRef} aria-labelledby="exploration-title">
          <div className="p-explore-center"><p className="p-eyebrow">Explorations</p><h2 id="exploration-title">A closer<br /><em>look.</em></h2><p>Four ideas.<br />A shared visual language.</p><a className="p-button p-small" href={GITHUB} target="_blank" rel="noreferrer">Explore my GitHub ↗</a></div>
          <div className="p-gallery-columns">{[0, 1].map(column => <div key={column} className={`p-gallery-column ${column === 0 ? 'p-gallery-left' : 'p-gallery-right'}`}>{gallery.map((item, index) => index % 2 === column && <button key={item.title} className="p-gallery-card" onClick={event => { lightboxTrigger.current = event.currentTarget; setLightbox(index); }} aria-label={`Enlarge ${item.title}`}><span className="p-gallery-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 45vw, 320px" /></span><span className="p-gallery-caption">{item.title}<span aria-hidden="true">↗</span></span></button>)}</div>)}</div>
        </section>

        <section className="p-section p-toolkit" id="skills"><div className="p-container">
          <motion.div className="p-stats" {...reveal}><div><strong>{String(projects.length).padStart(2, '0')}</strong><span>Featured projects</span></div><div><strong>{String(skills.length).padStart(2, '0')}</strong><span>Tools in my toolkit</span></div><div><strong>{String(experiences.length).padStart(2, '0')}</strong><span>Experience highlights</span></div></motion.div>
          <div className="p-skills" aria-label="Technical skills">{skills.map(skill => <span key={skill.name}>{skill.name}</span>)}</div>
        </div></section>
      </main>
      <footer className="p-footer" id="contact">
        <BackgroundVideo paused={motionOff} flipped />
        <div className="p-marquee" aria-hidden="true"><div className="p-marquee-track">{Array.from({ length: 10 }, (_, i) => <span key={i}>Building the future <em>•</em> </span>)}</div></div>
        <div className="p-footer-content"><p className="p-eyebrow">Have something in mind?</p><h2>Let’s make it <em>happen.</em></h2><a className="p-button p-button-solid" href={GITHUB} target="_blank" rel="noreferrer">Find me on GitHub <span aria-hidden="true">↗</span></a></div>
        <div className="p-footer-bar p-container"><a className="p-footer-name" href="#hero">Max Zhou</a><p>© {new Date().getFullYear()} Max Zhou</p><a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a><a href="#hero">Back to top ↑</a></div>
      </footer>
    </div>
    {lightbox !== null && <dialog className="p-lightbox" ref={dialog} onCancel={() => setLightbox(null)} onClick={event => { if (event.target === event.currentTarget) setLightbox(null); }} aria-label={gallery[lightbox].title}>
      <div className="p-lightbox-content"><button autoFocus className="p-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close image">Close ×</button><div className="p-lightbox-image"><Image src={gallery[lightbox].image} alt={gallery[lightbox].title} fill sizes="90vw" style={{ objectFit: 'contain' }} /></div><p>{gallery[lightbox].title}</p></div>
    </dialog>}
  </div>;
}
