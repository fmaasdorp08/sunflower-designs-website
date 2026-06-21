import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { Instagram } from 'lucide-react';
import { brandImages } from '@/data/brandImages';

const images = [
  brandImages.farah,
  brandImages.muslinSet,
  brandImages.swingTags,
  brandImages.wovenLabels,
  brandImages.madeInSaLabel,
  brandImages.ribbonLabels,
  brandImages.stickerSheet,
  brandImages.springSummerCover,
  brandImages.collectionComingSoon,
  brandImages.summerArtwork,
  brandImages.instagramGrid,
  brandImages.instagramProfile,
];

export default function InstagramGallery() {
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08, threshold: '85%' });

  return (
    <section className="bg-light-sand py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          overline="@SUNFLOWERDESIGNS_"
          headline="Follow the Journey"
        />
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-square group overflow-hidden bg-white">
              <img
                src={src}
                alt={`Sunflower Designs visual ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deep-espresso/0 group-hover:bg-deep-espresso/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm font-medium text-dark-taupe">
          Follow @sunflowerdesigns_ on Instagram →
        </p>
      </div>
    </section>
  );
}
