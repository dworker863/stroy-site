import Link from 'next/link';
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
      <StyledNavItem>
        <Link href="/">
          <Logo />
        </Link>
      </StyledNavItem>
      <StyledNav>
        <StyledMenu>
          <StyledNavItem>
            <Link href="about">О нас</Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link href="projects">Работы</Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link href="calculator">Калькулятор</Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link href="contacts">Контакты</Link>
          </StyledNavItem>
        </StyledMenu>
      </StyledNav>
    </StyledTopLine>
  );
};

export default TopLine;
