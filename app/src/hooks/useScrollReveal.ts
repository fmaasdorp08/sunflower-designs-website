import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  children?: boolean;
  threshold?: string;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      delay = 0,
      duration = 0.8,
      stagger = 0.12,
      children = false,
      threshold = '80%',
    } = options;

    const targets = children ? el.children : el;

    gsap.set(targets, { y, opacity: 0 });

    const tween = gsap.to(targets, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger: children ? stagger : 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: `top ${threshold}`,
        once: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return ref;
}
