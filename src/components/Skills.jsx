import React from 'react';
import { useTranslation } from 'react-i18next';
import menuIcon2 from '../assets/img/CSS.png';
import menuIcon1 from '../assets/img/mysql.png';
import menuIcon from '../assets/img/visual.png';

function Skills() {
  const { t } = useTranslation();

  return (
    <div id="skills" className="flex flex-col items-center bg-blue-200 p-36">
      <h2 className="text-4xl font-bold mb-8">{t('Habilidades')}</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex flex-col items-center m-4">
          <img src={menuIcon} alt="Skill 1" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <div className="bg-blue-900 p-8 rounded-lg">
            <p>{t('skill1')}</p>
          </div>
        </div>
        <div className="flex flex-col items-center m-4">
          <img src={menuIcon1} alt="Skill 2" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <div className="bg-blue-900 p-8 rounded-lg">
            <p>{t('skill2')}</p>
          </div>
        </div>
        <div className="flex flex-col items-center m-4">
          <img src={menuIcon2} alt="Skill 3" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <div className="bg-blue-900 p-8 rounded-lg">
            <p>{t('skill3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
