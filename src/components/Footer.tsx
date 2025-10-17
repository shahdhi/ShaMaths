import { Mail, Phone, MapPin, BookOpen, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white text-2xl font-serif font-bold mb-4">ShaDemy</h3>
            <p className="text-sm leading-relaxed mb-6">
              Excellence in education with fully English instruction across diverse subjects.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Courses', 'About', 'Resources', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link.toLowerCase())}
                    className="text-sm hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Courses</h4>
            <ul className="space-y-3">
              <li>
                <button className="text-sm hover:text-white transition-colors">
                  STEM Subjects
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-white transition-colors">
                  A-Level Programs
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-white transition-colors">
                  IGCSE Courses
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">contact@shademy.online</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">+81 70-9328-3467</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">Kyoto, Japan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} ShaDemy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            {/* ADDED: Business Information for Specified Commercial Act Link */}
            <button 
              onClick={() => onNavigate('commercial-transactions')}
              className="hover:text-white transition-colors"
            >
              特定商取引法に基づく表記
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
