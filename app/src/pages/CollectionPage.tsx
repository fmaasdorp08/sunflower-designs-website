import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { ChevronRight } from 'lucide-react';

const lookbookImages = [
  { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1067&fit=crop&q=80', aspect: '3/4' },
  { src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop&q=80', aspect: '4/5' },
  { src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1067&fit=crop&q=80', aspect: '3/4' },
  { src: 'https://images.unsplash.com/photo-1584273143981-41c073df8d89?w=800&h=800&fit=crop&q=80', aspect: '1/1' },
  { src: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1067&fit=crop&q=80', aspect: '3/4' },
  { src: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&h=800&fit=crop&q=80', aspect: '1/1' },
];

const keyPieces = [
  {
    id: 'farah-blazer',
    name: 'The Farah Blazer',
    description: 'Our signature blazer — structured yet soft, powerful yet feminine. Cut from Italian wool-blend with covered buttons and a tailored silhouette that works as well with jeans as it does with trousers.',
    price: 2850,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1067&fit=crop&q=80',
  },
  {
    id: 'wrap-dress',
    name: 'The Signature Wrap Dress',
    description: 'The dress that started it all. A fluid silk-blend wrap that flatters every body, tied at the waist and falling to midi length. Ink blue — our signature colour.',
    price: 2450,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1067&fit=crop&q=80',
  },
  {
    id: 'palazzo-trousers',
    name: 'Pleated Palazzo Trousers',
    description: 'Effortless elegance in motion. High-waist, wide-leg trousers with precise pleating that creates beautiful movement with every step. Cut from fluid Japanese crepe.',
    price: 1950,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1067&fit=crop&q=80',
  },
];

const signatureProducts = products.filter(p => p.collection === 'signature');

export default function CollectionPage() {
  const heroRef = useScrollReveal<HTMLElement>({ threshold: '60%' });
  const storyRef = useScrollReveal<HTMLElement>({ threshold: '80%' });
  const lookbookRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.1, threshold: '80%' });
  const shopRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08, threshold: '85%' });

  return (
    <main className="pt-[60px]">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=2400&h=1600&fit=crop&q=80"
            alt="The Signature Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 p-8 md:p-12 max-w-[600px]">
          <p className="text-caption text-sunflower-gold mb-3">THE SIGNATURE COLLECTION</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[100px] lg:leading-[95px] text-white tracking-[-0.02em]">
            Designed for the<br />Woman Who Knows
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6">
            A curated edit of timeless pieces — each one designed to be lived in, loved, and last.
          </p>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="bg-white py-24 md:py-32">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-[64px] lg:leading-[64px] text-dark-taupe tracking-[-0.02em]">
            The Philosophy
          </h2>
          <p className="text-lg md:text-xl text-warm-grey mt-8 leading-relaxed">
            The Signature Collection is built on a simple belief: that the best clothes are the ones you reach for without thinking. Each piece is designed to move with you — from morning meetings to evening dinners, from Cape Town to anywhere your life takes you.
          </p>
          <p className="text-lg md:text-xl text-warm-grey mt-6 leading-relaxed">
            We use only premium natural fabrics — Italian wool, Japanese silk, South African linen. Every detail, from the placement of a pocket to the angle of a lapel, is considered. This is slow fashion at its most refined.
          </p>
        </div>
      </section>

      {/* Key Pieces */}
      <section className="bg-light-sand py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-[80px] lg:leading-[72px] text-dark-taupe tracking-[-0.02em] mb-16">
            The Key Pieces
          </h2>
          <div className="space-y-16">
            {keyPieces.map((piece, i) => (
              <div
                key={piece.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:[direction:rtl] md:[&>*]:[direction:ltr]' : ''}`}
              >
                <div>
                  <img
                    src={piece.image}
                    alt={piece.name}
                    className="w-full aspect-[3/4] object-cover rounded-2xl"
                  />
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-[40px] md:leading-[48px] text-dark-taupe">
                    {piece.name}
                  </h3>
                  <p className="text-warm-grey mt-4 leading-relaxed">
                    {piece.description}
                  </p>
                  <p className="text-sm text-warm-grey mt-3">
                    R{piece.price.toLocaleString()}
                  </p>
                  <Link
                    to={`/product/${piece.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-sunflower-gold mt-6 hover:underline"
                  >
                    View Details <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Gallery */}
      <section className="bg-deep-espresso py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-caption text-sunflower-gold mb-3">LOOKBOOK</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[80px] lg:leading-[72px] text-white tracking-[-0.02em]">
              How to Wear It
            </h2>
          </div>
          <div ref={lookbookRef} className="columns-2 md:columns-3 gap-4 space-y-4">
            {lookbookImages.map((img, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-lg group">
                <img
                  src={img.src}
                  alt={`Lookbook ${i + 1}`}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ aspectRatio: img.aspect }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop the Collection */}
      <section className="bg-light-sand py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-dark-taupe tracking-[-0.02em] mb-12">
            Shop the Collection
          </h2>
          <div ref={shopRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {signatureProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link to="/shop" className="inline-flex items-center gap-1 text-sm font-medium text-sunflower-gold mt-12 hover:underline">
            View All Products <ChevronRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
