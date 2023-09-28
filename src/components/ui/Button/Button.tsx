import { FC } from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text }) => {
  const { t } = useTranslation();
  function getText(str: string) {
    if (str === 'About') {
      return t('footer.about');
    }
    if (str === 'Experience') {
      return t('footer.experience');
    }
    if (str === 'Contact') {
      return t('footer.contact');
    }
  }
  return (
    <NavLink
      to={`/${text === 'About' ? '' : text.toLowerCase()}`}
      id='button'
      className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : ''
      }
    >
      {getText(text)}
    </NavLink>
  );
};
