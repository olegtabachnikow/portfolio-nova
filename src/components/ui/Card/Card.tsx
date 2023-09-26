import { FC, useLayoutEffect, useState, useEffect } from 'react';
import './Card.css';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardFooter } from '../CardFooter/CardFooter';
import { Route, Routes } from 'react-router-dom';
import { About } from '../About/About';
import { Experience } from '../Experience/Experience';
import { Contact } from '../Contact/Contact';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CardProps {
  isStarted: boolean;
}

export const Card: FC<CardProps> = ({ isStarted }) => {
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [isContactSection, setIsContactSection] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    location.pathname === '/about' ? setIsMoved(false) : setIsMoved(true);
    location.pathname === '/contact'
      ? setIsContactSection(true)
      : setIsContactSection(false);
  }, [location.pathname]);

  useEffect(() => {
    navigate('/about');
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: isStarted ? 1 : 0 }}
      transition={{ duration: 1, delay: 0.5, ease: 'backOut' }}
    >
      <motion.div
        initial={{ height: 450, scale: 1 }}
        animate={{
          height: isMoved ? (isContactSection ? 450 : 550) : 450,
        }}
        transition={{ duration: 0.2 }}
        className='card'
      >
        <div className='card-overlay' />
        <div className='card-content-container'>
          <CardHeader isMoved={isMoved} />
          <div className='card-content'>
            <Routes>
              <Route path='/about' element={<About />} />
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
