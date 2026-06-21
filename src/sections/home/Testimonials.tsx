import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The quality of my blazer is exceptional. You can feel the craftsmanship in every stitch — this is not fast fashion, this is art.",
    name: "Sarah M.",
    location: "Cape Town",
  },
  {
    quote: "I wore my wrap dress to a gallery opening and received compliments all evening. It fits perfectly and the fabric is divine.",
    name: "Thandi K.",
    location: "Johannesburg",
  },
  {
    quote: "Finally, a South African brand that understands timeless elegance. My trousers have become my most-worn piece.",
    name: "Emma R.",
    location: "Durban",
  },
];

export default function Testimonials() {
  const gridRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.12, threshold: '80%' });

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center">
          <SectionHeader
            overline="WHAT OUR CUSTOMERS SAY"
            headline="Loved by Women Across South Africa"
            centered
            size="m"
          />
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-light-sand rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-sunflower-gold fill-sunflower-gold" />
                ))}
              </div>
              <p className="text-base text-dark-taupe leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-6">
                <p className="font-medium text-sm text-dark-taupe">{t.name}</p>
                <p className="text-caption text-warm-grey">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
