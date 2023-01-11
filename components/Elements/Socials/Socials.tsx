import React, { FC } from 'react';
import { StyledSocial, StyledSocials } from './StyledSocials';

const Socials: FC = () => {
  return (
    <StyledSocials>
      <a href="https://wa.me/77776196190">
        <StyledSocial className="whatsapp" />
      </a>
      <a href="https://t.me/">
        <StyledSocial className="telegram" />
      </a>
      <a href="vk.com">
        <StyledSocial className="vk" />
      </a>
      <a href="instagram.com">
        <StyledSocial className="instagram" />
      </a>
      <a href="facebook.com">
        <StyledSocial className="facebook" />
      </a>
      <a href="twitter.com">
        <StyledSocial className="twitter" />
      </a>
    </StyledSocials>
  );
};

export default Socials;
