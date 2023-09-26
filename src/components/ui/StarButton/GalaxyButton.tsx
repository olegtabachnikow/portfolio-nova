import { FC } from 'react';
import './GalaxyButton.css';
import { motion } from 'framer-motion';

const stars: number[] = [];
stars.length = 10;
stars.fill(1);

interface GalaxyButtonProps {
  handler: () => void;
  isStarted: boolean;
}

export const GalaxyButton: FC<GalaxyButtonProps> = ({ handler, isStarted }) => {
  function handleClick() {
    handler();
  }
  return (
    <motion.div
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ filter: 'drop-shadow(0px 0px 40px blue)' }}
      animate={isStarted ? { scale: 0 } : { scale: 1 }}
      transition={{ duration: 0.35 }}
      className='galaxy-button-container'
    >
      <span className='galaxy-button-spark' />
      <button className='galaxy-button'>
        <span className='galaxy-button-text'>Start</span>
        <div className='galaxy-background-container'>
          <div className='galaxy-background'>
            <div className='galaxy-stars-container'>
              {stars.map((el, i: number) => (
                <span
                  key={el + i}
                  className={`galaxy-star galaxy-star-${i + 1}`}
                />
              ))}
            </div>
            <div className='galaxy-star-static galaxy-star-static-1' />
            <div className='galaxy-star-static galaxy-star-static-2' />
            <div className='galaxy-star-static galaxy-star-static-3' />
            <div className='galaxy-star-static galaxy-star-static-4' />
          </div>
        </div>
      </button>
    </motion.div>
  );
};
