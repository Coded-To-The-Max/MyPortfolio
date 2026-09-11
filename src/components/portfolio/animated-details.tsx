'use client';

import { useId, useState, type ReactNode } from 'react';
import { motion } from 'motion/react';

export function AnimatedDetails({ summary, children, className, id, motionOff = false }: {
  summary: ReactNode; children: ReactNode; className: string; id?: string; motionOff?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const panelId = useId();
  const refreshLayout = () => {
    void import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => ScrollTrigger.refresh());
  };

  return <details id={id} className={className} open={visible} data-expanded={expanded}>
    <summary aria-expanded={expanded} aria-controls={panelId} onClick={event => {
      event.preventDefault();
      setVisible(true);
      setExpanded(value => !value);
    }}>{summary}</summary>
    <motion.div id={panelId} className="p-disclosure-panel" aria-hidden={!expanded}
      ref={element => { if (element) element.inert = !expanded; }}
      initial={false} animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
      transition={{ height: { duration: motionOff ? 0 : .42, ease: [.22, 1, .36, 1] }, opacity: { duration: motionOff ? 0 : .24 } }}
      onAnimationComplete={() => { if (!expanded) setVisible(false); refreshLayout(); }}>
      <motion.div className="p-disclosure-content" initial={false}
        animate={{
          opacity: expanded ? 1 : 0,
          x: expanded || motionOff ? 0 : -8,
          maskPosition: expanded || motionOff ? '0% 0%' : '100% 100%',
        }}
        transition={{ duration: motionOff ? 0 : expanded ? .32 : .14, ease: [.22, 1, .36, 1] }}>
        {children}
      </motion.div>
    </motion.div>
  </details>;
}
