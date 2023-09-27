import { FC, useState } from 'react';
import './LanguageSwitch.css';
import { motion } from 'framer-motion';
import israel from '../../../images/israel.svg';
import unitedKingdom from '../../../images/england.svg';
import russia from '../../../images/ru.svg';
import { useTranslation } from 'react-i18next';

export const LanguageSwitch: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
    setIsActive(false);
  };

  return (
    <div className='language-button-container'>
      <button
        className='language-select-button language-select-button-placeholder'
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
      <motion.button
        initial={{ left: 10 }}
        animate={{ left: isActive ? -50 : 10 }}
        className='language-select-button'
        onClick={() => changeLanguage('iw')}
      >
        <img src={israel} alt='israel flag' />
      </motion.button>
      <motion.button
        initial={{ left: 10, top: 13.75 }}
        animate={{ left: isActive ? -40 : 10, top: isActive ? 60 : 13.75 }}
        className='language-select-button'
        onClick={() => changeLanguage('en')}
      >
        <img src={unitedKingdom} alt='english flag' />
      </motion.button>
      <motion.button
        initial={{ left: 10, top: 13.75 }}
        animate={{ left: isActive ? 20 : 10, top: isActive ? 70 : 13.75 }}
        className='language-select-button'
        onClick={() => changeLanguage('ru')}
      >
        <img src={russia} alt='russian flag' />
      </motion.button>
    </div>
  );
};
