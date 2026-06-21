import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  overline?: string;
  headline: string;
  centered?: boolean;
  light?: boolean;
  size?: 'xl' | 'l' | 'm';
}

export default function SectionHeader({ overline, headline, centered = false, light = false, size = 'l' }: SectionHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const sizeClasses = {
    xl: 'text-5xl md:text-7xl lg:text-[120px] lg:leading-[108px]',
    l: 'text-4xl md:text-6xl lg:text-[80px] lg:leading-[72px]',
    m: 'text-3xl md:text-5xl lg:text-[64px] lg:leading-[64px]',
  };

  useEffect(() => {
    const el = containerRef.current;
    const h = headlineRef.current;
    if (!el || !h) return;

    // Simple word-by-word reveal
    const text = h.textContent || '';
    h.innerHTML = text.split(' ').map(word => `<span class="inline-block overflow-hidden mr-[0.3em]"><span class="reveal-word inline-block">${word}</span></span>`).join('');

    const words = h.querySelectorAll('.reveal-word');
    gsap.set(words, { y: 40, opacity: 0 });

    const tween = gsap.to(words, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [headline]);

  return (
    <div ref={containerRef} className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {overline && (
        <p className={`text-caption mb-3 ${light ? 'text-sunflower-gold' : 'text-muted-olive'}`}>
          {overline}
        </p>
      )}
      <h2
        ref={headlineRef}
        className={`font-display font-normal tracking-[-0.02em] ${sizeClasses[size]} ${light ? 'text-white' : 'text-dark-taupe'}`}
      >
        {headline}
      </h2>
    </div>
  );
}
