
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, BarChart3, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="text-orange-500" size={32} />,
      title: "SEO-продвижение",
      description: "Системный рост позиций и трафика на долгосрок",
      features: [
        "Глубокая проработка семантики",
        "Технический аудит и доработка сайта",
        "Контент и внешние ссылки",
        "Рост позиций и трафика на долгосрок"
      ],
      result: "Увеличение органического трафика в 2-5 раз за 6-12 месяцев"
    },
    {
      icon: <Users className="text-orange-500" size={32} />,
      title: "CRM-маркетинг",
      description: "Воронки от лидов до повторных продаж",
      features: [
        "Воронки: от лидов до повторных продаж",
        "Сегментация базы и персонализация",
        "Рассылки: WhatsApp, email, SMS",
        "Автоматизация и увеличение LTV"
      ],
      result: "Повышение конверсии в продажи на 30-70%"
    },
    {
      icon: <BarChart3 className="text-orange-500" size={32} />,
      title: "Стратегия и сопровождение",
      description: "Маркетинг как система, а не набор инструментов",
      features: [
        "Аналитика, план, KPI",
        "Прозрачная отчётность",
        "Маркетинговый консалтинг",
        "Регулярные стратегические сессии"
      ],
      result: "Понятная система роста с прогнозируемыми результатами"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Что мы делаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Не просто выполняем задачи — выстраиваем маркетинг как систему роста вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Результат:</h4>
                  <p className="text-gray-700">{service.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Почему нам доверяют?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-semibold text-gray-900">Работаем лично</span>
                </div>
                <p className="text-gray-600 ml-8">Не передаём задачи подрядчикам</p>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-semibold text-gray-900">16+ лет опыта</span>
                </div>
                <p className="text-gray-600 ml-8">В маркетинге и продажах</p>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-semibold text-gray-900">Фокус на результате</span>
                </div>
                <p className="text-gray-600 ml-8">А не на часах работы</p>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-semibold text-gray-900">Семейный бизнес</span>
                </div>
                <p className="text-gray-600 ml-8">Репутация важнее всего</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
