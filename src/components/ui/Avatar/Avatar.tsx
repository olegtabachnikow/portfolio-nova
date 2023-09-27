import { FC } from 'react';
import './Avatar.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface AvatarProps {
  isMoved: boolean;
}

const initialStyles = {
  transform: 'translate(0px,0px) scale(1)',
};

export const Avatar: FC<AvatarProps> = ({ isMoved }) => {
  const { i18n } = useTranslation();
  return (
    <motion.div
      initial={initialStyles}
      animate={
        isMoved
          ? i18n.language === 'iw'
            ? { transform: 'translate(120px,-20px) scale(0.7)' }
            : {
                transform: 'translate(-120px,-20px) scale(0.7)',
              }
          : initialStyles
      }
      className='avatar'
    />
  );
};
