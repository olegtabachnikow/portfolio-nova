import { FC, useEffect, useLayoutEffect, useState } from 'react';
import './GalaxyButton.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const stars: number[] = new Array(20).fill(1);
const starsStatic: number[] = new Array(5).fill(1);
interface GalaxyButtonProps {
  handler: () => void;
  isStarted: boolean;
}

export const GalaxyButton: FC<GalaxyButtonProps> = ({ handler, isStarted }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { t } = useTranslation();
  function handleClick() {
    handler();
  }
  useLayoutEffect(() => {
    const getRndValue = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    const particles = document.querySelectorAll('.galaxy-star');
    particles.forEach((particle) => {
      particle.setAttribute(
        'style',
        `
        --angle: ${getRndValue(0, 360)};
        --duration: ${getRndValue(6, 20)};
        --delay: ${getRndValue(1, 10)};
        --alpha: ${getRndValue(30, 90) / 100};
        --size: ${getRndValue(4, 6)};
        --distance: ${getRndValue(130, 200)};
      `
      );
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.button
      disabled={isDisabled}
      whileHover={{ scale: isStarted ? 0 : 0.95 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: isStarted ? 0 : 1 }}
      animate={{ scale: isStarted ? 0 : 1 }}
      transition={{ duration: 0.35 }}
      className='galaxy-button'
      onClick={handleClick}
    >
      <motion.div className='galaxy-container'>
        <motion.div
          initial={{ transform: 'translate(100px, 100px)' }}
          animate={!isDisabled && { transform: 'translate(0, 0)' }}
          transition={{ duration: 0.5 }}
          className='galaxy-big-star'
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={!isDisabled && { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='galaxy-stars-container'
        >
          {stars.map((el, i) => (
            <span key={el + i} className='galaxy-star' />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={!isDisabled && { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='galaxy-stars-static-container'
        >
          {starsStatic.map((el, i) => (
            <span key={`${el + i}-static`} className='galaxy-star-static' />
          ))}
        </motion.div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={!isDisabled && { opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='galaxy-button-text'
      >
        {t('start')}
      </motion.span>
      <div className='galaxy-button-shadow' />
    </motion.button>
  );
};
