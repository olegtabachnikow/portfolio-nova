import { FC } from 'react';
import './Contact.css';
import locationMarker from '../../../images/location.svg';
import phone from '../../../images/phone.svg';
import mail from '../../../images/mail.svg';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Contact: FC = () => {
  const { t, i18n } = useTranslation();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <CardContentWrapper>
      <span className='content-title contact-title'> {t('contact.title')}</span>
      <motion.a
        whileTap={{ scale: 0.8 }}
        whileHover={{ opacity: 1 }}
        className={`contact-link ${i18n.language === 'iw' ? 'reversed' : ''}`}
        href='https://maps.app.goo.gl/6eiMM5aqH1RDXTnX7'
        target='blank'
      >
        <div
          className={`contact-icon-container ${
            i18n.language === 'iw' ? 'reversed' : ''
          }`}
        >
          <img
            className='contact-link-icon'
            src={locationMarker}
            alt='location marker icon'
            width={25}
          />
        </div>
        <span>{t('contact.address')}</span>
      </motion.a>
      <motion.a
        whileTap={{ scale: 0.8 }}
        whileHover={{ opacity: 1 }}
        className={`contact-link ${i18n.language === 'iw' ? 'reversed' : ''}`}
        href='tel:+972539240665'
      >
        <div
          className={`contact-icon-container ${
            i18n.language === 'iw' ? 'reversed' : ''
          }`}
        >
          <img
            className='contact-link-icon'
            src={phone}
            alt='phone icon'
            width={25}
          />
        </div>
        <span>+972539240665</span>
      </motion.a>
      <motion.a
        whileTap={{ scale: 0.8 }}
        whileHover={{ opacity: 1 }}
        className={`contact-link ${i18n.language === 'iw' ? 'reversed' : ''}`}
        href='mailto:olegtabachnikow@gmail.com'
      >
        <div
          className={`contact-icon-container ${
            i18n.language === 'iw' ? 'reversed' : ''
          }`}
        >
          <img
            className='contact-link-icon'
            src={mail}
            alt='email icon'
            width={25}
          />
        </div>
        <span>olegtabachnikow@gmail.com</span>
      </motion.a>
      <motion.a
        whileTap={{ scale: 0.8 }}
        className={`contact-cv-button ${isTabletOrMobile ? 'mobile' : ''}`}
        href='https://github.com/olegtabachnikow/portfolio-nova/raw/gh-pages/OLEG_TABACHNIKOW_CV.pdf'
        download
      >
        {t('contact.button')}
      </motion.a>
    </CardContentWrapper>
  );
};
