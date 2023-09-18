import { FC } from 'react';
import './Contact.css';
import locationMarker from '../../../images/location.svg';
import phone from '../../../images/phone.svg';
import mail from '../../../images/mail.svg';

export const Contact: FC = () => {
  return (
    <div className='content-container'>
      <span className='content-title contact-title'>contact</span>
      <a
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
      </a>
      <a className='contact-link' href='tel:+972539240665'>
        <div className='contact-icon-container'>
          <img
            className='contact-link-icon'
            src={phone}
            alt='phone icon'
            width={25}
          />
        </div>
        <span>+972539240665</span>
      </a>
      <a className='contact-link' href='mailto:olegtabachnikow@gmail.com'>
        <div className='contact-icon-container'>
          <img
            className='contact-link-icon'
            src={mail}
            alt='email icon'
            width={25}
          />
        </div>
        <span>olegtabachnikow@gmail.com</span>
      </a>
      <a
        className='contact-cv-button'
        href='https://github.com/Eskel4ik/portfolio/raw/gh-pages/OlegTabachnikowCV.pdf'
        download
      >
        Download CV
      </a>
    </div>
  );
};
