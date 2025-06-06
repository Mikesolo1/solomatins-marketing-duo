
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Users, BarChart3, CheckCircle, ArrowRight, TrendingUp, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Search className="text-white" size={32} />,
      title: "SEO-продвижение",
      description: "Системный рост позиций и трафика на долгосрок",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Глубокая проработка семантики под ваш бизнес",
        "Технический аудит и доработка сайта",
        "Качественный контент и внешние ссылки",
        "Рост позиций в ТОП-10 за 6-12 месяцев"
      ],
      result: "Увеличение органического трафика в 2-5 раз",
      metrics: [
        { icon: TrendingUp, value: "300%", label: "Рост трафика" },
        { icon: Target, value: "85%", label: "В ТОП-10" }
      ]
    },
    {
      icon: <Users className="text-white" size={32} />,
      title: "CRM-маркетинг",
      description: "Воронки от лидов до повторных продаж",
      gradient: "from-green-500 to-green-600",
      features: [
        "Построение воронок от лидов до повторных продаж",
        "Сегментация базы и персонализация сообщений",
        "Рассылки: WhatsApp, email, SMS, push",
        "Автоматизация процессов и увеличение LTV"
      ],
      result: "Повышение конверсии в продажи на 30-70%",
      metrics: [
        { icon: Zap, value: "70%", label: "Конверсия" },
        { icon: TrendingUp, value: "2.5x", label: "LTV клиента" }
      ]
    },
    {
      icon: <BarChart3 className="text-white" size={32} />,
      title: "Стратегия и консалтинг",
      description: "Маркетинг как система роста бизнеса",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Комплексная аналитика и KPI",
        "Прозрачная отчётность и планирование",
        "Стратегические сессии и консалтинг",
        "Интеграция всех каналов маркетинга"
      ],
      result: "Понятная система роста с прогнозируемыми результатами",
      metrics: [
        { icon: Target, value: "ROI", label: "250%+" },
        { icon: BarChart3, value: "12", label: "мес. рост" }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
            Наши услуги
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Что мы делаем для вашего роста
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Не просто выполняем задачи — выстраиваем маркетинг как систему устойчивого роста вашего бизнеса
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  {service.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="flex justify-center mb-1">
                        {React.createElement(metric.icon, { 
                          className: "text-gray-400 w-4 h-4" 
                        })}
                      </div>
                      <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Результат:</h4>
                  <p className="text-gray-700 text-sm">{service.result}</p>
                </div>

                <Button 
                  onClick={() => navigate('/services')}
                  variant="outline" 
                  className="w-full group border-gray-200 hover:border-orange-300 hover:bg-orange-50"
                >
                  Подробнее об услуге
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Почему клиенты выбирают нас?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Работаем лично</h4>
              <p className="text-gray-600 text-sm">Никаких подрядчиков — только мы</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">16+ лет опыта</h4>
              <p className="text-gray-600 text-sm">В маркетинге и продажах</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Target className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Фокус на результате</h4>
              <p className="text-gray-600 text-sm">Результат, а не часы работы</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Семейный бизнес</h4>
              <p className="text-gray-600 text-sm">Репутация важнее прибыли</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
