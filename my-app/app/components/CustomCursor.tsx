'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Track mouse movement
    window.addEventListener('mousemove', move);

    // Track hover state over clickable elements
    const targets = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"]'
    );

    targets.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-all duration-75 rounded-full ${
        isHovering ? 'bg-white mix-blend-difference' : 'bg-black'
      }`}
      style={{
        width: '12px',
        height: '12px',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}