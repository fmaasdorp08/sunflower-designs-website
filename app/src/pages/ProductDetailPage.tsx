import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProductCard from '@/components/ProductCard';
import { getProductById, getRelatedProducts } from '@/data/products';
import { Heart, Share2, ChevronRight } from 'lucide-react';

const tabData = [
  { id: 'description', label: 'Description' },
  { id: 'details', label: 'Details & Care' },
  { id: 'shipping', label: 'Shipping & Returns' },
];

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [added, setAdded] = useState(false);

  const relatedRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.08, threshold: '85%' });

  if (!product) {
    return (
      <main className="pt-[60px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-dark-taupe">Product Not Found</h1>
          <Link to="/shop" className="text-sunflower-gold mt-4 inline-block hover:underline">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-[60px]">
      {/* Product Hero */}
      <section className="bg-light-sand py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-caption text-warm-grey mb-8">
            <Link to="/shop" className="hover:text-dark-taupe">Shop</Link>
            <ChevronRight size={12} />
            <span>{product.category}</span>
            <ChevronRight size={12} />
            <span className="text-dark-taupe">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                      activeImage === i ? 'ring-2 ring-sunflower-gold' : 'opacity-70 hover:opacity-100'
                    } transition-all`}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <h1 className="font-display text-4xl md:text-5xl text-dark-taupe tracking-[-0.01em]">
                {product.name}
              </h1>
              <p className="text-xl text-dark-taupe mt-2">
                R{product.price.toLocaleString()}
              </p>
              <p className="text-warm-grey mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Colour */}
              <div className="mt-6">
                <p className="text-caption text-dark-taupe mb-2">Colour</p>
                <div className="flex gap-3">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveColor(i)}
                      className={`w-8 h-8 rounded-full transition-all ${
                        activeColor === i ? 'ring-2 ring-sunflower-gold ring-offset-2' : ''
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-caption text-dark-taupe">Size</p>
                  <button className="text-caption text-sunflower-gold hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className={`px-4 py-2 rounded text-sm font-medium transition-colors border ${
                        activeSize === size
                          ? 'bg-dark-taupe text-white border-dark-taupe'
                          : 'bg-transparent text-dark-taupe border-earth-tan hover:border-sunflower-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`mt-8 w-full py-4 rounded text-button transition-colors duration-250 ${
                  added
                    ? 'bg-muted-olive text-white'
                    : 'bg-dark-taupe text-white hover:bg-sunflower-gold'
                }`}
              >
                {added ? 'ADDED TO CART ✓' : 'ADD TO CART'}
              </button>

              {/* Actions */}
              <div className="flex gap-6 mt-4">
                <button className="flex items-center gap-2 text-sm text-warm-grey hover:text-sunflower-gold transition-colors">
                  <Heart size={16} /> Wishlist
                </button>
                <button className="flex items-center gap-2 text-sm text-warm-grey hover:text-sunflower-gold transition-colors">
                  <Share2 size={16} /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="bg-white py-16">
        <div className="max-w-[960px] mx-auto px-6">
          {/* Tab Nav */}
          <div className="flex gap-6 border-b border-earth-tan/30 mb-8">
            {tabData.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-sm font-medium uppercase tracking-wider transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'text-dark-taupe border-sunflower-gold'
                    : 'text-warm-grey border-transparent hover:text-dark-taupe'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="transition-opacity duration-200">
            {activeTab === 'description' && (
              <p className="text-warm-grey leading-relaxed">{product.description}</p>
            )}
            {activeTab === 'details' && (
              <ul className="space-y-0">
                {product.details.map((detail, i) => (
                  <li key={i} className="py-3 border-b border-dark-taupe/6 text-warm-grey">
                    {detail}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'shipping' && (
              <ul className="space-y-0">
                {product.shipping.map((item, i) => (
                  <li key={i} className="py-3 border-b border-dark-taupe/6 text-warm-grey">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Complete the Look */}
      <section className="bg-light-sand py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl text-dark-taupe tracking-[-0.02em] mb-12">
            Complete the Look
          </h2>
          <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {related.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
