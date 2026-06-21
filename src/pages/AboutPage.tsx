import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Pencil, Layers, Scissors, Gift } from 'lucide-react';

const processSteps = [
  {
    icon: Pencil,
    title: 'Design',
    description: 'Every collection begins with sketches — sometimes dozens for a single piece. I work with natural forms, clean lines, and the belief that simplicity is the ultimate sophistication.',
  },
  {
    icon: Layers,
    title: 'Source',
    description: 'We source premium natural fabrics from Italy, Japan, and local South African mills. Every fabric is chosen for its quality, sustainability, and how it feels against the skin.',
  },
  {
    icon: Scissors,
    title: 'Craft',
    description: 'Each garment is cut and sewn in our Cape Town studio by skilled local artisans. Small batches, careful hands, and an attention to detail that only human craft can achieve.',
  },
  {
    icon: Gift,
    title: 'Deliver',
    description: 'Your garment arrives beautifully packaged — a Sunflower Designs swing tag, a handwritten thank-you card, and the piece itself, folded with care. Fashion should feel like a gift.',
  },
];

const values = [
  {
    title: 'Slow Fashion',
    description: 'We release two small collections a year — not twelve. Each piece is designed to last for years, not weeks. We believe in buying less and choosing better.',
  },
  {
    title: 'Local Craft',
    description: 'Every garment is made in Cape Town by artisans who are fairly paid and work in good conditions. We believe fashion should lift up the communities that create it.',
  },
  {
    title: 'Timeless Design',
    description: "We don't follow trends. We design pieces that feel as right in ten years as they do today. Clean lines, quality fabrics, and silhouettes that transcend seasons.",
  },
];

const press = ['ELLE South Africa', 'Marie Claire', 'Sunday Times Style', 'Cape Town Magazine'];

export default function AboutPage() {
  const heroRef = useScrollReveal<HTMLElement>({ threshold: '60%' });
  const storyRef = useScrollReveal<HTMLElement>({ threshold: '80%' });
  const processRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.12, threshold: '80%' });
  const studioImgRef = useScrollReveal<HTMLDivElement>({ threshold: '80%' });
  const studioTextRef = useScrollReveal<HTMLDivElement>({ delay: 0.2, threshold: '80%' });
  const valuesRef = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.12, threshold: '80%' });

  return (
    <main className="pt-[60px]">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=2400&h=1600&fit=crop&q=80"
            alt="Farah Davids in her studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-espresso/70 via-deep-espresso/30 to-transparent" />
        </div>
        <div className="relative z-10 p-8 md:p-12 lg:px-32 max-w-[560px]">
          <p className="text-caption text-sunflower-gold mb-3">ABOUT THE DESIGNER</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[100px] lg:leading-[95px] text-white tracking-[-0.02em]">
            Farah Davids
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-4">
            Founder & Creative Director, Sunflower Designs
          </p>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="bg-white py-24 md:py-32">
        <div className="max-w-[960px] mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-[64px] lg:leading-[64px] text-dark-taupe tracking-[-0.02em]">
            My Journey
          </h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-warm-grey leading-relaxed">
            <p>
              I grew up in Cape Town with a needle in one hand and a sketchbook in the other. My grandmother taught me to sew when I was eight, sitting at her old Singer machine in her Woodstock home. She would say, "A garment made with patience wears its story on its sleeve."
            </p>
            <p>
              After studying fashion design at the Cape Peninsula University of Technology, I worked with several local designers before realising that my vision was something different. I wanted to create clothes that honoured the women who wore them — pieces that felt special every time you put them on.
            </p>
            <p>
              Sunflower Designs started in 2020, in the middle of a global pandemic, from a small studio in Salt River. The name came to me because sunflowers turn toward the light — and that's what I believe fashion should do. It should lift you. It should make you feel like the best version of yourself.
            </p>
            <p>
              Today, every piece we make is designed by me, cut and sewn by a small team of artisans in Cape Town, and sent out into the world with the hope that it becomes part of your story.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-light-sand py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-caption text-muted-olive mb-3">OUR PROCESS</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[80px] lg:leading-[72px] text-dark-taupe tracking-[-0.02em]">
              From Sketch to Stitch
            </h2>
          </div>
          <div ref={processRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4">
                  <step.icon size={36} className="text-sunflower-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-body font-medium text-2xl text-dark-taupe mb-3">{step.title}</h3>
                <p className="text-warm-grey leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div ref={studioImgRef}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=1600&fit=crop&q=80"
            alt="Sunflower Designs Studio"
            className="w-full h-full object-cover min-h-[400px]"
          />
        </div>
        <div ref={studioTextRef} className="bg-white flex flex-col justify-center p-8 md:p-12">
          <p className="text-caption text-muted-olive mb-3">OUR STUDIO</p>
          <h2 className="font-display text-4xl md:text-5xl text-dark-taupe tracking-[-0.02em]">
            Cape Town, South Africa
          </h2>
          <p className="text-lg md:text-xl text-warm-grey mt-6 leading-relaxed">
            Our studio is in Salt River, Cape Town — a neighbourhood with deep creative roots. This is where every Sunflower Designs garment begins its life, surrounded by the mountains and the sea that inspire everything we make.
          </p>
          <p className="text-lg md:text-xl text-warm-grey mt-4 leading-relaxed">
            We work in small batches, which means we can pay attention to every detail. No mass production. No corners cut. Just honest craft, made with care.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-medium text-sunflower-gold mt-8 hover:underline">
            Get in Touch →
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="bg-deep-espresso py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-[-0.02em] text-center mb-16">
            What We Believe
          </h2>
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i}>
                <h3 className="font-body font-medium text-2xl text-white mb-3">{v.title}</h3>
                <p className="text-white/70 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="bg-light-sand py-16">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-[40px] text-dark-taupe mb-8">
            As Featured In
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {press.map((name, i) => (
              <span key={i} className="flex items-center gap-4 md:gap-8">
                <span className="font-body font-medium text-lg text-warm-grey">{name}</span>
                {i < press.length - 1 && <span className="text-earth-tan hidden md:inline">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
