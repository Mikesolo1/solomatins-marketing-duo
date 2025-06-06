
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Соломатин & Соломатина</h3>
            <p className="text-gray-300 mb-4">
              Бутиковая студия интернет-маркетинга
            </p>
            <p className="text-gray-400 text-sm">
              SEO. CRM. Повторные продажи.<br />
              Всё по-честному и по уму.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>SEO-продвижение</li>
              <li>CRM-маркетинг</li>
              <li>Стратегия и консалтинг</li>
              <li>Аналитика и аудиты</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@solomatin-marketing.ru</li>
              <li>+7 (xxx) xxx-xx-xx</li>
              <li>WhatsApp / Telegram</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Соломатин & Соломатина. Семейный бизнес с 2008 года.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
