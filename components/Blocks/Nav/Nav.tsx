import Link from 'next/link';
import React, { FC } from 'react';
import Socials from '../../Elements/Socials/Socials';
import { INav } from './INav';
import { StyledMenu, StyledNav, StyledNavItem } from './StyledNav';

const Nav: FC<INav> = ({ column }) => {
  return (
    <StyledNav column={column}>
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
        <Socials />
      </StyledMenu>
    </StyledNav>
  );
};

export default Nav;
