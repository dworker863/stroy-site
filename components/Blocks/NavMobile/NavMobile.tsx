import Link from 'next/link';
import React, { FC } from 'react';
import Socials from '../../Elements/Socials/Socials';
import { INavMobile } from './INavMobile';
import {
  StyledMobileMenu,
  StyledNavMobile,
  StyledNavMobileItem,
} from './StyledNavMobile';

const NavMobile: FC<INavMobile> = ({ isActive, navClickHandler }) => {
  return (
    <StyledNavMobile isActive={isActive} onClick={navClickHandler}>
      <StyledMobileMenu>
        <StyledNavMobileItem>
          <Link href="/projects">Работы</Link>
        </StyledNavMobileItem>
        <StyledNavMobileItem>
          <Link href="/calculator">Калькулятор</Link>
        </StyledNavMobileItem>
        <StyledNavMobileItem>
          <Link href="/contacts">Контакты</Link>
        </StyledNavMobileItem>
        <Socials />
      </StyledMobileMenu>
    </StyledNavMobile>
  );
};

export default NavMobile;
