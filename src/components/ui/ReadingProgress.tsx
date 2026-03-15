"use client";

import { useState, useEffect } from "react";

export function ReadingProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const fn = () => {
      const t = document.documentElement.scrollHeight - window.innerHeight;
      setP(t > 0 ? (window.scrollY / t) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        width: `${p}%`,
        height: 2,
        background: "linear-gradient(90deg, #ef5044, #f87a71)",
        transition: "width 0.1s linear",
      }}
    />
  );
}
