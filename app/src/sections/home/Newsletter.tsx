import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const ref = useScrollReveal<HTMLElement>({ threshold: '80%' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section ref={ref} className="bg-deep-espresso py-20 md:py-24">
      <div className="max-w-[640px] mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-[64px] md:leading-[64px] text-white tracking-[-0.02em]">
          Join the <span className="text-sunflower-gold">Sunflower</span> Circle
        </h2>
        <p className="text-base text-white/70 mt-4">
          Be the first to know about new collections, exclusive offers, and stories from our Cape Town studio.
        </p>

        {subscribed ? (
          <p className="text-sunflower-gold font-medium mt-8 animate-in fade-in duration-300">
            Thank you for subscribing
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/40 px-0 py-3 text-base focus:outline-none focus:border-sunflower-gold transition-colors"
            />
            <button
              type="submit"
              className="mt-6 text-button bg-sunflower-gold text-dark-taupe px-10 py-3.5 rounded hover:bg-white transition-colors duration-250"
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        <p className="text-caption text-white/40 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
