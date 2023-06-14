import { FC, useState } from 'react';
import Container from '../../Blocks/Container/Container';
import NavMobile from '../../Blocks/NavMobile/NavMobile';
import TopLine from '../../Blocks/TopLine/TopLine';
import {
  StyledHeader,
  StyledHeaderDesc,
  StyledHeaderInfo,
  StyledHeaderTitle,
} from './StyledHeader';

const Header: FC = () => {
  const [active, setActive] = useState(false);

  const setItemActiveHandler = () => {
    setActive(!active);
  };

  return (
    <StyledHeader>
      <TopLine
        hamburgerActive={active}
        hamburgerHandler={setItemActiveHandler}
      />
      <NavMobile active={active} navClickHandler={setItemActiveHandler} />
      <Container>
        <StyledHeaderInfo>
          <StyledHeaderTitle>Lorem ipsum dolor sit amet.</StyledHeaderTitle>
          <StyledHeaderDesc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            odit, earum suscipit dolor doloribus necessitatibus aliquid illum.
            Vitae eius aut ullam repudiandae, possimus blanditiis perferendis
            corporis aspernatur saepe quis voluptatum. Iusto consequatur illo
            laudantium labore nam veritatis doloremque repellat quisquam sint
            maiores est hic et quas vero facilis illum nobis quasi distinctio,
            eum neque accusamus minima voluptatem! Architecto, quibusdam in!
            Temporibus laudantium numquam hic corporis pariatur molestias alias,
            possimus repellat, iusto officiis voluptates cupiditate! Quia, iure
            earum, aliquam, alias ad fugit mollitia quod atque porro doloremque
            molestiae assumenda maiores. Amet.
          </StyledHeaderDesc>
        </StyledHeaderInfo>
      </Container>
    </StyledHeader>
  );
};

export default Header;
