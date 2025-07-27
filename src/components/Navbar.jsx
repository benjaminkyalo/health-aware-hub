import { useState } from 'react';
import { Menu, X, ChevronDown, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const diseasePages = [
    { name: 'HIV & AIDS', path: '/diseases/hiv-aids' },
    { name: 'Diabetes', path: '/diseases/diabetes' },
    { name: 'Obesity', path: '/diseases/obesity' },
    { name: 'Cancer', path: '/diseases/cancer' },
    { name: 'Depression', path: '/diseases/depression' },
    { name: 'High Blood Pressure', path: '/diseases/hypertension' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 transition-opacity duration-200 hover:opacity-80">
              <Stethoscope className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-semibold text-slate-800">Health Aware Hub</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="transition-colors duration-200 font-medium text-teal-600 border-b-2 border-teal-600"
            >
              Home
            </a>

            {/* Topics Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-slate-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                onClick={() => setActiveDropdown(!activeDropdown)}
              >
                <span>Topics</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown && (
                <div className="absolute top-full mt-1 w-56 bg-white border border-slate-200 shadow-lg rounded-md py-1">
                  {diseasePages.map((disease) => (
                    <a
                      key={disease.path}
                      href={disease.path}
                      className="block w-full px-3 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-200"
                      onClick={() => setActiveDropdown(false)}
                    >
                      {disease.name}
                    </a>
                  ))}
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
              Consult Doctor
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
              
              <div className="space-y-2">
                <span className="block text-slate-700 font-medium">Topics</span>
                <div className="pl-4 space-y-2">
                  {diseasePages.map((disease) => (
                    <a
                      key={disease.path}
                      href={disease.path}
                      className="block text-sm text-slate-600 hover:text-teal-600 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {disease.name}
                    </a>
                  ))}
                </div>
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