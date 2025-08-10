// src/hooks/useLenis.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,       // scroll speed (adjust as you like)
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup on unmount
    };
  }, []);
}
