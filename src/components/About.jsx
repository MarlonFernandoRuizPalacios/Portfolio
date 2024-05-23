import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center w-full h-auto bg-blue-100 p-36">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-16 flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Marlon Fernando Ruiz Palacios</h2>
          <img src="https://img.freepik.com/fotos-premium/arte-digital-lobo-colorido_997054-86.jpg" alt="yo" className="w-148 h-148 rounded-full" style={{ objectFit: 'cover' }} />
        </div>
        <div className="md:w-1/2 md:pl-8 flex justify-center">
          <div className="bg-blue-900 p-6 rounded-lg text-center">
            <h2 className="text-5xl font-bold text-black mb-4">{t('description')}</h2>
            <h1 className="text-5xl font-bold text-black">{t('welcomeMessage')}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
