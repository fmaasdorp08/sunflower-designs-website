import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Craftsmanship() {
  const sectionRef = useScrollReveal<HTMLElement>({ threshold: '70%' });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618047-f4b511c9d616?w=2400&h=1200&fit=crop&q=80"
          alt="Hand stitching craftsmanship"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26,23,21,0.75) 0%, rgba(26,23,21,0.3) 60%, transparent 100%)'
          }}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-[600px] px-6 md:px-12 lg:px-32 py-16 md:py-24">
        <p className="text-caption text-sunflower-gold mb-3">OUR CRAFT</p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-[80px] lg:leading-[72px] text-white tracking-[-0.02em]">
          Made in Cape Town,<br />Worn Across the World
        </h2>
        <p className="text-lg md:text-xl text-white/80 mt-6 leading-relaxed">
          Every Sunflower Designs piece is crafted with intention in our Cape Town studio. We work with local artisans, source sustainable fabrics, and produce in small batches — because quality cannot be rushed.
        </p>
        <Link
          to="/about"
          className="inline-block mt-8 text-button bg-white text-dark-taupe px-8 py-3.5 rounded hover:bg-sunflower-gold hover:text-white transition-colors duration-250"
        >
          DISCOVER OUR PROCESS
        </Link>
      </div>
    </section>
  );
}
