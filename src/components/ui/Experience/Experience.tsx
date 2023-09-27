import { FC } from 'react';
import './Experience.css';
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';
import { useTranslation } from 'react-i18next';

export const Experience: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <CardContentWrapper>
      <span className='content-title'>{t('experience.title')}</span>
      <div className='experience-items-container'>
        <ExperienceItem
          year={'2023'}
          lineHeight={
            i18n.language === 'iw' ? 63 : i18n.language === 'ru' ? 92 : 65
          }
          title={t('experience.item1.company')}
          text={t('experience.item1.text')}
        />
        <ExperienceItem
          year={'2022'}
          lineHeight={
            i18n.language === 'iw' ? 62 : i18n.language === 'ru' ? 62 : 48
          }
          title={t('experience.item2.company')}
          text={t('experience.item2.text')}
        />
        <ExperienceItem
          year={'2022'}
          lineHeight={
            i18n.language === 'iw' ? 76 : i18n.language === 'ru' ? 92 : 79
          }
          title={t('experience.item3.company')}
          text={t('experience.item3.text')}
        />
        <ExperienceItem
          year={'2022'}
          lineHeight={
            i18n.language === 'iw' ? 92 : i18n.language === 'ru' ? 77 : 94
          }
          title={t('experience.item4.company')}
          text={t('experience.item4.text')}
        />
      </div>
    </CardContentWrapper>
  );
};
