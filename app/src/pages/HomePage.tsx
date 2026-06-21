import SunflowerHero from '@/sections/home/SunflowerHero';
import FeaturedCollection from '@/sections/home/FeaturedCollection';
import DesignerStory from '@/sections/home/DesignerStory';
import Craftsmanship from '@/sections/home/Craftsmanship';
import InstagramGallery from '@/sections/home/InstagramGallery';
import Testimonials from '@/sections/home/Testimonials';
import Newsletter from '@/sections/home/Newsletter';

export default function HomePage() {
  return (
    <main>
      <SunflowerHero />
      <FeaturedCollection />
      <DesignerStory />
      <Craftsmanship />
      <InstagramGallery />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
