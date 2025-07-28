import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; 
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to scroll to top when links are clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const healthTopics = [
    { name: 'HIV & AIDS', path: '/diseases/hiv-aids' },
    { name: 'Diabetes', path: '/diseases/diabetes' },
    { name: 'Obesity', path: '/diseases/obesity' },
    { name: 'Cancer', path: '/diseases/cancer' },
    { name: 'Depression', path: '/diseases/depression' },
    { name: 'High Blood Pressure', path: '/diseases/hypertension' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resources', href: '/resources' },
    { name: 'Health Screening', href: '/screening' },
    { name: 'Expert Consultation', href: '/consultation' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms-of-use' },
    { name: 'Medical Disclaimer', href: '/disclaimer' },
    { name: 'Accessibility', href: '/accessibility' },
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Health Aware Hub
            </h3>
            <p className="text-white/80 mb-6 text-sm">
              Your trusted source for evidence-based health information, 
              disease prevention guidance, and wellness education from 
              leading medical professionals.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>contact@healthawarehub.com</span>
              </div>
              
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Health Education Center, USA</span>
              </div>
            </div>
          </div>

          {/* Health Topics */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Health Topics
            </h4>
            <ul className="space-y-2">
              {healthTopics.map((disease) => (
                <li key={disease.name}>
                  <Link 
                    to={disease.path}
                    onClick={scrollToTop}
                    
                  >
                    {disease.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-white/80 mb-4 text-sm">
              Subscribe to our newsletter for the latest health insights and tips.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button 
                className="w-full bg-cyan-600 text-white hover:bg-cyan-700"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media and Legal */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-sm">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link 
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-white/40 ml-4">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Disclaimer */}
        <div className="py-6 border-t border-white/20 text-center space-y-2">
          <p className="text-white/80 text-sm">
            © {currentYear} Health Aware Hub. All rights reserved.
          </p>
          <p className="text-white/60 text-xs max-w-4xl mx-auto">
            <strong>Medical Disclaimer:</strong> The information provided on this website is for educational purposes only 
            and is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
            Always seek the advice of your physician or other qualified health provider with any questions 
            you may have regarding a medical condition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;