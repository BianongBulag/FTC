'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        setProgress((window.scrollY / scrollTotal) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="reading-progress"
      style={{
        width: `${progress}%`,
        height: '4px',
        background: 'var(--accent)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1001,
        transition: 'width 0.1s'
      }}
    />
  );
}
