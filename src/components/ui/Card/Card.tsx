import { FC, useLayoutEffect, useState } from 'react';
import './Card.css';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardFooter } from '../CardFooter/CardFooter';
import { Route, Routes } from 'react-router-dom';
import { About } from '../About/About';
import { Experience } from '../Experience/Experience';
import { Contact } from '../Contact/Contact';
import { useLocation } from 'react-router-dom';

export const Card: FC = () => {
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [isContactSection, setIsContactSection] = useState<boolean>(false);
  const location = useLocation();

  useLayoutEffect(() => {
    location.pathname === '/about' ? setIsMoved(false) : setIsMoved(true);
    location.pathname === '/contact'
      ? setIsContactSection(true)
      : setIsContactSection(false);
  }, [location.pathname]);
  return (
    <div
      className={`card ${isMoved ? 'expanded' : ''} ${
        isContactSection ? 'contact' : ''
      }`}
    >
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
    </div>
  );
};
