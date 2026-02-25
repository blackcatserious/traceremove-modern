"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, ratio)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-[2px] bg-[#ef5044] transition-[width] duration-200" style={{ width: `${progress}%` }} />
  );
}
