
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          Соломатин & Соломатина
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors">
            Услуги
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">
            О нас
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">
            Контакты
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection('contact')} 
          className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white"
        >
          Получить консультацию
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col space-y-4 p-4">
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
              Контакты
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-orange-500 hover:bg-orange-600 text-white w-full"
            >
              Получить консультацию
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
