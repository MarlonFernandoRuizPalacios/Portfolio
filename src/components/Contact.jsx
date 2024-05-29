import React from 'react';
import { useTranslation } from 'react-i18next';
import menuIcon1 from '../assets/img/email.png';
import menuIcon2 from '../assets/img/facebook.png';
import menuIcon from '../assets/img/phone.png';

function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contacts" className="flex flex-col items-center bg-blue-200 p-36">
      <h2 className="text-4xl font-bold mb-8">{t('Contacts')}</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex flex-col items-center m-4">
          <img src={menuIcon} alt="Contact 1" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <p>{t('contact1')}</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <img src={menuIcon1} alt="Contact 2" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <p>{t('contact2')}</p>
        </div>
        <div className="flex flex-col items-center m-4">
          <img src={menuIcon2} alt="Contact 3" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <p>{t('contact3')}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
