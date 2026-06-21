import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-deep-espresso">
      {/* Newsletter mini */}
      <div className="border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Join the Sunflower Circle</h3>
            <p className="text-sm text-white/60 mt-1">New collections and studio stories, monthly.</p>
          </div>
          {subscribed ? (
            <p className="text-sunflower-gold font-body font-medium">Thank you for subscribing</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-transparent border-b border-white/20 text-white placeholder:text-white/40 px-0 py-2 text-sm focus:outline-none focus:border-sunflower-gold transition-colors w-full md:w-64"
              />
              <button
                type="submit"
                className="text-button bg-sunflower-gold text-dark-taupe px-6 py-2 rounded hover:bg-white transition-colors whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="text-nav text-white tracking-[0.1em]">SUNFLOWER</span>
            <p className="text-body-small text-warm-grey mt-3">Cape Town, South Africa</p>
            <div className="flex gap-4 mt-4">
              <span className="text-white/60 hover:text-white transition-colors cursor-pointer">
                <Instagram size={20} />
              </span>
              <span className="text-white/60 hover:text-white transition-colors cursor-pointer">
                <Mail size={20} />
              </span>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-caption text-white/60 mb-4">Shop</h4>
            <ul className="space-y-2">
              {['All Clothing', 'Dresses', 'Tops & Shirts', 'Skirts & Trousers', 'Jackets & Coats', 'Accessories'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-caption text-white/70 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-caption text-white/60 mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About the Designer', to: '/about' },
                { label: 'Our Craftsmanship', to: '/about' },
                { label: 'Sustainability', to: '/about' },
                { label: 'Contact', to: '/contact' },
                { label: 'FAQ', to: '/contact' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to} className="text-caption text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-caption text-warm-grey">&copy; 2025 Sunflower Designs. All rights reserved.</p>
          <p className="text-caption text-warm-grey">Cape Town, South Africa</p>
        </div>
      </div>
    </footer>
  );
}
