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
          <Link href="/projects" scroll={false}>
            Работы
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/calculator" scroll={false}>
            Калькулятор
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/contacts" scroll={false}>
            Контакты
          </Link>
        </StyledNavItem>
        <Socials />
      </StyledMenu>
    </StyledNav>
  );
};

export default Nav;
