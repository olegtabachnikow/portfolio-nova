import { FC } from 'react';
import './Contact.css';
import locationMarker from '../../../images/location.svg';
import phone from '../../../images/phone.svg';
import mail from '../../../images/mail.svg';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

export const Contact: FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <CardContentWrapper>
      <span className='content-title contact-title'>contact</span>
      <motion.a
        whileTap={{ scale: 0.8 }}
        whileHover={{ opacity: 1 }}
        className='contact-link'
        href='https://maps.app.goo.gl/6eiMM5aqH1RDXTnX7'
        target='blank'
      >
        <div className='contact-icon-container'>
          <img
            className='contact-link-icon'
            src={locationMarker}
            alt='location marker icon'
            width={25}
          />
        </div>
        <span>Sderot Sheshet HaYamim 30, Tel Aviv-Jaffa</span>
      </motion.a>
      <motion.a
        whileTap={{ scale: 0.8 }}
        whileHover={{ opacity: 1 }}
        className='contact-link'
        href='tel:+972539240665'
      >
        <div className='contact-icon-container'>
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
        className='contact-link'
        href='mailto:olegtabachnikow@gmail.com'
      >
        <div className='contact-icon-container'>
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
        href='https://github.com/Eskel4ik/portfolio/raw/gh-pages/OlegTabachnikowCV.pdf'
        download
      >
        Download CV
      </motion.a>
    </CardContentWrapper>
  );
};
