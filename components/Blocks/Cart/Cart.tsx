import { FC, useEffect, useState } from 'react';
import { StyledTitle } from '../../../commonStyles/StyledTitle';
import Button from '../../Elements/Button/Button';
import CartService from '../CartService/CartService';
import { TCartProps } from './TCart';
import {
  StyledCart,
  StyledCartPrice,
  StyledCartServicesWrapper,
  StyledCartTitle,
} from './StyledCart';

const Cart: FC<TCartProps> = ({ cartServices, clearCartHandler }) => {
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
      <StyledCartTitle>Корзина</StyledCartTitle>
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
        clickHandler={sumButtonHandler}
        inline
      />
      {cartServices.length > 0 && (
        <Button
          type="button"
          text="Очистить корзину"
          clickHandler={() => {
            setCartSum(0);
            clearCartHandler();
          }}
          inline
        />
      )}
    </StyledCart>
  );
};

export default Cart;
