import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface CardContentWrapperProps {
  children: ReactNode;
}

export const CardContentWrapper: FC<CardContentWrapperProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(50px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.2, delay: 0.4 }}
      style={{ textAlign: i18n.language === 'iw' ? 'right' : 'left' }}
    >
      {children}
    </motion.div>
  );
};
