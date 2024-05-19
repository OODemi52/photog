import { useEffect, useState, useRef } from 'react';

export function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);
    const hasIntersected = useRef(false); // to track if the intersection has happened
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasIntersected.current) {
          setIntersecting(true);
          hasIntersected.current = true; // Mark as intersected
          observer.unobserve(ref.current); // Stop observing after it becomes visible
        }
      });
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }