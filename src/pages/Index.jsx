import HeroSection from '@/components/HeroSection';

import StatsSection from '../components/StatsSection';

import MissionStatement from '../components/MissionStatement';
import TestimonialsSection from '../components/TestimonialsSection';
import DiseasePreview from '../components/DiseasePreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <HeroSection />
      <StatsSection />
      <MissionStatement />
      <DiseasePreview />
      <TestimonialsSection />
     
    </div>
  );
};

export default Index;