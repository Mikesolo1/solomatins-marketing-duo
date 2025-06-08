
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MessageCircle, MapPin, Clock, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Написать сообщение</h3>
              <p className="text-gray-300 mb-4 text-sm">Telegram, WhatsApp</p>
              <Button 
                variant="outline" 
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
                onClick={() => window.open('https://wa.me/79892951030', '_blank')}
              >
                Написать
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Написать письмо</h3>
              <p className="text-gray-300 mb-4 text-sm">info@solomatin-marketing.ru</p>
              <Button 
                variant="outline" 
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
                onClick={() => window.open('mailto:info@solomatin-marketing.ru', '_blank')}
              >
                Написать
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Позвонить</h3>
              <p className="text-gray-300 mb-4 text-sm">+7 (989) 295-10-30</p>
              <Button 
                variant="outline" 
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
                onClick={() => window.open('tel:+79892951030', '_blank')}
              >
                Позвонить
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Company Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">О компании</h4>
            <p className="text-gray-300 text-sm mb-4">
              Маркетинговое агентство с 16+ летним опытом. Помогаем бизнесу расти через эффективные маркетинговые стратегии.
            </p>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Семейный бизнес
            </Badge>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Услуги</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>SEO-продвижение</li>
              <li>CRM-маркетинг</li>
              <li>Стратегия и консалтинг</li>
              <li>Аналитика и отчетность</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Контакты</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Москва, Россия</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Пн-Пт: 9:00-18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>16+ лет опыта</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Социальные сети</h4>
            <p className="text-gray-300 text-sm mb-4">
              Следите за нашими обновлениями и кейсами
            </p>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white text-sm"
              >
                Telegram канал
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Маркетинговое агентство. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
