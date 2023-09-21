import { FC } from 'react';
import './About.css';
import { SocialIcon } from 'react-custom-social-icons';
import { CardContentWrapper } from '../CardContentWrapper/CardContentWrapper';

export const About: FC = () => {
  return (
    <CardContentWrapper>
      <span className='content-title'>About</span>
      <p className='card-about-text'>
        As a highly motivated Frontend developer, my experience covers Israel
        and United States. I have extensive experience building single page
        applications and mobile applications. I constantly seek to improve my
        developer skill set by completing additional courses and staying
        up-to-date with the latest trends and technologies.
      </p>
      <div className='card-icon-container'>
        <SocialIcon
          className='card-icon'
          network='linkedin'
          shape='round'
          size='small'
          link='https://www.linkedin.com/in/olegtabachnikow/'
          blank
        />
        <SocialIcon
          className='card-icon'
          network='github'
          shape='round'
          size='small'
          link='https://github.com/olegtabachnikow'
          blank
        />
        <SocialIcon
          className='card-icon'
          network='telegram'
          shape='round'
          size='small'
          link='https://t.me/eskel4ik'
          blank
        />
        <SocialIcon
          className='card-icon'
          network='instagram'
          shape='round'
          size='small'
          link='https://www.instagram.com/eskel4ik/'
          blank
        />
        <SocialIcon
          className='card-icon'
          network='facebook'
          shape='round'
          size='small'
          link='https://www.facebook.com/eskel4ik'
          blank
        />
      </div>
    </CardContentWrapper>
  );
};
