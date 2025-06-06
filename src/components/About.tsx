
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Handshake } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            О нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Семейная команда с общими ценностями и дополняющими навыками
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">М</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Михаил Соломатин</h3>
                  <p className="text-gray-600">Стратегия, аналитика, SEO</p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>• 16+ лет в интернет-маркетинге</p>
                  <p>• Запускал маркетинг в крупных e-com проектах</p>
                  <p>• Эксперт по техническому SEO и аналитике</p>
                  <p>• Фокус на системном подходе к росту</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">А</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Анастасия Соломатина</h3>
                  <p className="text-gray-600">Продажи, CRM, коммуникации</p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>• 12+ лет в продажах и клиентском сервисе</p>
                  <p>• Строила отделы продаж с нуля</p>
                  <p>• Эксперт по CRM и автоматизации воронок</p>
                  <p>• Фокус на повторных продажах и лояльности</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Почему вдвоём — это плюс?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="text-orange-500" size={48} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Общие ценности</h4>
                <p className="text-gray-600">
                  Честность, качество работы и долгосрочные отношения — это не просто слова для нас
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Lightbulb className="text-orange-500" size={48} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Дополняющие навыки</h4>
                <p className="text-gray-600">
                  Техническая экспертиза + глубокое понимание продаж = комплексный маркетинг
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Handshake className="text-orange-500" size={48} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Личная ответственность</h4>
                <p className="text-gray-600">
                  За каждый проект отвечаем лично, репутация семьи важнее краткосрочной прибыли
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Наша миссия
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Помогаем предпринимателям строить устойчивый маркетинг без суеты и воды. 
              Погружаемся в продукт, выстраиваем системы и приносим измеримые результаты. 
              Всё по-честному и по уму.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
