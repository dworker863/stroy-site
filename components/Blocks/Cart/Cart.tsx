import { FC, useEffect, useState } from 'react';
import { StyledTitle } from '../../../commonStyles/StyledTitle';
import Button from '../../Elements/Button/Button';
import CartService from '../CartService/CartService';
import { TCartProps } from './TCart';
import {
  StyledCart,
  StyledCartPrice,
  StyledCartServicesWrapper,
} from './StyledCart';

const Cart: FC<TCartProps> = ({ cartServices }) => {
  const cartServicesWithSum = cartServices.map((cartService) => ({
    service: cartService.name,
    sum: 0,
  }));

  const [cart, setCart] = useState(cartServicesWithSum);
  const [cartSum, setCartSum] = useState(0);

  useEffect(() => {
    const newCartService = cartServices.filter((cartService) => {
      return !cart.some(({ service }) => service === cartService.name);
    });
    const newCartServiceWithSum = newCartService.map((cartService) => ({
      service: cartService.name,
      sum: 0,
    }));
    setCart([...cart, ...newCartServiceWithSum]);
  }, [cartServices, setCart]);

  const sumButtonHandler = () => {
    setCartSum(cart.reduce((sum, service) => (sum += service.sum), 0));
  };

  return (
    <StyledCart>
      <StyledTitle>Корзина</StyledTitle>
      <StyledCartServicesWrapper>
        {cartServices.map((service) => (
          <CartService
            key={service.id + service.name}
            service={service}
            cart={cart}
            changeCartHandler={setCart}
          />
        ))}
      </StyledCartServicesWrapper>
      <StyledCartPrice>Общая стоимость: {cartSum}</StyledCartPrice>
      <Button
        type="button"
        text="Рассчитать"
        onClick={sumButtonHandler}
        center
      />
    </StyledCart>
  );
};

export default Cart;
