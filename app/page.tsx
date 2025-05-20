'use client'
import { CTA } from '@/components/cta';
import { MainFeature } from '@/components/main_feature';
import { Features } from '@/components/features';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Pricing } from '@/components/pricing';
import { Header } from '@/components/header';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<{ focusInput: () => void }>(null);
  return (
    <div>
      <Header onClickPreInscription={() => heroRef.current?.focusInput()} />
      <Hero ref={heroRef} />
      <MainFeature />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
