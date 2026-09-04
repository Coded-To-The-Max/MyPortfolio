import { futureVision } from '@/lib/data';

export function Mission() {
  return (
    <section id="mission" className="section-block"><div className="section-container mission-grid">
      <blockquote className="mission-quote">“{futureVision}”</blockquote>
      <div><p className="mono-label">Operating principle</p><p className="mission-note">Start with a real problem. Make the interface legible. Keep the result useful after the novelty wears off.</p></div>
    </div></section>
  );
}
