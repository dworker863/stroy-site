import Link from 'next/link';
import React, { FC } from 'react';
import { StyledMenu, StyledNav, StyledNavItem } from './StyledNav';

const Nav: FC = () => {
  return (
    <StyledNav>
      <StyledMenu>
        <StyledNavItem>
          <Link href="/about">О нас</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/projects">Работы</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/calculator">Калькулятор</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/contacts">Контакты</Link>
        </StyledNavItem>
      </StyledMenu>
    </StyledNav>
  );
};

export default Nav;
