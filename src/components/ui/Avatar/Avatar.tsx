import { FC } from 'react';
import './Avatar.css';

interface AvatarProps {
  isMoved: boolean;
}

export const Avatar: FC<AvatarProps> = ({ isMoved }) => {
  return <div className={`avatar ${isMoved ? 'active' : ''}`} />;
};
