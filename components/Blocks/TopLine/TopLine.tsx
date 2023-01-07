import React, { FC } from 'react';
import Logo from '../../Elements/Logo/Logo';
import {
  StyledMenu,
  StyledNav,
  StyledNavItem,
  StyledTopLine,
} from './StyledTopLine';

const TopLine: FC = () => {
  return (
    <StyledTopLine>
      <Logo />
      <StyledNav>
        <StyledMenu>
          <StyledNavItem>О нас</StyledNavItem>
          <StyledNavItem>Работы</StyledNavItem>
          <StyledNavItem>Калькулятор</StyledNavItem>
          <StyledNavItem>Контакты</StyledNavItem>
        </StyledMenu>
      </StyledNav>
    </StyledTopLine>
  );
};

export default TopLine;
