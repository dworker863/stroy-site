import Link from 'next/link';
import React, { FC } from 'react';
import Hamburger from '../../Elements/Hamburger/Hamburger';
import Logo from '../../Elements/Logo/Logo';
import Nav from '../Nav/Nav';
import { ITopLine } from './ITopLine';
import { StyledTopLine } from './StyledTopLine';

const TopLine: FC<ITopLine> = ({ isActive, hamburgerClickHandler }) => {
  return (
    <StyledTopLine>
      <Link href="/">
        <Logo />
      </Link>
      <Nav />
      <Hamburger isActive={isActive} onClick={hamburgerClickHandler} />
    </StyledTopLine>
  );
};

export default TopLine;
