import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import {
  StyledMenu,
  StyledNav,
  StyledNavItem,
  StyledSocial,
  StyledSocials,
} from './StyledNav';

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
        <StyledSocials>
          <a href="#">
            <StyledSocial className="whatsapp" />
          </a>
          <a href="#">
            <StyledSocial className="telegram" />
          </a>
          <a href="#">
            <StyledSocial className="vk" />
          </a>
          <a href="#">
            <StyledSocial className="instagram" />
          </a>
          <a href="#">
            <StyledSocial className="facebook" />
          </a>
          <a href="#">
            <StyledSocial className="twitter" />
          </a>
        </StyledSocials>
      </StyledMenu>
    </StyledNav>
  );
};

export default Nav;
