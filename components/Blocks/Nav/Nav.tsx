import Link from 'next/link';
import { FC } from 'react';
import { TDirection } from '../../../commonTypesInterfaces/TDirection';
import Socials from '../../Elements/Socials/Socials';
import { StyledMenu, StyledNav, StyledNavItem } from './StyledNav';

const Nav: FC<TDirection> = ({ column }) => {
  return (
    <StyledNav column={column}>
      <StyledMenu>
        <StyledNavItem>
          <Link href="/projects" scroll={false}>
            Проекты
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/video" scroll={false}>
            Видео
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
