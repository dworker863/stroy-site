import React, { FC } from 'react';
import { StyledHamburger, StyledHamburgerWrapper } from './StyledHamburger';

const Hamburger: FC = () => {
  return (
    <StyledHamburgerWrapper>
      <StyledHamburger />
    </StyledHamburgerWrapper>
  );
};

export default Hamburger;
