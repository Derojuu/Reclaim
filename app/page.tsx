import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { StorageSection } from '@/components/sections/StorageSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { PetSection } from '@/components/sections/PetSection';
import { UsageSection } from '@/components/sections/UsageSection';
import { FinalSection } from '@/components/sections/FinalSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StorageSection />
      <FounderSection />
      <PetSection />
      <UsageSection />
      <FinalSection />
    </>
  );
}
