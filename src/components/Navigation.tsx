import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Courses', page: 'courses' },
    { name: 'About', page: 'about' },
    { name: 'Resources', page: 'resources' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            {/* Logo */}
            <img 
              src="https://copilot.microsoft.com/th/id/BCO.3ad9fccd-c92c-4821-9339-aca7831f35fc.png" 
              alt="ShaDemy Logo"
              className="w-12 h-18 object-contain"
            />
            {/* Brand Name */}
            <span className="text-2xl font-serif font-bold text-gray-900">
              ShaDemy
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-sm font-medium transition-colors relative group ${
                  currentPage === link.page
                    ? 'text-primary-700'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary-700 transition-all duration-300 ${
                    currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => onNavigate('admission')}
              className="px-6 py-2.5 bg-primary-700 text-white text-sm font-medium rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                  currentPage === link.page
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('admission');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full px-4 py-2.5 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
