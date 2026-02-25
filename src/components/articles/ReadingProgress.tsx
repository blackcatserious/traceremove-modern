'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = Math.max(window.scrollY, 0);
      const next = total > 0 ? Math.min((current / total) * 100, 100) : 0;
      setProgress(next);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent">
      <div className="h-full bg-[#e94560] transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}
