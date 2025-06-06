
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target, ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cases = () => {
  const navigate = useNavigate();

  const cases = [
    {
      id: 1,
      title: "Интернет-магазин товаров для дома",
      category: "E-commerce",
      period: "12 месяцев",
      challenge: "Низкие позиции в поиске, слабые продажи, отсутствие повторных покупок",
      solution: [
        "Полная проработка семантики под коммерческие запросы",
        "Техническая оптимизация сайта и увеличение скорости загрузки",
        "Создание качественного контента для категорий товаров",
        "Настройка CRM-воронок для повторных продаж",
        "Автоматизация email и SMS рассылок"
      ],
      results: [
        { metric: "Органический трафик", value: "+320%", icon: TrendingUp },
        { metric: "Конверсия в продажи", value: "+85%", icon: Target },
        { metric: "Повторные покупки", value: "+150%", icon: Users },
        { metric: "ROI маркетинга", value: "420%" }
      ],
      testimonial: "За год работы с командой Соломатиных наши продажи выросли в 4 раза. Самое главное — они не просто делают задачи, а думают о бизнесе как о своём.",
      author: "Елена К., владелец магазина"
    },
    {
      id: 2,
      title: "Частная стоматологическая клиника",
      category: "Медицина",
      period: "8 месяцев",
      challenge: "Высокая конкуренция, дорогие рекламные кампании, низкий процент повторных обращений",
      solution: [
        "SEO-продвижение по медицинским запросам",
        "Создание экспертного контента о стоматологии",
        "Настройка системы напоминаний о профилактике",
        "Автоматизация записи и подтверждения приёмов",
        "Программа лояльности для пациентов"
      ],
      results: [
        { metric: "Заявки из поиска", value: "+280%", icon: TrendingUp },
        { metric: "Стоимость лида", value: "-60%", icon: Target },
        { metric: "Повторные обращения", value: "+90%", icon: Users },
        { metric: "Средний чек", value: "+45%" }
      ],
      testimonial: "Михаил и Анастасия полностью взяли на себя наш маркетинг. Теперь у нас стабильный поток пациентов, а я могу сосредоточиться на лечении.",
      author: "Дмитрий В., главный врач"
    },
    {
      id: 3,
      title: "Студия веб-разработки",
      category: "Услуги",
      period: "10 месяцев",
      challenge: "Нестабильный поток клиентов, зависимость от рекомендаций, отсутствие системы продаж",
      solution: [
        "Продвижение по запросам 'создание сайтов'",
        "Контент-маркетинг с кейсами и обучающими материалами",
        "Настройка CRM для ведения проектов",
        "Автоматизация процесса от заявки до сдачи проекта",
        "Система получения отзывов и рекомендаций"
      ],
      results: [
        { metric: "Заявки в месяц", value: "+400%", icon: TrendingUp },
        { metric: "Конверсия заявок", value: "+65%", icon: Target },
        { metric: "Средняя стоимость проекта", value: "+120%", icon: Users },
        { metric: "Время на продажи", value: "-50%" }
      ],
      testimonial: "Благодаря системному подходу команды мы перешли от хаотичного поиска клиентов к стабильному росту. Теперь клиенты находят нас сами.",
      author: "Алексей М., руководитель студии"
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
              Кейсы клиентов
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Реальные результаты наших клиентов
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Каждый кейс — это история системного роста. Смотрите, как мы помогаем бизнесу достигать целей
            </p>
          </div>

          {/* Cases */}
          <div className="space-y-16">
            {cases.map((caseItem, index) => (
              <Card key={caseItem.id} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50/50 border-b border-gray-100">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="bg-white border-gray-300">
                          {caseItem.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{caseItem.period}</span>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-2">
                        {caseItem.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Challenge and Solution */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                            <Target className="text-red-600 w-4 h-4" />
                          </div>
                          Задача
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{caseItem.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <CheckCircle className="text-blue-600 w-4 h-4" />
                          </div>
                          Решение
                        </h3>
                        <ul className="space-y-2">
                          {caseItem.solution.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <TrendingUp className="text-green-600 w-4 h-4" />
                        </div>
                        Результаты
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {caseItem.results.map((result, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-4 rounded-xl text-center">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{result.value}</div>
                            <div className="text-sm text-gray-600">{result.metric}</div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <blockquote className="text-gray-700 italic mb-4">
                          "{caseItem.testimonial}"
                        </blockquote>
                        <cite className="text-sm font-medium text-gray-900 not-italic">
                          — {caseItem.author}
                        </cite>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Хотите такие же результаты?
              </h2>
              <p className="text-gray-600 mb-6">
                Обсудим ваш проект и покажем, как можно улучшить маркетинг
              </p>
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
