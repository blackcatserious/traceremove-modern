"use client";

import { useState, useEffect } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, zIndex: 100,
      width: `${progress}%`, height: "2px",
      background: "linear-gradient(90deg, #ef5044, #f87a71)",
      transition: "width 0.1s linear",
    }} />
  );
}
