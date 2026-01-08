'use client';

import { useEffect, useRef } from 'react';

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener('mousemove', onMove);

    // Smooth interpolation (glow feels better with easing)
    const animate = () => {
      x += (tx - x) * 0.25;
      y += (ty - y) * 0.25;

      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <div ref={dotRef} className="cursor-glow" aria-hidden />;
}
