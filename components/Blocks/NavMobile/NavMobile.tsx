import Link from 'next/link';
import { FC } from 'react';
import Socials from '../../Elements/Socials/Socials';
import { TNavMobileProps } from './TNavMobile';
import {
  StyledMobileMenu,
  StyledNavMobile,
  StyledNavMobileItem,
} from './StyledNavMobile';

const NavMobile: FC<TNavMobileProps> = ({ active, navClickHandler }) => {
  return (
    <StyledNavMobile active={active} onClick={navClickHandler}>
      <StyledMobileMenu>
        <StyledNavMobileItem>
          <Link href="/projects" scroll={false}>
            Проекты
          </Link>
        </StyledNavMobileItem>
        <StyledNavMobileItem>
          <Link href="/video" scroll={false}>
            Видео
          </Link>
        </StyledNavMobileItem>
        <StyledNavMobileItem>
          <Link href="/calculator" scroll={false}>
            Калькулятор
          </Link>
        </StyledNavMobileItem>
        <StyledNavMobileItem>
          <Link href="/contacts" scroll={false}>
            Контакты
          </Link>
        </StyledNavMobileItem>
        <Socials />
      </StyledMobileMenu>
    </StyledNavMobile>
  );
};

export default NavMobile;
