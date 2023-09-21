import { FC } from 'react';
import './CardHeader.css';
import { Avatar } from '../Avatar/Avatar';
import { motion } from 'framer-motion';

interface CardHeaderProps {
  isMoved: boolean;
}

const initialScale = { transform: 'translate(0px, 0px) scale(1)' };

export const CardHeader: FC<CardHeaderProps> = ({ isMoved }) => {
  return (
    <motion.div
      initial={{ height: 200 }}
      animate={{ height: isMoved ? 100 : 200 }}
      transition={{ duration: 0.2 }}
      className='card-header'
    >
      <motion.div
        initial={{ height: 200 }}
        animate={{ height: isMoved ? 100 : 200 }}
        transition={{ duration: 0.2 }}
        className='card-header-overlay'
      />
      <Avatar isMoved={isMoved} />
      <motion.h1
        initial={initialScale}
        animate={
          isMoved
            ? { transform: 'translate(15px, -105px) scale(0.7)' }
            : initialScale
        }
        className='card-header-title'
      >
        Oleg Tabachnikow
      </motion.h1>
      <motion.h2
        initial={initialScale}
        animate={
          isMoved
            ? { transform: 'translate(3px, -115px) scale(0.8)' }
            : initialScale
        }
        className='card-header-subtitle'
      >
        Frontend Web Developer
      </motion.h2>
    </motion.div>
  );
};
