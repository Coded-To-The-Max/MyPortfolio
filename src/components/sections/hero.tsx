'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { generateAnimatedHeroTagline } from '@/ai/flows/generate-animated-hero-tagline';
import { experiences, futureVision, skills, userInfo } from '@/lib/data';

export function Hero() {
  const [tagline, setTagline] = useState('Building useful software with a clear point of view.');
  useEffect(() => {
    let isCancelled = false;
    generateAnimatedHeroTagline({ userName: userInfo.name, userSkills: skills.map((skill) => skill.name), userExperience: experiences.map((item) => `${item.role} at ${item.company}`).join(', '), futureVision })
      .then((result) => { if (!isCancelled) setTagline(result.tagline); })
      .catch(() => { if (!isCancelled) setTagline('Building useful software with a clear point of view.'); });
    return () => { isCancelled = true; };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="section-container hero-grid">
        <div className="hero-copy">
          <p className="mono-label">Developer portfolio / 2026</p>
          <h1 className="hero-title">I build software that makes complex work easier to use.</h1>
          <p className="hero-lede">I’m {userInfo.name}, a developer working across web products, browser tools, and student-focused software.</p>
          <div className="hero-actions">
            <Link className="primary-link" href="#projects">Inspect the work</Link>
            <Link className="secondary-link" href={`https://github.com/${userInfo.githubUsername}`} target="_blank" rel="noreferrer">GitHub profile</Link>
          </div>
        </div>
        <aside className="profile-panel" aria-label="Profile summary">
          <p className="mono-label">Current profile</p>
          <dl>
            <div className="profile-panel-row"><dt>Focus</dt><dd>Useful, accessible software</dd></div>
            <div className="profile-panel-row"><dt>Stack</dt><dd>React, JavaScript, Python</dd></div>
            <div className="profile-panel-row"><dt>Work</dt><dd>Web apps and extensions</dd></div>
          </dl>
          <p className="live-line">{tagline}</p>
        </aside>
      </div>
    </section>
  );
}
