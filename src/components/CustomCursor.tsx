import { useCustomCursor } from '@/hooks/useCustomCursor';

export default function CustomCursor() {
  const cursorRef = useCustomCursor();

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-2 h-2 rounded-full bg-sunflower-gold pointer-events-none z-[9999] opacity-0 mix-blend-difference transition-[width,height] duration-300 ease-out hidden md:block"
      style={{ willChange: 'transform' }}
    >
      <style>{`
        .cursor-expanded {
          width: 40px !important;
          height: 40px !important;
        }
      `}</style>
    </div>
  );
}
