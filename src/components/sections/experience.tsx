import { experiences } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="section-block experience"><div className="section-container">
      <div className="section-head"><h2 className="section-title">Experience log</h2><p className="section-summary">Roles where prototypes became products and technical range became practical work.</p></div>
      <div className="experience-list">{experiences.map((item) => <article className="experience-row" key={`${item.company}-${item.period}`}>
        <p className="experience-period">{item.period}</p><div><h3 className="experience-role">{item.role}</h3><p className="experience-company">{item.company}</p></div><p className="experience-description">{item.description}</p>
      </article>)}</div>
    </div></section>
  );
}
