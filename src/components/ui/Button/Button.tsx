import { FC } from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';

interface ButtonProps {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <NavLink
      to={`/${text.toLowerCase()}`}
      id='button'
      className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : ''
      }
    >
      {text}
    </NavLink>
  );
};
