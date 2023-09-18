import { FC } from 'react';
import './Experience.css';
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';

export const Experience: FC = () => {
  return (
    <div className='content-container'>
      <span className='content-title'>work experience</span>
      <div className='experience-items-container'>
        <ExperienceItem
          year={'2023'}
          lineHeight={65}
          title='Front-end Web Developer at Edeal Inc'
          text='Conceptualized and developed a comprehensive, reusable component
              library, streamlining the development process and promoting
              consistent design across projects.'
        />
        <ExperienceItem
          year={'2022'}
          lineHeight={48}
          title='Front-end Web Developer at Get Robo VPN'
          text='Developed a responsive and user-friendly Single Page Application (SPA) for seamless integration into the Telegram Web App Bot.'
        />
        <ExperienceItem
          year={'2022'}
          lineHeight={79}
          title='Teacher Assistant at Yandex'
          text='Diagnosed and resolved complex coding issues, provided one-one mentorship to a group of over 70 students, and enhanced students understanding of best practices in web development.'
        />
        <ExperienceItem
          year={'2022'}
          lineHeight={94}
          title='Front-end Web Developer at Ava Mind'
          text='Developed a responsive and user-friendly Single Page Application (SPA). Assumed a leadership role in strategizing project roadmap, effectively coordinating with key stakeholders to maintain alignment throughout the development process.'
        />
      </div>
    </div>
  );
};
