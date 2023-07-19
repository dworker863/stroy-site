import Link from 'next/link';
import { FC, useContext } from 'react';
import Button from '../../Elements/Button/Button';
import Hamburger from '../../Elements/Hamburger/Hamburger';
import Logo from '../../Elements/Logo/Logo';
import { AppContext } from '../../Sections/Layout/Layout';
import Container from '../Container/Container';
import Nav from '../Nav/Nav';
import { TTopLineProps } from './TTopLine';
import { StyledTopLine } from './StyledTopLine';
import { StyledFlexWrapper } from '../../../commonStyles/StyledFlexWrapper';

const TopLine: FC<TTopLineProps> = ({ hamburgerActive, hamburgerHandler }) => {
  const { auth, setModalActive, logoutHandler } = useContext(AppContext);

  return (
    <StyledTopLine>
      <Hamburger isActive={hamburgerActive} clickHandler={hamburgerHandler} />
      <Container>
        <StyledFlexWrapper>
          <Link href="/">
            <Logo />
          </Link>
          <Button
            type="button"
            text={!auth ? '' : 'Выйти'}
            auth={auth}
            clickHandler={
              auth ? logoutHandler : setModalActive.bind(null, true)
            }
          />
        </StyledFlexWrapper>
        <Nav />
      </Container>
    </StyledTopLine>
  );
};

export default TopLine;
