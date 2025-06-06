
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Lightbulb, Handshake, Star, Award, Users, CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Star, value: "16+", label: "лет опыта", color: "text-yellow-500" },
    { icon: Users, value: "50+", label: "проектов", color: "text-blue-500" },
    { icon: Award, value: "300%", label: "средний рост", color: "text-green-500" },
    { icon: Heart, value: "100%", label: "лично", color: "text-red-500" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
            О нашей команде
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Семейная команда экспертов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — не агентство и не фрилансеры. Мы семейная команда с общими ценностями и дополняющими навыками
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                {React.createElement(achievement.icon, { 
                  className: `${achievement.color} w-8 h-8` 
                })}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Team cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-bold text-white">М</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Михаил Соломатин</h3>
                  <p className="text-blue-600 font-medium mb-4">Стратегия • Аналитика • SEO</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Экспертиза</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />16+ лет в интернет-маркетинге</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Запускал маркетинг в крупных e-com</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Эксперт по техническому SEO</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Фокус на системном подходе</li>
                    </ul>
                  </div>
                  
                  <blockquote className="text-gray-600 italic border-l-4 border-blue-500 pl-4">
                    "Маркетинг должен быть системой, а не набором инструментов"
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-white overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-bold text-white">А</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Анастасия Соломатина</h3>
                  <p className="text-orange-600 font-medium mb-4">Продажи • CRM • Коммуникации</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Экспертиза</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />12+ лет в продажах и сервисе</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Строила отделы продаж с нуля</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Эксперт по CRM и автоматизации</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Фокус на повторных продажах</li>
                    </ul>
                  </div>
                  
                  <blockquote className="text-gray-600 italic border-l-4 border-orange-500 pl-4">
                    "Клиент должен чувствовать заботу на каждом этапе"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why together */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Почему вдвоём — это наше преимущество?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Общие ценности</h4>
                <p className="text-gray-600 leading-relaxed">
                  Честность, качество работы и долгосрочные отношения — это основа нашего бизнеса и семьи
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Дополняющие навыки</h4>
                <p className="text-gray-600 leading-relaxed">
                  Техническая экспертиза + глубокое понимание продаж = комплексный маркетинг без пробелов
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Личная ответственность</h4>
                <p className="text-gray-600 leading-relaxed">
                  За каждый проект отвечаем лично. Репутация семьи важнее краткосрочной прибыли
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
                Помогаем предпринимателям строить устойчивый маркетинг без суеты и воды. 
                Погружаемся в продукт, выстраиваем системы и приносим измеримые результаты. 
              </p>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Всё по-честному и по уму.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
