'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let frame: number;
    let finish: ReturnType<typeof setTimeout>;
    const tick = (time: number) => {
      const value = Math.min(100, Math.floor((time - start) / 27));
      setCount(value);
      if (value < 100) frame = requestAnimationFrame(tick);
      else finish = setTimeout(onComplete, 400);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); clearTimeout(finish); };
  }, [onComplete]);
  const word = ['Design', 'Create', 'Inspire'][Math.min(2, Math.floor(count / 34))];
  return <motion.div className="p-loader" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
    <span className="p-eyebrow">Portfolio</span>
    <AnimatePresence mode="wait"><motion.span className="p-loader-word" key={word} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>{word}</motion.span></AnimatePresence>
    <button className="p-loader-skip" onClick={onComplete}>Skip intro ↗</button>
    <span className="p-loader-count" aria-hidden="true">{String(count).padStart(3, '0')}</span>
    <div className="p-loader-track"><div style={{ transform: `scaleX(${count / 100})` }} /></div>
  </motion.div>;
}
