import React, { useState } from 'react';
import Button from '../../components/Elements/Button/Button';
import { StyledCalculator, StyledServicesWrapper } from './StyledCalculator';
import cookie from 'cookie';
import { GetServerSideProps, NextPage } from 'next';
import { ICalculator } from './ICalculator';
import Services from '../../components/Blocks/Services/Services';
import Cart from '../../components/Blocks/Cart/Cart';
import Container from '../../components/Blocks/Container/Container';
import Search from '../../components/Blocks/Search/Search';

const Calculator: NextPage<ICalculator> = ({ auth, services }) => {
  const [showServices, setShowServices] = useState(false);

  const serviceButtonHandler = () => {
    setShowServices(!showServices);
  };

  return (
    <StyledCalculator>
      <Container>
        <StyledServicesWrapper>
          <Button
            type="button"
            text={auth ? 'Добавить Услугу' : 'Выбрать Услугу'}
            onClick={serviceButtonHandler}
          />
          {showServices && <Services auth={auth} services={services} />}
          <Cart />
        </StyledServicesWrapper>
      </Container>
    </StyledCalculator>
  );
};

export default Calculator;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = cookie.parse(ctx.req.headers.cookie || '');
  const auth = !!cookies.token;

  const res = await fetch('http://192.168.1.2:8000/services');

  const services = await res.json();
  console.log(services);

  return {
    props: {
      auth,
      services,
    },
  };
};
