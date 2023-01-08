import Link from 'next/link';
import React, { FC } from 'react';
import Hamburger from '../../Elements/Hamburger/Hamburger';
import Logo from '../../Elements/Logo/Logo';
import Container from '../Container/Container';
import Nav from '../Nav/Nav';
import { ITopLine } from './ITopLine';
import { StyledTopLine } from './StyledTopLine';

const TopLine: FC<ITopLine> = ({ hamburgerActive, hamburgerHandler }) => {
  return (
    <StyledTopLine>
      <Hamburger isActive={hamburgerActive} onClick={hamburgerHandler} />
      <Container>
        <Link href="/">
          <Logo />
        </Link>
        <Nav />
      </Container>
    </StyledTopLine>
  );
};

export default TopLine;
