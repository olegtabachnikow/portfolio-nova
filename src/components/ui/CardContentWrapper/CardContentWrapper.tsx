import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardContentWrapperProps {
  children: ReactNode;
}

export const CardContentWrapper: FC<CardContentWrapperProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(50px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.2, delay: 0.4 }}
      className='card-content-wrapper'
    >
      {children}
    </motion.div>
  );
};
