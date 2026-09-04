import { skills } from '@/lib/data';

const names = skills.map((skill) => skill.name);
const skillGroups = [
  { label: 'Interface', items: names.filter((name) => ['React', 'Tailwind CSS'].includes(name)) },
  { label: 'Languages', items: names.filter((name) => ['JavaScript', 'Python', 'C++'].includes(name)) },
  { label: 'Runtime', items: names.filter((name) => name === 'Node.js') },
];

export function Skills() {
  return (
    <section id="skills" className="section-block"><div className="section-container">
      <div className="section-head"><h2 className="section-title">Working set</h2><p className="section-summary">The focused toolkit behind the products and experiments shown here.</p></div>
      <dl className="skills-layout">{skillGroups.map((group) => <div className="skill-row" key={group.label}><dt>{group.label}</dt><dd>{group.items.map((item) => <span key={item}>{item}</span>)}</dd></div>)}</dl>
    </div></section>
  );
}
