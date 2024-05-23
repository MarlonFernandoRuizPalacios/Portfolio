import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-900 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => changeLanguage('en')} className="m-2 p-2 bg-blue-500 text-white">English</button>
          <button onClick={() => changeLanguage('es')} className="m-2 p-2 bg-green-500 text-white">Español</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <ul className={`flex items-center md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:space-x-8`}>
          <li className="mr-6">
            <a href="#contacts" className="text-white">{t('contact')}</a>
          </li>
          <li className="mr-6">
            <a href="#projects" className="text-white">{t('Projects')}</a>
          </li>
          <li>
            <a href="#skills" className="text-white">{t('Skills')}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
