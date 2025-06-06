
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-white border border-gray-200 shadow-lg p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <Cookie className="h-5 w-5 text-orange-500 mt-0.5" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Использование cookies
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Мы используем cookies и Яндекс.Метрику для улучшения работы сайта и анализа посещений. 
              Продолжая использовать сайт, вы соглашаетесь с{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                политикой конфиденциальности
              </a>.
            </p>
            <div className="flex gap-2">
              <Button 
                onClick={acceptCookies}
                size="sm"
                className="bg-orange-500 hover:bg-orange-600"
              >
                Принять
              </Button>
              <Button 
                onClick={acceptCookies}
                variant="outline"
                size="sm"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieNotice;
