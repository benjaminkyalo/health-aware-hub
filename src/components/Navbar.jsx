import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const diseaseCategories = {
    "Infectious Diseases": [
      { name: 'HIV & AIDS', path: '/diseases/hiv-aids' },
      
    ],
    "Chronic Conditions": [
      { name: 'Diabetes', path: '/diseases/diabetes' },
      { name: 'High Blood Pressure', path: '/diseases/hypertension' },
      { name: 'Heart Disease', path: '/diseases/heart-disease' }
      
    ],
    "Mental Health & Cancer": [
      { name: 'Depression', path: '/diseases/depression' },
      { name: 'Obesity', path: '/diseases/obesity' }
    ]
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 transition-opacity duration-200 hover:opacity-80">
              <img className="h-8 w-8 text-blue-600 dark:text-blue-400" src="/favicon-32x32.png" alt="MyHealthTracker Logo" />
              <span className="text-xl font-semibold text-slate-800">Health Aware Hub</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="transition-colors duration-200 font-medium text-cyan-600 border-b-2 border-cyan-600"
            >
              Home
            </a>

            {/* Topics Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button className="flex items-center space-x-1 text-slate-700 hover:text-cyan-600 transition-colors duration-200 font-medium">
                <span>Topics</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown && (
                <div className="absolute top-full mt-1 w-[800px] -left-96 bg-white border border-slate-200 shadow-xl rounded-lg py-6 px-8">
                  <div className="grid grid-cols-3 gap-8">
                    {Object.entries(diseaseCategories).map(([category, diseases]) => (
                      <div key={category} className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                          {category}
                        </h3>
                        <div className="space-y-2">
                          {diseases.map((disease) => (
                            <a
                              key={disease.path}
                              href={disease.path}
                              className="block text-sm text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 px-3 py-2 rounded-md transition-all duration-200"
                            >
                              {disease.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  

                </div>
              )}
            </div>

            <a
              href="/blog"
              className="transition-colors duration-200 font-medium text-slate-700 hover:text-teal-600"
            >
              Blog
            </a>

            <a
              href="/about"
              className="transition-colors duration-200 font-medium text-slate-700 hover:text-teal-600"
            >
              About
            </a>

            <a
              href="/contact"
              className="transition-colors duration-200 font-medium text-slate-700 hover:text-teal-600"
            >
              Contact
            </a>

            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              <a href="/homepage" className="flex items-center space-x-2">Consult Doctor</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-teal-600 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <div className="space-y-4">
              <a
                href="/"
                className="block text-slate-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              
              {/* Mobile Topics Section */}
              <div className="space-y-3">
                <span className="block text-slate-700 font-medium text-lg">Topics</span>
                {Object.entries(diseaseCategories).map(([category, diseases]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-600 pl-2 border-l-2 border-teal-400">
                      {category}
                    </h4>
                    <div className="pl-4 space-y-1">
                      {diseases.map((disease) => (
                        <a
                          key={disease.path}
                          href={disease.path}
                          className="block text-sm text-slate-600 hover:text-teal-600 transition-colors duration-200 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {disease.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/blog"
                className="block text-slate-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>

              <a
                href="/about"
                className="block text-slate-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>

              <a
                href="/contact"
                className="block text-slate-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              <Button 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200" 
                onClick={() => setIsOpen(false)}
              >
                Consult Doctor
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;