import React, { FC, useState } from 'react';
import { IHamburger } from './IHamburger';
import { StyledHamburger, StyledHamburgerWrapper } from './StyledHamburger';

const Hamburger: FC<IHamburger> = ({ isActive, onClick }) => {
  return (
    <StyledHamburgerWrapper onClick={onClick}>
      <StyledHamburger isActive={isActive} />
    </StyledHamburgerWrapper>
  );
};

export default Hamburger;
