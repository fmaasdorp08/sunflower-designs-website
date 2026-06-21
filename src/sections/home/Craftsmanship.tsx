import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { brandImages } from '@/data/brandImages';

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
          src={brandImages.labelTagsClose}
          alt="Sunflower Designs labels and finishing details"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26,23,21,0.82) 0%, rgba(26,23,21,0.48) 55%, rgba(26,23,21,0.12) 100%)'
          }}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-[600px] px-6 md:px-12 lg:px-32 py-16 md:py-24">
        <p className="text-caption text-sunflower-gold mb-3">OUR CRAFT</p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-[80px] lg:leading-[72px] text-white tracking-[-0.02em]">
          Made in South Africa,<br />Finished with Care
        </h2>
        <p className="text-lg md:text-xl text-white/80 mt-6 leading-relaxed">
          From swing tags and woven labels to small-batch production, every Sunflower Designs detail is built to feel personal, considered and proudly local.
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
