import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });

    for (const element of elements) {
      element.setAttribute('data-animate', 'true');
      observer.observe(element);
    }
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.removeAttribute('data-animate'));
    };
  }, []);
}
