import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { products } from '@/data/products';

export default function FeaturedCollection() {
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08, threshold: '85%' });

  const featured = products.slice(0, 4);

  return (
    <section className="bg-light-sand py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          overline="THE COLLECTION"
          headline="Pieces for Every Season"
        />
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
