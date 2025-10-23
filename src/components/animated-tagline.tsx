'use client';

import { useState, useEffect } from 'react';

interface AnimatedTaglineProps {
  text: string;
  className?: string;
}

export function AnimatedTagline({ text, className }: AnimatedTaglineProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) {
      setDisplayedText('');
      return;
    }

    let i = 0;
    setDisplayedText(''); // Explicitly clear before starting

    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <p className={className}>
      {displayedText}
      <span className="animate-ping">_</span>
    </p>
  );
}
