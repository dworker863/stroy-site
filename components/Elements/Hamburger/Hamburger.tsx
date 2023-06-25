import { FC } from 'react';
import { THamburgerProps } from './THamburger';
import { StyledHamburger, StyledHamburgerWrapper } from './StyledHamburger';

const Hamburger: FC<THamburgerProps> = ({ isActive, clickHandler }) => {
  return (
    <StyledHamburgerWrapper onClick={clickHandler}>
      <StyledHamburger active={isActive} />
    </StyledHamburgerWrapper>
  );
};

export default Hamburger;
