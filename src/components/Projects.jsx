import React from 'react';
import { useTranslation } from 'react-i18next';
import menuIcon2 from '../assets/img/CSS.png';
import menuIcon1 from '../assets/img/c.png';
import menuIcon from '../assets/img/javascript.webp';

function Projects() {
  const { t } = useTranslation();

  return (
    <div id="projects" className="flex flex-col items-center bg-blue-100 p-36">
      <h2 className="text-4xl font-bold mb-8">{t('Mis Proyectos')}</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <a href="https://github.com/MarlonFernandoRuizPalacios/Portfolio.git" className="flex flex-col items-center m-4" target="_blank" rel="noopener noreferrer">
          <img src={menuIcon} alt="Project 1" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <div className="bg-blue-900 p-8 rounded-lg">
            <p>{t('project1')}</p>
          </div>
        </a>
        <a href="https://github.com/MarlonFernandoRuizPalacios/Con-Num.Romanos.git" className="flex flex-col items-center m-4" target="_blank" rel="noopener noreferrer">
          <img src={menuIcon1} alt="Project 2" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <div className="bg-blue-900 p-8 rounded-lg">
            <p>{t('project2')}</p>
          </div>
        </a>
        <a href="https://github.com/MarlonFernandoRuizPalacios/Portfolio.git" className="flex flex-col items-center m-4" target="_blank" rel="noopener noreferrer">
          <img src={menuIcon2} alt="Project 3" className="w-32 h-32 mb-4" style={{ objectFit: 'cover' }} />
          <div className="bg-blue-900 p-8 rounded-lg">
            <p>{t('project3')}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
