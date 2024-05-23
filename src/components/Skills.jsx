import React from 'react';
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();

  return (
    <div id="skills" className="flex flex-col items-center bg-blue-200 p-36">
      <h2 className="text-4xl font-bold mb-8">{t('Habilidades')}</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex flex-col items-center m-4">
          <img src="https://seeklogo.com/images/V/visual-studio-code-logo-284BC24C39-seeklogo.com.png" alt="Skill 1" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <div className="bg-blue-900 p-8 rounded-lg">
            <p>{t('skill1')}</p>
          </div>
        </div>
        <div className="flex flex-col items-center m-4">
          <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png" alt="Skill 2" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <div className="bg-blue-900 p-8 rounded-lg">
            <p>{t('skill2')}</p>
          </div>
        </div>
        <div className="flex flex-col items-center m-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="Skill 3" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <div className="bg-blue-900 p-8 rounded-lg">
            <p>{t('skill3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
