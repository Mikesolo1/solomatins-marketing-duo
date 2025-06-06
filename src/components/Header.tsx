
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Услуги', action: () => scrollToSection('services') },
    { label: 'Кейсы', action: () => navigate('/cases') },
    { label: 'О нас', action: () => scrollToSection('about') },
    { label: 'Контакты', action: () => scrollToSection('contact') }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100/50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')}
            className="cursor-pointer group"
          >
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
              Соломатин & Соломатина
            </div>
            <div className="text-xs text-gray-500 -mt-1">Бутиковая студия маркетинга</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <button 
                key={index}
                onClick={item.action} 
                className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Phone size={16} className="text-orange-500" />
              <span>+7 (xxx) xxx-xx-xx</span>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Консультация
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item, index) => (
                <button 
                  key={index}
                  onClick={item.action} 
                  className="text-left text-gray-600 hover:text-orange-500 transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone size={16} className="text-orange-500" />
                  <span>+7 (xxx) xxx-xx-xx</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white w-full rounded-lg"
                >
                  Получить консультацию
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
