
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, ArrowRight, Star, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { value: "300%", label: "Рост трафика", icon: TrendingUp },
    { value: "85%", label: "Конверсия в лиды", icon: Target },
    { value: "16+", label: "Лет экспертизы", icon: Star },
    { value: "50+", label: "Успешных проектов", icon: Users }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-16 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-white/80 text-gray-700 border border-gray-200 shadow-sm">
              <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
              16+ лет на рынке
            </Badge>
            <Badge variant="secondary" className="bg-white/80 text-gray-700 border border-gray-200 shadow-sm">
              <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
              Семейный бизнес
            </Badge>
            <Badge variant="secondary" className="bg-white/80 text-gray-700 border border-gray-200 shadow-sm">
              <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
              Работаем лично
            </Badge>
          </div>

          {/* Main headline */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Ваш маркетинг{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                под ключ
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Бутиковая студия интернет-маркетинга для e-com, медицины и сферы услуг.<br />
              <span className="font-semibold text-gray-800">Системный рост за счёт трафика и повторных продаж</span>
            </p>

            {/* Animated stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 mb-10 max-w-md mx-auto">
              <div className="text-center transition-all duration-500 ease-in-out">
                <div className="flex justify-center mb-2">
                  {React.createElement(stats[currentStat].icon, { 
                    className: "text-orange-500 w-8 h-8" 
                  })}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stats[currentStat].value}
                </div>
                <div className="text-sm text-gray-600">
                  {stats[currentStat].label}
                </div>
              </div>
            </div>
          </div>

          {/* Value proposition cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">SEO на долгосрок</h3>
              </div>
              <p className="text-gray-600">Системный рост позиций и органического трафика без черных методов</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">CRM-маркетинг</h3>
              </div>
              <p className="text-gray-600">Повторные продажи и увеличение LTV через автоматизированные воронки</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Стратегия роста</h3>
              </div>
              <p className="text-gray-600">Результат, а не отчёты. Маркетинг как система, а не набор инструментов</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Получить консультацию
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button 
              onClick={() => navigate('/cases')}
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              Посмотреть кейсы
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-4">Нам доверяют предприниматели из разных сфер</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-lg font-semibold text-gray-600">E-commerce</div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-lg font-semibold text-gray-600">Медицина</div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-lg font-semibold text-gray-600">Услуги</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
