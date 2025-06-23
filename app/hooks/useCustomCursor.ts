import { useEffect } from 'react';

export function useCustomCursor() {
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
    
    const addInteractivity = (el: Element) => {
      el.addEventListener('mouseenter', () => cursorRing?.classList.add('cursor-interactive'));
      el.addEventListener('mouseleave', () => cursorRing?.classList.remove('cursor-interactive'));
    };
    
    const handleInteractiveElements = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(addInteractivity);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    handleInteractiveElements();
    
    // Handle dynamically added elements with MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const element = node as Element;
              if (element.tagName === 'A' || element.tagName === 'BUTTON' || element.getAttribute('role') === 'button') {
                addInteractivity(element);
              }
              
              // Check for child interactive elements
              element.querySelectorAll('a, button, [role="button"]').forEach(addInteractivity);
            }
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
    };
  }, []);
} 