import { createContext, useContext, useState } from 'react';
import Button from '../../components/Elements/Button/Button';
import { GetServerSideProps, NextPage } from 'next';
import { TCalculatorContext, TCalculatorPageProps } from './TCalculatorPage';
import Services from '../../components/Sections/Services/Services';
import Cart from '../../components/Blocks/Cart/Cart';
import Container from '../../components/Blocks/Container/Container';
import { IService } from '../../commonTypesInterfaces/IService';
import { StyledTitle } from '../../commonStyles/StyledTitle';
import { StyledPage } from '../../commonStyles/StyledPage';
import { StyledCalculatorDesc } from './StyledCalculatorPage';
import { AppContext } from '../../components/Sections/Layout/Layout';
import { StyledErrorMessage } from '../../commonStyles/StyledErrorMessage';

export const CalculatorContext = createContext<TCalculatorContext>({
  serviceButtonHandler: () => {},
});

const CalculatorPage: NextPage<TCalculatorPageProps> = ({ services }) => {
  const { auth } = useContext(AppContext);

  const [showServices, setShowServices] = useState(false);
  const [cartServices, setCartServices] = useState<IService[]>([]);
  const [err, setErr] = useState('');

  const serviceButtonHandler = (service: IService) => {
    const checkService = cartServices.some(
      (cartService) => cartService.name === service.name,
    );

    if (checkService) {
      setErr('Данная услуга уже добавлена');
      return;
    }

    if (!checkService && err) {
      setErr('');
    }

    if (showServices && !auth) {
      setCartServices([...cartServices, service]);
    }
  };

  const showServicesButtonHandler = () => {
    setShowServices(!showServices);
  };

  const clearCartHandler = () => {
    setCartServices([]);
    setErr('');
  };

  return (
    <CalculatorContext.Provider value={{ serviceButtonHandler }}>
      <StyledPage>
        <Container column>
          <StyledTitle>Калькулятор</StyledTitle>
          <StyledCalculatorDesc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            non modi, molestias soluta perspiciatis sequi distinctio, nemo earum
            qui ut maxime voluptatibus voluptates. Sint aliquam excepturi alias,
            optio iure possimus. Nisi omnis quis asperiores quae dolorum
            assumenda nemo rem, quam dignissimos optio, dolorem expedita unde
            saepe laborum. Doloribus quas obcaecati magnam, rem unde error quis
            vero hic, nam itaque distinctio. Culpa, in unde saepe, perferendis
            dolor officia repellendus eligendi voluptatibus, maxime fuga cumque
            quibusdam mollitia assumenda! Enim minima dolore, repellat quasi
            tempore labore, accusantium dolores optio assumenda corrupti
            laudantium omnis. Odit labore recusandae molestias nulla
            consequuntur iste ullam repudiandae. Sequi expedita ipsum atque
            molestias repudiandae facere quidem voluptates commodi voluptatum
            vitae eum recusandae, eveniet officia harum esse ea nesciunt ex?
          </StyledCalculatorDesc>
          <Button
            type="button"
            text={auth ? 'Добавить Услугу' : 'Выбрать Услугу'}
            clickHandler={showServicesButtonHandler}
            center
          />
          {showServices && <Services auth={auth} services={services} />}
          {err && <StyledErrorMessage>{err}</StyledErrorMessage>}
          {!auth && (
            <Cart
              cartServices={cartServices}
              clearCartHandler={clearCartHandler}
            />
          )}
        </Container>
      </StyledPage>
    </CalculatorContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch('http://192.168.1.3:8000/services');

  const services = await res.json();

  return {
    props: {
      services,
    },
  };
};

export default CalculatorPage;
