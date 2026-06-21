import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function DesignerStory() {
  const imgRef = useScrollReveal<HTMLDivElement>({ threshold: '80%' });
  const textRef = useScrollReveal<HTMLDivElement>({ delay: 0.2, threshold: '80%' });

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={imgRef}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=1067&fit=crop&q=80"
              alt="Farah Davids in her Cape Town studio"
              className="w-full aspect-[3/4] object-cover rounded-2xl"
            />
          </div>
          <div ref={textRef}>
            <p className="text-caption text-muted-olive mb-3">THE DESIGNER</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[64px] lg:leading-[64px] text-dark-taupe tracking-[-0.02em]">
              Designed by Farah Davids
            </h2>
            <p className="text-lg md:text-xl text-warm-grey mt-6 leading-relaxed">
              Sunflower Designs was born from a deep love of fashion and a desire to create something meaningful. Every garment I design carries a piece of my story — from the fabrics I source to the hands that bring each piece to life in Cape Town.
            </p>
            <p className="text-lg md:text-xl text-warm-grey mt-4 leading-relaxed">
              I believe fashion should be timeless, not disposable. Each collection is small, intentional, and designed to be worn for years, not seasons.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium text-sunflower-gold hover:underline transition-all"
            >
              Read My Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
