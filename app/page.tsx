import Hero from '@/components/Hero';
import SearchSection from '@/components/SearchSection';
import FeaturedPrograms from '@/components/FeaturedPrograms';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SearchSection />
      <FeaturedPrograms />
      <HowItWorks />
    </div>
  );
}