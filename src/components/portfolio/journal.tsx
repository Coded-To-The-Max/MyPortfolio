import Image from 'next/image';
import { AnimatedDetails } from './animated-details';
import type { CSSProperties } from 'react';
import { journalEntries, readingMinutes } from './journal-data';

export function Journal({ motionOff = false }: { motionOff?: boolean }) {
  return <section className="p-section p-journal" id="thoughts" aria-labelledby="thoughts-title"><div className="p-container">
    <div className="p-section-heading"><div><p className="p-eyebrow">Currently exploring</p><h2 id="thoughts-title">Recent <em>thoughts</em></h2><p>Questions I’m following across AI, science, and the future of computation.</p></div></div>
    <div className="p-journal-list">{journalEntries.map(entry => <AnimatedDetails className="p-journal-entry" id={entry.id} key={entry.id} motionOff={motionOff} summary={<>
        <span className="p-journal-cover" style={{ '--planet-color': entry.planet.color, '--planet-turn': entry.planet.turn } as CSSProperties}>
          <span className="p-journal-planet"><Image src={entry.planet.image} alt={entry.planet.name} fill quality={90} sizes="(max-width: 700px) 52px, 88px" /></span>
        </span>
        <span className="p-journal-label"><span className="p-journal-category">{entry.category}</span><strong>{entry.title}</strong><span className="p-journal-excerpt">{entry.excerpt}</span></span>
        <span className="p-journal-meta"><span>{readingMinutes(entry)} min read</span><time dateTime="2026-09-11">Sep 2026</time></span>
        <span className="p-journal-expand" aria-hidden="true">+</span>
      </>}>
      <article className="p-journal-article" aria-label={entry.title}>
        <p className="p-journal-intro">Research I’m following. Questions I’m still working through.</p>
        {entry.sections.map(section => <section key={section.heading}>
          <h3>{section.heading}</h3>
          {section.paragraphs.map(paragraph => <p key={paragraph.slice(0,50)}>{paragraph}</p>)}
          {section.sources && <ul className="p-journal-sources" aria-label={`Sources for ${section.heading}`}>{section.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title} <span aria-hidden="true">↗</span></a></li>)}</ul>}
        </section>)}
      </article>
    </AnimatedDetails>)}</div>
  </div></section>;
}
