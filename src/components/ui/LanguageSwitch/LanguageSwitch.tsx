import { FC, useState } from 'react';
import './LanguageSwitch.css';
import { motion } from 'framer-motion';
import israel from '../../../images/israel.svg';
import unitedKingdom from '../../../images/england.svg';
import russia from '../../../images/ru.svg';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

export const LanguageSwitch: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
    setIsActive(false);
  };

  return (
    <div
      className={`language-button-container ${
        isTabletOrMobile ? 'mobile' : ''
      }`}
    >
      <button
        className='language-select-button main'
        onClick={() => setIsActive((state) => !state)}
      >
        <img
          src={
            i18n.language === 'en'
              ? unitedKingdom
              : i18n.language === 'iw'
              ? israel
              : russia
          }
          alt='flag'
        />
      </button>
      <motion.div
        animate={{
          transform: isActive ? 'translateX(-80px)' : 'translateX(0)',
        }}
        className='language-item'
      >
        {i18n.language === 'iw' ? (
          <motion.button
            className='language-select-button'
            onClick={() => changeLanguage('en')}
          >
            <img src={unitedKingdom} alt='english flag' />
          </motion.button>
        ) : (
          <motion.button
            className='language-select-button'
            onClick={() => changeLanguage('iw')}
          >
            <img src={israel} alt='israel flag' />
          </motion.button>
        )}
      </motion.div>
      <motion.div
        animate={{
          transform: isActive ? 'translateX(-160px)' : 'translateX(0)',
        }}
        className='language-item'
      >
        {i18n.language === 'ru' ? (
          <motion.button
            className='language-select-button'
            onClick={() => changeLanguage('en')}
          >
            <img src={unitedKingdom} alt='english flag' />
          </motion.button>
        ) : (
          <motion.button
            className='language-select-button'
            onClick={() => changeLanguage('ru')}
          >
            <img src={russia} alt='russian flag' />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};
