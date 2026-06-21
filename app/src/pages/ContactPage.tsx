import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, MapPin, Instagram, ChevronDown } from 'lucide-react';

const subjects = [
  'General Inquiry',
  'Order Question',
  'Sizing Help',
  'Wholesale / Stockist',
  'Press & Media',
  'Other',
];

const faqs = [
  {
    q: 'What sizes do you offer?',
    a: 'Our garments range from XS to XL. We use standard South African sizing, and each product page includes detailed measurements. If you\'re between sizes, we recommend sizing up for a relaxed fit or down for a tailored silhouette.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery within South Africa takes 3-5 business days. Express delivery (1-2 business days) is available for R150. International shipping times vary by destination — typically 7-14 business days.',
  },
  {
    q: 'What is your returns policy?',
    a: 'We accept returns within 14 days of delivery. Items must be unworn with original tags attached. Return shipping is the customer\'s responsibility unless the item is faulty. Sale items are final sale.',
  },
  {
    q: 'Do you offer alterations?',
    a: 'We don\'t offer alterations directly, but we can recommend excellent tailors in Cape Town and Johannesburg. Many of our pieces are designed with a little extra seam allowance to allow for easy tailoring.',
  },
  {
    q: 'How do I care for my Sunflower Designs garment?',
    a: 'Care instructions vary by fabric. Wool pieces should be dry cleaned. Silk and linen can often be hand-washed in cold water. Always check the care label inside your garment, and feel free to email us with specific questions.',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const infoRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.12, threshold: '80%' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <main className="pt-[60px]">
      {/* Hero */}
      <section className="bg-light-sand pt-32 md:pt-40 pb-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-caption text-muted-olive mb-3">GET IN TOUCH</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[80px] lg:leading-[72px] text-dark-taupe tracking-[-0.02em]">
            We'd Love to<br />Hear From You
          </h1>
          <p className="text-lg md:text-xl text-warm-grey mt-6 max-w-[640px] leading-relaxed">
            Whether you have a question about sizing, want to stock Sunflower Designs, or just want to say hello — drop us a line.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[640px] mx-auto px-6">
          {formStatus === 'sent' ? (
            <div className="text-center py-12">
              <h2 className="font-display text-3xl text-dark-taupe mb-4">Message Sent</h2>
              <p className="text-warm-grey">Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-caption text-dark-taupe block mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-earth-tan text-dark-taupe placeholder:text-warm-grey/40 px-0 py-3 text-base focus:outline-none focus:border-sunflower-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-caption text-dark-taupe block mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-earth-tan text-dark-taupe placeholder:text-warm-grey/40 px-0 py-3 text-base focus:outline-none focus:border-sunflower-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-caption text-dark-taupe block mb-2">Subject</label>
                <select
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-earth-tan text-dark-taupe px-0 py-3 text-base focus:outline-none focus:border-sunflower-gold transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a subject</option>
                  {subjects.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-caption text-dark-taupe block mb-2">Your Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  className="w-full bg-transparent border border-earth-tan rounded-lg text-dark-taupe placeholder:text-warm-grey/40 p-4 text-base focus:outline-none focus:border-sunflower-gold transition-colors resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-dark-taupe text-white text-button py-4 rounded hover:bg-sunflower-gold transition-colors duration-250 disabled:opacity-50"
              >
                {formStatus === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-light-sand py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail size={24} className="text-sunflower-gold mx-auto mb-4" />
              <h3 className="font-body font-medium text-2xl text-dark-taupe mb-3">Email Us</h3>
              <p className="text-warm-grey">hello@sunflowerdesigns.co.za</p>
              <p className="text-caption text-warm-grey/60 mt-2">We typically respond within 24 hours.</p>
            </div>
            <div className="text-center">
              <MapPin size={24} className="text-sunflower-gold mx-auto mb-4" />
              <h3 className="font-body font-medium text-2xl text-dark-taupe mb-3">Visit Our Studio</h3>
              <p className="text-warm-grey whitespace-pre-line">
                {`Sunflower Designs
Unit 4, Salt River Studios
44 Salt River Road
Salt River, Cape Town
7925`}
              </p>
              <p className="text-caption text-warm-grey/60 mt-2">By appointment only.</p>
            </div>
            <div className="text-center">
              <Instagram size={24} className="text-sunflower-gold mx-auto mb-4" />
              <h3 className="font-body font-medium text-2xl text-dark-taupe mb-3">Follow Along</h3>
              <p className="text-warm-grey">@sunflowerdesigns</p>
              <p className="text-caption text-warm-grey/60 mt-2">
                Daily behind-the-scenes, new arrivals, and styling inspiration from our Cape Town studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[720px] mx-auto px-6">
          <h2 className="font-display text-3xl md:text-[40px] text-dark-taupe tracking-[-0.01em] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-dark-taupe/6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-medium text-base text-dark-taupe pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-warm-grey flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: openFaq === i ? '200px' : '0',
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  <p className="text-warm-grey leading-relaxed pb-5">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Compact */}
      <section className="bg-deep-espresso py-20">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-[64px] md:leading-[64px] text-white tracking-[-0.02em]">
            Stay Connected
          </h2>
          <p className="text-base text-white/70 mt-4">
            New collections, studio stories, and exclusive offers — delivered to your inbox.
          </p>
          {subscribed ? (
            <p className="text-sunflower-gold font-medium mt-8">Thank you for subscribing</p>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); if (newsletterEmail) setSubscribed(true); }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent border-b border-white/20 text-white placeholder:text-white/40 px-0 py-3 text-base focus:outline-none focus:border-sunflower-gold transition-colors"
              />
              <button
                type="submit"
                className="text-button bg-sunflower-gold text-dark-taupe px-8 py-3 rounded hover:bg-white transition-colors duration-250 whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
          <p className="text-caption text-white/40 mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </main>
  );
}
