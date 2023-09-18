import { FC } from 'react';
import './CardHeader.css';
import { Avatar } from '../Avatar/Avatar';

interface CardHeaderProps {
  isMoved: boolean;
}

export const CardHeader: FC<CardHeaderProps> = ({ isMoved }) => {
  return (
    <div className={`card-header ${isMoved ? 'moved' : ''}`}>
      <div className={`card-overlay ${isMoved ? 'moved' : ''}`} />
      <Avatar isMoved={isMoved} />
      <h1 className={`card-header-title ${isMoved ? 'moved' : ''}`}>
        Oleg Tabachnikow
      </h1>
      <h2 className={`card-header-subtitle ${isMoved ? 'moved' : ''}`}>
        Frontend Web Developer
      </h2>
    </div>
  );
};
