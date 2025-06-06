
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const services = [
    { name: "SEO-продвижение", path: "/services" },
    { name: "CRM-маркетинг", path: "/services" },
    { name: "Стратегия и консалтинг", path: "/services" },
    { name: "Аналитика и аудиты", path: "/services" }
  ];

  const company = [
    { name: "О нас", action: () => scrollToSection('about') },
    { name: "Кейсы", path: "/cases" },
    { name: "Услуги", path: "/services" },
    { name: "Контакты", action: () => scrollToSection('contact') }
  ];

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">Соломатин & Соломатина</h3>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                Бутиковая студия интернет-маркетинга
              </Badge>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              SEO. CRM. Повторные продажи.<br />
              Всё по-честному и по уму.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="text-orange-400" size={20} />
                </div>
                <div>
                  <div className="font-medium text-white">16+ лет на рынке</div>
                  <div className="text-gray-400 text-sm">Семейный бизнес с 2008 года</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <div className="font-medium text-white">Работаем удалённо</div>
                  <div className="text-gray-400 text-sm">Клиенты по всей России</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Услуги</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(service.path)}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-left group flex items-center"
                  >
                    {service.name}
                    <ExternalLink className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Компания</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={item.action || (() => navigate(item.path || '/'))}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-left group flex items-center"
                  >
                    {item.name}
                    <ExternalLink className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-green-400" size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">WhatsApp / Telegram</h5>
                  <p className="text-gray-400 text-sm">+7 (989) 295-10-30</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-gray-600 text-gray-300 hover:bg-green-500/10 hover:border-green-500 hover:text-green-400"
                onClick={() => window.open('https://wa.me/79892951030', '_blank')}
              >
                Написать сообщение
              </Button>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Email</h5>
                  <p className="text-gray-400 text-sm">info@solomatin-marketing.ru</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-gray-600 text-gray-300 hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-400"
                onClick={() => window.open('mailto:info@solomatin-marketing.ru', '_blank')}
              >
                Написать письмо
              </Button>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-orange-400" size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Телефон</h5>
                  <p className="text-gray-400 text-sm">+7 (989) 295-10-30</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-gray-600 text-gray-300 hover:bg-orange-500/10 hover:border-orange-500 hover:text-orange-400"
                onClick={() => window.open('tel:+79892951030', '_blank')}
              >
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Соломатин & Соломатина. Семейный бизнес с 2008 года.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button 
                onClick={() => navigate('/privacy')}
                className="hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </button>
              <button 
                onClick={() => navigate('/terms')}
                className="hover:text-white transition-colors"
              >
                Пользовательское соглашение
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
