import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setShopOpen(false);
    setCollectionsOpen(false);
    setMobileOpen(false);
  }, [location]);

  const shopCategories = [
    'All Clothing', 'Dresses', 'Tops & Shirts', 'Skirts & Trousers', 'Jackets & Coats', 'Accessories'
  ];

  const collectionLinks = [
    'The Signature Collection', 'Summer Collection', 'Winter Collection', 'Limited Editions'
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? 'h-12 bg-light-sand/92 backdrop-blur-xl border-b border-dark-taupe/6'
            : 'h-[60px] bg-light-sand border-b border-dark-taupe/6'
        }`}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="text-nav text-dark-taupe tracking-[0.1em] hover:text-sunflower-gold transition-colors">
            SUNFLOWER
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => { setShopOpen(!shopOpen); setCollectionsOpen(false); }}
                className={`text-nav transition-colors ${shopOpen ? 'text-dark-taupe' : 'text-dark-taupe/60 hover:text-dark-taupe'}`}
              >
                Shop
              </button>
              {shopOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl p-6 grid grid-cols-3 gap-8 min-w-[600px] animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <div>
                    <h4 className="text-caption text-dark-taupe mb-3">Shop by Category</h4>
                    <ul className="space-y-2">
                      {shopCategories.map(cat => (
                        <li key={cat}>
                          <Link to="/shop" className="text-sm text-warm-grey hover:text-dark-taupe transition-colors">
                            {cat}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-caption text-dark-taupe mb-3">Shop by Collection</h4>
                    <ul className="space-y-2">
                      {collectionLinks.map(col => (
                        <li key={col}>
                          <Link to="/collection" className="text-sm text-warm-grey hover:text-dark-taupe transition-colors">
                            {col}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-light-sand rounded-lg p-4">
                    <h4 className="text-caption text-dark-taupe mb-2">Featured</h4>
                    <p className="font-display text-lg text-dark-taupe mb-2">The Signature Collection</p>
                    <Link to="/collection" className="text-sm text-sunflower-gold hover:underline">
                      Explore the Collection →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => { setCollectionsOpen(!collectionsOpen); setShopOpen(false); }}
                className={`text-nav transition-colors ${collectionsOpen ? 'text-dark-taupe' : 'text-dark-taupe/60 hover:text-dark-taupe'}`}
              >
                Collections
              </button>
              {collectionsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl p-4 min-w-[240px] animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setCollectionsOpen(false)}
                >
                  <ul className="space-y-2">
                    {collectionLinks.map(col => (
                      <li key={col}>
                        <Link to="/collection" className="text-sm text-warm-grey hover:text-dark-taupe transition-colors block py-1">
                          {col}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link to="/about" className="text-nav text-dark-taupe/60 hover:text-dark-taupe transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-nav text-dark-taupe/60 hover:text-dark-taupe transition-colors">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-5">
            <button className="text-dark-taupe hover:text-sunflower-gold transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="text-dark-taupe hover:text-sunflower-gold transition-colors">
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <Link to="/shop" className="text-dark-taupe hover:text-sunflower-gold transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-dark-taupe"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-light-sand pt-16 px-6 md:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 mt-8">
            <Link to="/shop" className="font-display text-3xl text-dark-taupe">Shop</Link>
            <Link to="/collection" className="font-display text-3xl text-dark-taupe">Collections</Link>
            <Link to="/about" className="font-display text-3xl text-dark-taupe">About</Link>
            <Link to="/contact" className="font-display text-3xl text-dark-taupe">Contact</Link>
          </nav>
          <div className="flex gap-6 mt-12">
            <Heart size={24} strokeWidth={1.5} className="text-dark-taupe" />
            <ShoppingBag size={24} strokeWidth={1.5} className="text-dark-taupe" />
          </div>
        </div>
      )}
    </>
  );
}
