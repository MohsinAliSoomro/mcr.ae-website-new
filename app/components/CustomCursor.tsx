'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    
    if (!cursorDot || !cursorRing) return;
    
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrameId: number | null = null;
    
    const handleMouseMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(animateCursor);
      }
    };
    
    const animateCursor = () => {
      if (!cursorDot || !cursorRing) return;
      
      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;
      
      ringX += (dotX - ringX) * 0.2;
      ringY += (dotY - ringY) * 0.2;
      
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    
    const handleInteractiveElements = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => cursorRing?.classList.add('cursor-interactive'));
        el.addEventListener('mouseleave', () => cursorRing?.classList.remove('cursor-interactive'));
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    handleInteractiveElements();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.removeEventListener('mouseenter', () => cursorRing?.classList.add('cursor-interactive'));
        el.removeEventListener('mouseleave', () => cursorRing?.classList.remove('cursor-interactive'));
      });
    };
  }, []);
  
  return (
    <>
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>
    </>
  );
} 