import { FC } from 'react';
import './CardFooter.css';
import { Button } from '../Button/Button';
import { useTranslation } from 'react-i18next';

export const CardFooter: FC = () => {
  const { i18n } = useTranslation();
  return (
    <div className={`card-footer ${i18n.language === 'iw' ? 'reversed' : ''}`}>
      <Button text='About' />
      <Button text='Experience' />
      <Button text='Contact' />
    </div>
  );
};
