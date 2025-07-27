import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://res.cloudinary.com/drq4idzdj/image/upload/v1750191909/pexels-cottonbro-7579831_zf7blw.jpg",
    "https://res.cloudinary.com/drq4idzdj/image/upload/v1753187601/pexels-karolina-grabowska-4386470_krlmdx.jpg",
    "https://res.cloudinary.com/drq4idzdj/image/upload/v1753187601/pexels-shkrabaanthony-5215001_vt01jb.jpg"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Hero Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background/90 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background/90 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Card className="max-w-2xl text-center bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <div className="p-8 lg:p-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
                Health Aware Hub
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-4 font-medium">
                Trusted by American Health Researchers and Experts
              </p>
              <p className="text-base lg:text-lg text-slate-600 mb-8 leading-relaxed">
                Your comprehensive resource for evidence-based health information, 
                disease prevention, and wellness education from leading medical professionals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl"
                  onClick={() =>
                    document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Explore Health Topics
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                ><a href="/homepage" className="flex items-center space-x-2">Contact Expert</a>
                  
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
