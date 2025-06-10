
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HtmlTemplatesProps {
  onInsertTemplate: (html: string) => void;
}

const HtmlTemplates = ({ onInsertTemplate }: HtmlTemplatesProps) => {
  const templates = [
    {
      name: 'Заголовок H2',
      html: '<h2>Заголовок второго уровня</h2>',
      preview: 'h2'
    },
    {
      name: 'Заголовок H3',
      html: '<h3>Заголовок третьего уровня</h3>',
      preview: 'h3'
    },
    {
      name: 'Параграф',
      html: '<p>Обычный текст параграфа с возможностью форматирования.</p>',
      preview: 'p'
    },
    {
      name: 'Список',
      html: '<ul><li>Первый элемент списка</li><li>Второй элемент списка</li><li>Третий элемент списка</li></ul>',
      preview: 'ul'
    },
    {
      name: 'Цитата',
      html: '<blockquote>Это важная цитата или выделенный текст, который привлекает внимание читателей.</blockquote>',
      preview: 'blockquote'
    },
    {
      name: 'Ссылка',
      html: '<p>Текст со <a href="https://example.com">ссылкой на внешний ресурс</a> для справки.</p>',
      preview: 'a'
    },
    {
      name: 'Код',
      html: '<p>Пример кода: <code>const example = "код";</code> в тексте.</p>',
      preview: 'code'
    },
    {
      name: 'Жирный текст',
      html: '<p>Это <strong>важный жирный текст</strong> в статье.</p>',
      preview: 'strong'
    }
  ];

  const getPreviewElement = (type: string) => {
    switch (type) {
      case 'h2':
        return <h2 className="text-2xl font-bold text-gray-900">Заголовок H2</h2>;
      case 'h3':
        return <h3 className="text-xl font-semibold text-gray-900">Заголовок H3</h3>;
      case 'p':
        return <p className="text-gray-700">Обычный параграф</p>;
      case 'ul':
        return (
          <ul className="list-disc pl-4 text-gray-700">
            <li>Элемент списка</li>
            <li>Элемент списка</li>
          </ul>
        );
      case 'blockquote':
        return (
          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 bg-gray-50 rounded-r p-2">
            Цитата
          </blockquote>
        );
      case 'a':
        return <p className="text-gray-700">Текст с <a href="#" className="text-orange-500 underline">ссылкой</a></p>;
      case 'code':
        return <p className="text-gray-700">Код: <code className="bg-gray-100 px-1 rounded text-sm">example</code></p>;
      case 'strong':
        return <p className="text-gray-700">Текст с <strong className="font-semibold">выделением</strong></p>;
      default:
        return <div>Шаблон</div>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>HTML Шаблоны</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {templates.map((template, index) => (
            <div key={index} className="border rounded-lg p-3 hover:bg-gray-50">
              <div className="mb-2">
                {getPreviewElement(template.preview)}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onInsertTemplate(template.html)}
                className="w-full"
              >
                Вставить {template.name}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HtmlTemplates;
