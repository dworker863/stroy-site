import React, { FC, useState } from 'react';
import { StyledHamburger, StyledHamburgerWrapper } from './StyledHamburger';

const Hamburger: FC = () => {
  const [active, setActive] = useState(false);

  const setHamburgerHandler = () => {
    setActive(!active);
  };

  return (
    <StyledHamburgerWrapper onClick={setHamburgerHandler}>
      <StyledHamburger isActive={active} />
    </StyledHamburgerWrapper>
  );
};

export default Hamburger;
