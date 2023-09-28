import { FC } from 'react';
import './ExperienceItem.css';
import { useTranslation } from 'react-i18next';

interface ExperienceItemProps {
  year: string;
  title: string;
  text: string;
}

export const ExperienceItem: FC<ExperienceItemProps> = ({
  year,
  title,
  text,
}) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`experience-item ${i18n.language === 'iw' ? 'reversed' : ''}`}
      style={{
        flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
      }}
    >
      <div className='experience-item-date'>{year}</div>
      <div className='experience-item-section'>
        <span>{title}</span>
        <p className='experience-item-text'>{text}</p>
      </div>
    </div>
  );
};
