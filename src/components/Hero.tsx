
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ваш маркетинговый отдел{" "}
            <span className="text-orange-500">под ключ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Бутиковая студия интернет-маркетинга для e-com, медицины и сферы услуг
          </p>

          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg mb-10 text-left max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Мы не агентство и не фрилансеры — мы ваш личный маркетинг-партнёр
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <TrendingUp className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">SEO на долгосрок</h3>
                  <p className="text-gray-600 text-sm">Системный рост трафика и позиций</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">CRM-маркетинг</h3>
                  <p className="text-gray-600 text-sm">Повторные продажи и увеличение LTV</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Стратегия</h3>
                  <p className="text-gray-600 text-sm">Результат, а не отчёты</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4"
            >
              Обсудить проект
            </Button>
            <Button 
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="outline" 
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4"
            >
              Узнать больше
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-2">Работаем вдвоём • 16+ лет опыта • Семейный бизнес</p>
            <p className="text-gray-600">
              <strong>Михаил</strong> — стратегия, аналитика, SEO • <strong>Анастасия</strong> — продажи, CRM, коммуникации
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
