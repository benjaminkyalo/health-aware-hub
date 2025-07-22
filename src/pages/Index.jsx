import HeroSection from '@/components/HeroSection';
import Navbar from '../components/Navbar';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;