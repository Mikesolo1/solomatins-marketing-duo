
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, Phone, Clock, CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 2 часов в рабочее время",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="text-green-500" size={24} />,
      title: "WhatsApp",
      description: "Быстрая связь для срочных вопросов",
      value: "+7 (xxx) xxx-xx-xx",
      action: "Написать в WhatsApp",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      icon: <Mail className="text-blue-500" size={24} />,
      title: "Email",
      description: "Для подробного обсуждения проекта",
      value: "info@solomatin-marketing.ru",
      action: "Написать письмо",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      icon: <Phone className="text-orange-500" size={24} />,
      title: "Звонок",
      description: "Предпочитаем сначала переписку",
      value: "+7 (xxx) xxx-xx-xx",
      action: "Заказать звонок",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
            Контакты
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Начнём с диалога
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Расскажите о своём проекте, и мы предложим оптимальное решение уже в первом разговоре
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`border-2 ${method.color} transition-all duration-300 hover:shadow-lg group`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                  <p className="text-gray-900 font-medium mb-4">{method.value}</p>
                  <Button variant="outline" className="w-full group-hover:bg-white transition-colors">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main contact form */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Send className="mr-3 text-orange-500" size={24} />
                    Оставить заявку
                  </CardTitle>
                  <p className="text-gray-600">Заполните форму, и мы свяжемся с вами в течение 2 часов</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Ваше имя *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Иван Иванов"
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="ivan@company.ru"
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Телефон
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+7 (xxx) xxx-xx-xx"
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Компания / проект
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Название компании"
                          className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Расскажите о проекте
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Какие у вас задачи? Что уже делали? Какие результаты хотите получить?"
                        className="resize-none border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Отправить заявку
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="text-blue-500 mr-3" size={20} />
                    <h3 className="font-semibold text-gray-900">Время ответа</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Отвечаем в течение 2 часов в рабочее время (пн-пт, 10:00-18:00 МСК)
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700">Бесплатная консультация</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700">Анализ ситуации</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700">Конкретные рекомендации</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-3">Что дальше?</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                      <span>Изучаем ваш проект и задачи</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                      <span>Проводим экспресс-аудит</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                      <span>Предлагаем план действий</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
