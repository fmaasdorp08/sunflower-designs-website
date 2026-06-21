import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { Instagram } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&h=800&fit=crop&q=80',
];

export default function InstagramGallery() {
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08, threshold: '85%' });

  return (
    <section className="bg-light-sand py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          overline="@SUNFLOWERDESIGNS"
          headline="Follow the Journey"
        />
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-square group overflow-hidden">
              <img
                src={src}
                alt={`Sunflower Designs Instagram ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deep-espresso/0 group-hover:bg-deep-espresso/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm font-medium text-dark-taupe">
          Follow @sunflowerdesigns on Instagram →
        </p>
      </div>
    </section>
  );
}
