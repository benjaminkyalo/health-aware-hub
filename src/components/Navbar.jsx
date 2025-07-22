import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const diseasePages = [
    { name: 'HIV & AIDS', path: '/diseases/hiv-aids' },
    { name: 'Diabetes', path: '/diseases/diabetes' },
    { name: 'Obesity', path: '/diseases/obesity' },
    { name: 'Cancer', path: '/diseases/cancer' },
    { name: 'Depression', path: '/diseases/depression' },
    { name: 'High Blood Pressure', path: '/diseases/high-blood-pressure' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 medical-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 medical-transition hover:opacity-80">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold medical-text">Health Aware Hub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`medical-transition font-medium ${
                isActive('/') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'medical-text hover:text-primary'
              }`}
            >
              Home
            </Link>

            {/* Topics Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 medical-text hover:text-primary medical-transition font-medium">
                <span>Topics</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 medical-shadow">
                {diseasePages.map((disease) => (
                  <DropdownMenuItem key={disease.path} asChild>
                    <Link
                      to={disease.path}
                      className="w-full px-3 py-2 medical-text hover:bg-secondary medical-transition"
                    >
                      {disease.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/blog"
              className={`medical-transition font-medium ${
                isActive('/blog') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'medical-text hover:text-primary'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/about"
              className={`medical-transition font-medium ${
                isActive('/about') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'medical-text hover:text-primary'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`medical-transition font-medium ${
                isActive('/contact') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'medical-text hover:text-primary'
              }`}
            >
              Contact
            </Link>

            <Button className="medical-transition">
              Consult Doctor
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="medical-text hover:text-primary medical-transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <Link
                to="/"
                className="block medical-text hover:text-primary medical-transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <span className="block medical-text font-medium">Topics</span>
                <div className="pl-4 space-y-2">
                  {diseasePages.map((disease) => (
                    <Link
                      key={disease.path}
                      to={disease.path}
                      className="block text-sm medical-text-light hover:text-primary medical-transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {disease.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/blog"
                className="block medical-text hover:text-primary medical-transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/about"
                className="block medical-text hover:text-primary medical-transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block medical-text hover:text-primary medical-transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Button className="w-full medical-transition" onClick={() => setIsOpen(false)}>
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
