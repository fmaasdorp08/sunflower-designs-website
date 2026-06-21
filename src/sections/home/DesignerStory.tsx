import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { brandImages } from '@/data/brandImages';

export default function DesignerStory() {
  const imgRef = useScrollReveal<HTMLDivElement>({ threshold: '80%' });
  const textRef = useScrollReveal<HTMLDivElement>({ delay: 0.2, threshold: '80%' });

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={imgRef} className="relative">
            <img
              src={brandImages.farah}
              alt="Farah Davids, designer of Sunflower Designs"
              className="w-full aspect-[3/4] object-cover rounded-2xl"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-light-sand rounded-2xl p-5 shadow-sm max-w-[220px]">
              <p className="text-caption text-muted-olive mb-2">FOUNDER LED</p>
              <p className="font-display text-2xl leading-7 text-dark-taupe">Every piece starts with Farah’s eye.</p>
            </div>
          </div>
          <div ref={textRef}>
            <p className="text-caption text-muted-olive mb-3">THE DESIGNER</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[64px] lg:leading-[64px] text-dark-taupe tracking-[-0.02em]">
              Designed by Farah Davids
            </h2>
            <p className="text-lg md:text-xl text-warm-grey mt-6 leading-relaxed">
              Sunflower Designs was born from a deep love of fashion and a desire to create something meaningful. Every garment carries Farah’s hand and point of view, from fabric choices to the final finishing details.
            </p>
            <p className="text-lg md:text-xl text-warm-grey mt-4 leading-relaxed">
              The result is clothing that feels personal, wearable and intentionally made for women who value comfort, individuality and quiet elegance.
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
