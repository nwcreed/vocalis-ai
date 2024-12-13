import { Case } from '@/components/case';
import { Feature } from '@/components/feature';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Pricing } from '@/components/pricing';

export default function Home() {
  return (
    <div>
      <Hero />
      <Case />
      <Feature />
      <Pricing />
      <Footer />
    </div>
  );
}
