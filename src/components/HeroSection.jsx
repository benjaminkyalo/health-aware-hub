import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Search only within your website
      const siteSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)} site:healthawarehub.com`;
      window.open(siteSearchUrl, '_blank');
      
      // Clear search after searching
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white shadow-lg scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="max-w-2xl text-center bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-2xl p-8 lg:p-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Health Aware Hub
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-4 font-medium">
              Trusted by American Health Researchers and Experts
            </p>
            <p className="text-base lg:text-lg text-slate-600 mb-8 leading-relaxed">
              Your comprehensive resource for evidence-based health information, 
              disease prevention, and wellness education from leading medical professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
                onClick={() =>
                  document.getElementById('disease-preview')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Explore Health Topics
              </button>
              <button
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <a href="/homepage" className="flex items-center space-x-2">
                  Contact Expert
                </a>
              </button>
            </div>

            {/* Custom Search Bar */}
            <div className="w-full">
              <div className="relative">
                <div className="flex rounded-lg shadow-lg border border-slate-300 overflow-hidden bg-white hover:border-slate-400 transition-all duration-200 hover:shadow-xl">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for health topics, diseases, symptoms..."
                    className="flex-1 px-6 py-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-0 text-lg font-medium"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch(e);
                      }
                    }}
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-cyan-500 hover:bg-cyan-600 px-6 py-4 transition-all duration-200 hover:shadow-lg"
                    aria-label="Search"
                  >
                    <Search className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
              
              {/* Search suggestions or popular topics */}
              <div className="mt-4 text-sm text-slate-500">
                Popular searches: 
                <button 
                  className="ml-2 text-cyan-600 hover:text-cyan-700 underline"
                  onClick={() => setSearchQuery('diabetes')}
                >
                  Diabetes
                </button>
                <span className="mx-1">•</span>
                <button 
                  className="text-cyan-600 hover:text-cyan-700 underline"
                  onClick={() => setSearchQuery('heart disease')}
                >
                  Heart Disease
                </button>
                <span className="mx-1">•</span>
                <button 
                  className="text-cyan-600 hover:text-cyan-700 underline"
                  onClick={() => setSearchQuery('mental health')}
                >
                  Mental Health
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;