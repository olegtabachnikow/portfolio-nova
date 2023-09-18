import { FC } from 'react';

interface ExperienceItemProps {
  lineHeight?: number;
  year: string;
  title: string;
  text: string;
}

export const ExperienceItem: FC<ExperienceItemProps> = ({
  lineHeight,
  year,
  title,
  text,
}) => {
  return (
    <div className='experience-item'>
      <div className='experience-item-date'>{year}</div>
      <div
        className='experience-item-line'
        style={{ height: `${lineHeight}px` }}
      />
      <div className='experience-item-section'>
        <span>{title}</span>
        <p className='experience-item-text'>{text}</p>
      </div>
    </div>
  );
};
