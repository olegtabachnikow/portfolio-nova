import { FC } from 'react';
import './Avatar.css';
import { motion } from 'framer-motion';

interface AvatarProps {
  isMoved: boolean;
}

const initialStyles = {
  transform: 'translate(0px,0px) scale(1)',
};

export const Avatar: FC<AvatarProps> = ({ isMoved }) => {
  return (
    <motion.div
      initial={initialStyles}
      animate={
        isMoved
          ? {
              transform: 'translate(-120px,-20px) scale(0.7)',
            }
          : initialStyles
      }
      className='avatar'
    />
  );
};
