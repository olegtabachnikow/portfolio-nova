import { CSSProperties, FC, useEffect, useState } from 'react';
import { Nova } from './components/Nova/Nova';
import { useDispatch } from 'react-redux';
import { setCameraPosition } from './redux/nova-position-slice';
import { setIsCameraMoving } from './redux/nova-is-moving-slice';
import { Card } from './components/ui/Card/Card';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { GalaxyButton } from './components/ui/StarButton/GalaxyButton';
import { motion } from 'framer-motion';
import { LanguageSwitch } from './components/ui/LanguageSwitch/LanguageSwitch';
import { useTranslation } from 'react-i18next';

export const App: FC = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  const { t } = useTranslation();

  const containerStyle: CSSProperties = {
    height: '100%',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {
    document.body.setAttribute('height', `${window.innerHeight}px`);
    navigate('/');
  }, []);

  const handleResize = () => {
    document.body.setAttribute('height', `${window.innerHeight}px`);
    location.pathname === '/' && handleFirstMove();
    location.pathname === '/experience' && handleSecondMove();
    location.pathname === '/contact' && handleThirdMove();
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  function handleFirstMove() {
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 15, y: 25, z: 20 }));
  }
  function handleSecondMove() {
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 1.15, y: 30, z: 0.35 }));
  }
  function handleThirdMove() {
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 2.1, y: 8.8, z: 7 }));
  }

  useEffect(() => {
    location.pathname === '/' && handleFirstMove();
    location.pathname === '/experience' && handleSecondMove();
    location.pathname === '/contact' && handleThirdMove();
  }, [location.pathname]);

  function handleStart() {
    setIsStarted(true);
  }

  return isTabletOrMobile && isLandscape ? (
    <div style={containerStyle}>
      <div className='space' />
      <span className='help-text'>{t('rotate')}</span>
      <LanguageSwitch />
    </div>
  ) : (
    <div style={containerStyle}>
      <motion.div
        className='space'
        initial={{ opacity: 1 }}
        animate={isStarted ? { opacity: 0 } : { opacity: 1 }}
      />
      <Nova isStarted={isStarted} />
      <GalaxyButton handler={handleStart} isStarted={isStarted} />
      <Card isStarted={isStarted} />
      <LanguageSwitch />
    </div>
  );
};
