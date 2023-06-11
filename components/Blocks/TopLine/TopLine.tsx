import Link from 'next/link';
import React, { FC, useContext } from 'react';
import Button from '../../Elements/Button/Button';
import Hamburger from '../../Elements/Hamburger/Hamburger';
import Logo from '../../Elements/Logo/Logo';
import { AppContext } from '../../Sections/Layout/Layout';
import Container from '../Container/Container';
import Nav from '../Nav/Nav';
import { ITopLine } from './ITopLine';
import { StyledTopLine } from './StyledTopLine';

const TopLine: FC<ITopLine> = ({ hamburgerActive, hamburgerHandler }) => {
  const { auth, loginHandler, logoutHandler } = useContext(AppContext);

  return (
    <StyledTopLine>
      <Hamburger isActive={hamburgerActive} onClick={hamburgerHandler} />
      <Container>
        <Link href="/">
          <Logo />
        </Link>
        <Button
          type="button"
          text={!auth ? '' : 'Выйти'}
          auth={auth}
          onClick={auth ? logoutHandler : loginHandler}
        />
        <Nav />
      </Container>
    </StyledTopLine>
  );
};

export default TopLine;
