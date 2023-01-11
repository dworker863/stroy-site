import React, { FC } from 'react';
import { StyledSocial, StyledSocials } from './StyledSocials';

const Socials: FC = () => {
  return (
    <StyledSocials>
      <a href="https://wa.me/77776196190" target="_blank" rel="noreferrer">
        <StyledSocial className="whatsapp" />
      </a>
      <a href="https://t.me/" target="_blank" rel="noreferrer">
        <StyledSocial className="telegram" />
      </a>
      <a href="vk.com" target="_blank" rel="noreferrer">
        <StyledSocial className="vk" />
      </a>
      <a href="instagram.com" target="_blank" rel="noreferrer">
        <StyledSocial className="instagram" />
      </a>
      <a href="facebook.com" target="_blank" rel="noreferrer">
        <StyledSocial className="facebook" />
      </a>
      <a href="twitter.com" target="_blank" rel="noreferrer">
        <StyledSocial className="twitter" />
      </a>
    </StyledSocials>
  );
};

export default Socials;
