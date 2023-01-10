import Link from 'next/link';
import React, { FC } from 'react';
import {
  StyledFontAwesome,
  StyledMenu,
  StyledNav,
  StyledNavItem,
  StyledSocials,
} from './StyledNav';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

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
            <StyledFontAwesome
              icon={faWhatsapp}
              size="xl"
              className="whatsapp"
            />
          </a>
          <a href="#">
            <StyledFontAwesome icon={faVk} size="xl" className="vk" />
          </a>
          <a href="#">
            <StyledFontAwesome
              icon={faFacebook}
              size="xl"
              className="facebook"
            />
          </a>
          <a href="#">
            <StyledFontAwesome icon={faTwitter} size="xl" className="twitter" />
          </a>
          <a href="#">
            <StyledFontAwesome icon={faInstagram} size="xl" className="insta" />
          </a>
        </StyledSocials>
      </StyledMenu>
    </StyledNav>
  );
};

export default Nav;
