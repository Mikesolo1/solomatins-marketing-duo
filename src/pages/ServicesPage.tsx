
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, Users, BarChart3, ArrowLeft, CheckCircle, 
  Clock, Target, TrendingUp, Zap, Globe, Mail, MessageCircle 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "seo",
      icon: <Search className="text-white" size={40} />,
      title: "SEO-продвижение",
      subtitle: "Органический рост позиций и трафика",
      gradient: "from-blue-500 to-blue-600",
      description: "Системное продвижение сайта в поисковых системах для долгосрочного роста органического трафика и увеличения продаж.",
      includes: [
        "Глубокий анализ ниши и конкурентов",
        "Проработка семантического ядра (300+ ключей)",
        "Технический аудит сайта и устранение ошибок",
        "Оптимизация структуры и внутренней перелинковки",
        "Создание SEO-контента для страниц",
        "Работа с внешними ссылками (белые методы)",
        "Регулярный мониторинг позиций",
        "Ежемесячные отчёты с рекомендациями"
      ],
      process: [
        { step: "Аудит", description: "Комплексный анализ сайта и ниши", duration: "1-2 недели" },
        { step: "Стратегия", description: "План продвижения на 6-12 месяцев", duration: "1 неделя" },
        { step: "Оптимизация", description: "Техническая доработка сайта", duration: "2-4 недели" },
        { step: "Контент", description: "Создание оптимизированного контента", duration: "Ongoing" },
        { step: "Ссылки", description: "Наращивание ссылочной массы", duration: "Ongoing" },
        { step: "Мониторинг", description: "Отслеживание и корректировка", duration: "Ongoing" }
      ],
      results: [
        "Рост позиций в ТОП-10 по 70-85% запросов",
        "Увеличение органического трафика в 2-5 раз",
        "Снижение стоимости привлечения клиентов",
        "Долгосрочный эффект от вложений"
      ],
      pricing: "от 80 000 ₽/мес",
      timeline: "Первые результаты через 2-3 месяца, максимальный эффект через 6-12 месяцев"
    },
    {
      id: "crm",
      icon: <Users className="text-white" size={40} />,
      title: "CRM-маркетинг",
      subtitle: "Повторные продажи и увеличение LTV",
      gradient: "from-green-500 to-green-600",
      description: "Автоматизация маркетинга для увеличения конверсии, повторных продаж и пожизненной ценности клиента.",
      includes: [
        "Аудит текущих процессов продаж",
        "Настройка CRM-системы (амoCRM, Битрикс24)",
        "Создание воронок продаж",
        "Сегментация клиентской базы",
        "Настройка email-маркетинга",
        "WhatsApp и SMS рассылки",
        "Система лидмагнитов",
        "Программы лояльности и реферальные"
      ],
      process: [
        { step: "Анализ", description: "Изучение текущих процессов продаж", duration: "1 неделя" },
        { step: "Стратегия", description: "Планирование воронок и сценариев", duration: "1 неделя" },
        { step: "Настройка", description: "Техническая реализация в CRM", duration: "2-3 недели" },
        { step: "Контент", description: "Создание сообщений и материалов", duration: "2 недели" },
        { step: "Тестирование", description: "Запуск и тестирование воронок", duration: "1 неделя" },
        { step: "Оптимизация", description: "Анализ и улучшение показателей", duration: "Ongoing" }
      ],
      results: [
        "Увеличение конверсии лидов в продажи на 30-70%",
        "Рост повторных покупок на 40-150%",
        "Увеличение среднего чека на 25-60%",
        "Автоматизация рутинных процессов"
      ],
      pricing: "от 60 000 ₽/мес",
      timeline: "Первые результаты через 2-4 недели, полный эффект через 2-3 месяца"
    },
    {
      id: "strategy",
      icon: <BarChart3 className="text-white" size={40} />,
      title: "Стратегия и консалтинг",
      subtitle: "Комплексный маркетинг как система",
      gradient: "from-orange-500 to-red-500",
      description: "Выстраивание маркетинга как единой системы роста бизнеса с прозрачной аналитикой и планированием.",
      includes: [
        "Маркетинговый аудит бизнеса",
        "Стратегия развития на 12 месяцев",
        "Настройка аналитики и KPI",
        "Планирование бюджетов",
        "Интеграция всех каналов маркетинга",
        "Ежемесячные стратегические сессии",
        "Обучение команды",
        "Прозрачная отчётность"
      ],
      process: [
        { step: "Диагностика", description: "Полный аудит маркетинга и продаж", duration: "2 недели" },
        { step: "Стратегия", description: "Создание плана развития", duration: "1 неделя" },
        { step: "Roadmap", description: "Детальный план на 12 месяцев", duration: "1 неделя" },
        { step: "Внедрение", description: "Поэтапная реализация стратегии", duration: "Ongoing" },
        { step: "Контроль", description: "Ежемесячные сессии и корректировки", duration: "Ongoing" },
        { step: "Развитие", description: "Масштабирование успешных каналов", duration: "Ongoing" }
      ],
      results: [
        "Рост ROMI на 150-300%",
        "Снижение стоимости привлечения на 30-50%",
        "Понятная система KPI и метрик",
        "Предсказуемый рост бизнеса"
      ],
      pricing: "от 120 000 ₽/мес",
      timeline: "Первые результаты через 1-2 месяца, системные изменения через 3-6 месяцев"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Button 
              onClick={() => navigate('/')}
              variant="outline" 
              className="mb-8 group"
            >
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={16} />
              Вернуться на главную
            </Button>
            
            <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
              Наши услуги
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Детальное описание услуг
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полная информация о том, как мы работаем, что включено в услуги и какие результаты вы получите
            </p>
          </div>

          {/* Services Detail */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={service.id} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${service.gradient} text-white p-8`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                        <p className="text-xl opacity-90">{service.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{service.pricing}</div>
                      <div className="text-sm opacity-75">стартовый пакет</div>
                    </div>
                  </div>
                  <p className="text-lg opacity-90 mt-4 max-w-4xl">{service.description}</p>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* What's included */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <CheckCircle className="text-green-500 mr-3" size={24} />
                        Что входит в услугу
                      </h3>
                      <div className="space-y-3">
                        {service.includes.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Clock className="text-blue-500 mr-3" size={24} />
                        Процесс работы
                      </h3>
                      <div className="space-y-4">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-600 font-bold text-sm">{idx + 1}</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{step.step}</h4>
                              <p className="text-gray-600 text-sm">{step.description}</p>
                              <p className="text-blue-600 text-xs font-medium">{step.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="text-green-500 mr-3" size={24} />
                      Ожидаемые результаты
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.results.map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Target className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="text-gray-500" size={18} />
                        <span className="font-semibold text-gray-900">Сроки</span>
                      </div>
                      <p className="text-gray-700">{service.timeline}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900">Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Можно ли заказать только одну услугу?</h4>
                      <p className="text-gray-600">Да, мы работаем как с отдельными направлениями, так и комплексно. Однако наибольший эффект достигается при интеграции всех каналов.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Какие гарантии вы даёте?</h4>
                      <p className="text-gray-600">Мы гарантируем прозрачность процессов и регулярную отчётность. Конкретные KPI обсуждаем индивидуально для каждого проекта.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Работаете ли вы с небольшими компаниями?</h4>
                      <p className="text-gray-600">Да, мы работаем с бизнесом разного масштаба. Главное — готовность к системной работе и развитию.</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Как происходит оплата?</h4>
                      <p className="text-gray-600">Работаем по абонентской модели с ежемесячной оплатой. Первоначальный платёж включает аудит и стратегию.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Сколько времени займёт проект?</h4>
                      <p className="text-gray-600">Маркетинг — это долгосрочная работа. Минимальный срок сотрудничества — 6 месяцев для достижения устойчивых результатов.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Предоставляете ли обучение команды?</h4>
                      <p className="text-gray-600">Да, мы обучаем вашу команду работе с системами и передаём экспертизу для самостоятельного развития.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Готовы обсудить ваш проект?
              </h2>
              <p className="text-gray-600 mb-6">
                Расскажем подробнее о том, как можем помочь именно вашему бизнесу
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Получить консультацию
                </Button>
                <Button 
                  onClick={() => navigate('/cases')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl"
                >
                  Посмотреть кейсы
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
