import { FC } from 'react';
import './About.css';
import { SocialIcon } from 'react-custom-social-icons';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';
import { useTranslation } from 'react-i18next';

export const About: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <CardContentWrapper>
      <span className='content-title'>{t('about.title')}</span>
      <p className='card-about-text'>{t('about.text')}</p>
      <div
        className='card-icon-container'
        style={{
          flexDirection: i18n.language === 'iw' ? 'row-reverse' : 'row',
          justifyContent: 'flex-start',
        }}
      >
        <SocialIcon
          className='card-icon'
          network='linkedin'
          shape='round'
          size='small'
          link='https://www.linkedin.com/in/olegtabachnikow/'
          blank
        />
        <SocialIcon
          className='card-icon'
          network='github'
          shape='round'
          size='small'
          link='https://github.com/olegtabachnikow'
          blank
        />
        <SocialIcon
          className='card-icon'
          network='telegram'
          shape='round'
          size='small'
          link='https://t.me/eskel4ik'
          blank
        />
        <SocialIcon
          className='card-icon'
          network='instagram'
          shape='round'
          size='small'
          link='https://www.instagram.com/eskel4ik/'
          blank
        />
        <SocialIcon
          className='card-icon'
          network='facebook'
          shape='round'
          size='small'
          link='https://www.facebook.com/eskel4ik'
          blank
        />
      </div>
    </CardContentWrapper>
  );
};
