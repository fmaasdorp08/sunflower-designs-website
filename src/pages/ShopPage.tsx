import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { ChevronRight } from 'lucide-react';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const bannerRef = useScrollReveal<HTMLDivElement>({ threshold: '85%' });
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08, threshold: '85%' });

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-[60px]">
      {/* Header */}
      <section className="bg-light-sand pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-[80px] lg:leading-[72px] text-dark-taupe tracking-[-0.02em]">
            Shop
          </h1>
          <div className="flex flex-wrap gap-6 mt-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-nav transition-colors pb-1 border-b-2 ${
                  activeCategory === cat
                    ? 'text-dark-taupe border-sunflower-gold'
                    : 'text-dark-taupe/50 border-transparent hover:text-dark-taupe'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="bg-light-sand pb-8">
        <div className="max-w-[1280px] mx-auto px-6">
          <div ref={bannerRef} className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-3 aspect-video md:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=675&fit=crop&q=80"
                alt="The Signature Collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-caption text-muted-olive mb-2">THIS SEASON</p>
              <h2 className="font-display text-3xl md:text-[40px] md:leading-[48px] text-dark-taupe">
                The Signature Collection
              </h2>
              <p className="text-warm-grey mt-3 leading-relaxed">
                Timeless pieces designed for the modern South African woman. Crafted in Cape Town from premium fabrics.
              </p>
              <Link to="/collection" className="text-sm font-medium text-sunflower-gold mt-4 hover:underline inline-flex items-center gap-1">
                Explore Collection <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-light-sand pb-24 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-16">
            <button className="w-9 h-9 rounded-full bg-dark-taupe text-white text-sm font-medium flex items-center justify-center">
              1
            </button>
            <button className="w-9 h-9 rounded-full text-dark-taupe/40 hover:text-dark-taupe text-sm font-medium flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-9 h-9 rounded-full text-dark-taupe/40 hover:text-dark-taupe text-sm font-medium flex items-center justify-center transition-colors">
              3
            </button>
            <button className="w-9 h-9 rounded-full text-dark-taupe hover:text-sunflower-gold text-sm font-medium flex items-center justify-center transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
