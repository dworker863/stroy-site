import Link from 'next/link';
import React, { FC } from 'react';
import Hamburger from '../../Elements/Hamburger/Hamburger';
import Logo from '../../Elements/Logo/Logo';
import Nav from '../Nav/Nav';
import { StyledTopLine } from './StyledTopLine';

const TopLine: FC = () => {
  return (
    <StyledTopLine>
      <Link href="/">
        <Logo />
      </Link>
      <Nav />
    </StyledTopLine>
  );
};

export default TopLine;
