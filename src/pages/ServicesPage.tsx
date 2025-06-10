import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Target,
  Star,
  Award,
  Clock,
  Shield,
  Mail,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const scrollToContacts = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Search className="text-white" size={32} />,
      title: "SEO-продвижение",
      description: "Системный рост позиций и трафика на долгосрок",
      gradient: "from-blue-500 to-blue-600",
      price: "от 50 000 ₽/мес",
      duration: "6-12 месяцев",
      features: [
        "Глубокая проработка семантики под ваш бизнес",
        "Технический аудит и доработка сайта",
        "Качественный контент и внешние ссылки",
        "Рост позиций в ТОП-10 за 6-12 месяцев",
        "Увеличение органического трафика в 2-5 раз"
      ],
      results: [
        { metric: "300%", label: "Рост трафика" },
        { metric: "85%", label: "В ТОП-10" },
        { metric: "ROI 250%", label: "Окупаемость" }
      ]
    },
    {
      icon: <Users className="text-white" size={32} />,
      title: "CRM-маркетинг",
      description: "Воронки от лидов до повторных продаж",
      gradient: "from-green-500 to-green-600",
      price: "от 35 000 ₽/мес",
      duration: "3-6 месяцев",
      features: [
        "Построение воронок от лидов до повторных продаж",
        "Сегментация базы и персонализация сообщений",
        "Рассылки: WhatsApp, email, SMS, push",
        "Автоматизация процессов и увеличение LTV",
        "Повышение конверсии в продажи на 30-70%"
      ],
      results: [
        { metric: "70%", label: "Конверсия" },
        { metric: "2.5x", label: "LTV клиента" },
        { metric: "ROI 180%", label: "Окупаемость" }
      ]
    },
    {
      icon: <BarChart3 className="text-white" size={32} />,
      title: "Стратегия и консалтинг",
      description: "Маркетинг как система роста бизнеса",
      gradient: "from-orange-500 to-red-500",
      price: "от 80 000 ₽/мес",
      duration: "12+ месяцев",
      features: [
        "Комплексная аналитика и KPI",
        "Прозрачная отчётность и планирование",
        "Стратегические сессии и консалтинг",
        "Интеграция всех каналов маркетинга",
        "Понятная система роста с прогнозируемыми результатами"
      ],
      results: [
        { metric: "ROI 350%", label: "Окупаемость" },
        { metric: "12 мес", label: "Стаб. рост" },
        { metric: "100%", label: "Прозрачность" }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="text-blue-500" size={24} />,
      title: "Работаем лично",
      description: "Никаких подрядчиков — только мы. Личная ответственность за результат."
    },
    {
      icon: <Award className="text-green-500" size={24} />,
      title: "16+ лет опыта",
      description: "В маркетинге и продажах. Знаем, что работает в российских реалиях."
    },
    {
      icon: <Target className="text-orange-500" size={24} />,
      title: "Фокус на результате",
      description: "Оплата за результат, а не за часы работы. Ваш успех — наш успех."
    },
    {
      icon: <Star className="text-purple-500" size={24} />,
      title: "Семейный бизнес",
      description: "Репутация важнее прибыли. Долгосрочные отношения с клиентами."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Аудит и анализ",
      description: "Комплексный анализ вашего бизнеса, конкурентов и рынка",
      duration: "1-2 недели"
    },
    {
      step: "02", 
      title: "Стратегия",
      description: "Разработка персональной маркетинговой стратегии с KPI",
      duration: "1 неделя"
    },
    {
      step: "03",
      title: "Реализация",
      description: "Поэтапное внедрение с еженедельной отчетностью",
      duration: "Ongoing"
    },
    {
      step: "04",
      title: "Оптимизация",
      description: "Постоянная оптимизация и масштабирование результатов",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
              Наши услуги
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Что мы делаем для<br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                вашего роста
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Не просто выполняем задачи — выстраиваем маркетинг как систему устойчивого роста вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{service.price}</div>
                      <div className="text-xs text-gray-500">стоимость</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{service.duration}</div>
                      <div className="text-xs text-gray-500">срок</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                    {service.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-base font-bold text-gray-900">{result.metric}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={scrollToContacts}
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 shadow-lg`}
                  >
                    Заказать услугу
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Почему клиенты выбирают нас?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши принципы работы, которые приводят к результату
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Проверенный процесс от анализа до результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-bl-3xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <div className="pr-4">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {step.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы начать рост?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Получите персональную стратегию развития вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100 shadow-lg px-8"
              onClick={() => window.open('mailto:info@solomatin-marketing.ru', '_blank')}
            >
              <Mail size={16} className="mr-2" />
              Получить консультацию
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8"
              onClick={() => window.open('tel:+79892951030', '_blank')}
            >
              <Phone size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
