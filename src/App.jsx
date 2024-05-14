import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-900 p-4 flex justify-between items-center">
        <div className="flex items-center"> {/* Moved language buttons to the left */}
          <button onClick={() => changeLanguage('en')} className="m-2 p-2 bg-blue-500 text-white">English</button>
          <button onClick={() => changeLanguage('es')} className="m-2 p-2 bg-green-500 text-white">Español</button>
        </div>
        <ul className="flex items-center"> {/* Changed justify to justify-end */}
          <li className="mr-6">
            <a href="#" className="text-white">{t('contact')}</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-white">{t('Projects')}</a>
          </li>
          <li>
            <a href="#" className="text-white">{t('Skills')}</a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center w-full h-auto bg-blue-100 p-36">
        <div className="flex flex-col md:flex-row"> 
          <div className="md:w-1/2 md:pr-16 flex justify-center"> {/* Swapped md:w-1/2 and md:pl-8 */}
            <img src="https://img.freepik.com/fotos-premium/arte-digital-lobo-colorido_997054-86.jpg" alt="yo" className="w-148 h-148 rounded-full" style={{ objectFit: 'cover' }} /> {/* Added style for perfect circle */}
          </div>
          <div className="md:w-1/2 md:pl-8 flex justify-center"> {/* Swapped md:w-1/2 and md:pr-16 */}
            <div className="bg-blue-900 p-6 rounded-lg"> {/* Added div for enclosing text with background color */}
              <h1 className="text-5xl font-bold text-black">{t('welcomeMessage')}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="p-96 bg-blue-200 sm:bg-blue-200 flex-1"> 
      </div>
      <footer className="bg-blue-100 p-16 text-center text-white">
      </footer>
    </div>
  );
}

export default App;
