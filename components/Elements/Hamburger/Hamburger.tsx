import { FC } from 'react';
import { THamburgerProps } from './THamburger';
import { StyledHamburger, StyledHamburgerWrapper } from './StyledHamburger';

const Hamburger: FC<THamburgerProps> = ({ isActive, onClick }) => {
  return (
    <StyledHamburgerWrapper onClick={onClick}>
      <StyledHamburger active={isActive} />
    </StyledHamburgerWrapper>
  );
};

export default Hamburger;
