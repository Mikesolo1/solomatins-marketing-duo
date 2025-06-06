
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, User, Lock, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Правовая информация
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Политика конфиденциальности
              </h1>
              <p className="text-xl text-gray-600">
                Мы заботимся о защите ваших персональных данных
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-3 text-blue-500" size={24} />
                    1. Общие положения
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    Настоящая Политика конфиденциальности персональной информации (далее — Политика) действует в отношении всей информации, которую ИП Соломатин Михаил Сергеевич (далее — Оператор) может получить о Пользователе во время использования им сайта solomatin-marketing.ru.
                  </p>
                  <p>
                    Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-3 text-green-500" size={24} />
                    2. Сбор персональной информации
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>Мы собираем следующие виды персональной информации:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Имя и контактная информация (телефон, email)</li>
                    <li>Информация о компании или проекте</li>
                    <li>Сообщения, отправленные через форму обратной связи</li>
                    <li>Данные о посещении сайта (IP-адрес, браузер, время посещения)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 text-orange-500" size={24} />
                    3. Цели использования информации
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>Персональная информация используется для:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Связи с клиентами и предоставления консультаций</li>
                    <li>Подготовки коммерческих предложений</li>
                    <li>Улучшения качества предоставляемых услуг</li>
                    <li>Исполнения договорных обязательств</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="mr-3 text-red-500" size={24} />
                    4. Защита информации
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-4">
                  <p>
                    Оператор принимает необходимые организационные и технические меры для защиты персональной информации пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения.
                  </p>
                  <p>
                    Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных действующим законодательством РФ.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gray-900 text-white">
                <CardHeader>
                  <CardTitle>Реквизиты оператора</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>ИП Соломатин Михаил Сергеевич</strong></p>
                  <p>ОГРНИП: 315222300009436</p>
                  <p>ИНН: 222212455410</p>
                  <p>Email: info@solomatin-marketing.ru</p>
                  <p>Телефон: +7 (989) 295-10-30</p>
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

export default Privacy;
