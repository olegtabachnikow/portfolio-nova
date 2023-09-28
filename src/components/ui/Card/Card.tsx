import { FC, useLayoutEffect, useState } from 'react';
import './Card.css';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardFooter } from '../CardFooter/CardFooter';
import { Route, Routes } from 'react-router-dom';
import { About } from '../About/About';
import { Experience } from '../Experience/Experience';
import { Contact } from '../Contact/Contact';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface CardProps {
  isStarted: boolean;
}

export const Card: FC<CardProps> = ({ isStarted }) => {
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [isContactSection, setIsContactSection] = useState<boolean>(false);
  const location = useLocation();
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    location.pathname === '/' ? setIsMoved(false) : setIsMoved(true);
    location.pathname === '/contact'
      ? setIsContactSection(true)
      : setIsContactSection(false);
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ scale: isStarted ? 1 : 0 }}
      animate={{ scale: isStarted ? 1 : 0 }}
      transition={{ duration: 1, delay: 0.5, ease: 'backOut' }}
    >
      <motion.div
        initial={{ height: 450, scale: 1 }}
        animate={{
          height: isMoved
            ? isContactSection
              ? 450
              : i18n.language === 'en'
              ? 550
              : i18n.language === 'ru'
              ? 595
              : 580
            : i18n.language === 'en'
            ? 450
            : 470,
        }}
        transition={{ duration: 0.2 }}
        className='card'
      >
        <div className='card-overlay' />
        <div className='card-content-container'>
          <CardHeader isMoved={isMoved} />
          <div className='card-content'>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
          <CardFooter />
        </div>
      </motion.div>
    </motion.div>
  );
};
