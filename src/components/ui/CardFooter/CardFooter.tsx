import { FC } from 'react';
import './CardFooter.css';
import { Button } from '../Button/Button';

export const CardFooter: FC = () => {
  return (
    <div className='card-footer'>
      <Button text='About' />
      <Button text='Experience' />
      <Button text='Contact' />
    </div>
  );
};
