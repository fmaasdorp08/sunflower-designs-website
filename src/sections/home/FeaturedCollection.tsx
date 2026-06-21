import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { brandImages } from '@/data/brandImages';

const featuredPieces = [
  {
    title: 'The Muslin Co-ord',
    price: 'Made to order',
    image: brandImages.muslinSet,
  },
  {
    title: 'Soft Daywear Layers',
    price: 'Small batch pieces',
    image: brandImages.farah,
  },
  {
    title: 'Summer Story Pieces',
    price: 'Spring / Summer',
    image: brandImages.summerArtwork,
  },
  {
    title: 'Finishing Touches',
    price: 'Locally finished',
    image: brandImages.swingTags,
  },
];

export default function FeaturedCollection() {
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08, threshold: '85%' });

  return (
    <section className="bg-light-sand py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          overline="THE COLLECTION"
          headline="Pieces for Every Season"
        />
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPieces.map(piece => (
            <div key={piece.title} className="group block">
              <div className="relative aspect-[3/4] bg-white rounded-2xl overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-light-sand/90 px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-caption text-dark-taupe">VIEW STORY</span>
                </div>
              </div>
              <h3 className="font-body font-medium text-lg text-dark-taupe mt-4">{piece.title}</h3>
              <p className="text-sm text-warm-grey">{piece.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
