
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileCheck, Users, AlertCircle, Scale } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700 border-green-200">
                Правовая информация
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Пользовательское соглашение
              </h1>
              <p className="text-xl text-gray-600">
                Условия использования наших услуг
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileCheck className="mr-3 text-blue-500" size={24} />
                    1. Общие условия
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между ИП Соломатин Михаил Сергеевич (далее — Исполнитель) и физическими или юридическими лицами (далее — Заказчик) при оказании услуг интернет-маркетинга.
                  </p>
                  <p>
                    Использование сайта и отправка заявки означает полное согласие с условиями данного соглашения.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-3 text-green-500" size={24} />
                    2. Предмет соглашения
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>Исполнитель оказывает следующие услуги:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SEO-продвижение сайтов</li>
                    <li>CRM-маркетинг и настройка систем автоматизации</li>
                    <li>Стратегический консалтинг по интернет-маркетингу</li>
                    <li>Аналитика и аудиты маркетинговых активностей</li>
                    <li>Консультационные услуги</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="mr-3 text-orange-500" size={24} />
                    3. Права и обязанности сторон
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Исполнитель обязуется:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Оказывать услуги качественно и в согласованные сроки</li>
                      <li>Предоставлять консультации по вопросам услуг</li>
                      <li>Соблюдать конфиденциальность данных Заказчика</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Заказчик обязуется:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Предоставлять достоверную информацию</li>
                      <li>Своевременно оплачивать услуги согласно договору</li>
                      <li>Предоставлять необходимые доступы и материалы</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="mr-3 text-red-500" size={24} />
                    4. Ответственность и ограничения
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    Исполнитель не несет ответственности за результаты, на которые влияют внешние факторы, не зависящие от качества оказываемых услуг (изменения в алгоритмах поисковых систем, действия конкурентов и т.д.).
                  </p>
                  <p>
                    Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств, если это неисполнение явилось следствием обстоятельств непреодолимой силы.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>5. Порядок оплаты</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    Стоимость услуг определяется индивидуально в зависимости от объема и сложности работ. Оплата производится согласно выставленным счетам в сроки, указанные в договоре.
                  </p>
                  <p>
                    Консультации по телефону и в мессенджерах предоставляются бесплатно.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gray-900 text-white">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>ИП Соломатин Михаил Сергеевич</strong></p>
                  <p>ОГРНИП: 315222300009436</p>
                  <p>ИНН: 222212455410</p>
                  <p>Email: info@solomatin-marketing.ru</p>
                  <p>Телефон: +7 (989) 295-10-30</p>
                  <p>Сайт: solomatin-marketing.ru</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
