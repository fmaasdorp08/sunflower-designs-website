import { Link } from 'react-router-dom';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-white rounded-2xl overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-light-sand/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="text-caption text-dark-taupe">QUICK VIEW</span>
        </div>
      </div>
      <h3 className="font-body font-medium text-lg text-dark-taupe mt-4">{product.name}</h3>
      <p className="text-sm text-warm-grey">R{product.price.toLocaleString()}</p>
    </Link>
  );
}
