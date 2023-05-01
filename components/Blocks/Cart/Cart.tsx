import React, { FC, useEffect, useState } from 'react';
import Button from '../../Elements/Button/Button';
import CartService from '../CartService/CartService';
import { ICart } from './ICart';
import { StyledCart } from './StyledCart';

const Cart: FC<ICart> = ({ cartServices }) => {
  const cartServicesWithSum = cartServices.map((cartService) => ({
    service: cartService.name,
    sum: 0,
  }));
  const [cart, setCart] = useState(cartServicesWithSum);
  const [cartSum, setCartSum] = useState(0);

  console.log(cart);

  useEffect(() => {
    const newCartService = cartServices.filter((cartService) => {
      return !cart.some(({ service }) => service === cartService.name);
    });
    const newCartServiceWithSum = newCartService.map((cartService) => ({
      service: cartService.name,
      sum: 0,
    }));
    setCart([...cart, ...newCartServiceWithSum]);
  }, [cartServices]);

  const sumButtonHandler = () => {
    setCartSum(cart.reduce((sum, service) => (sum += service.sum), 0));
  };

  return (
    <StyledCart>
      {cartServices.map((service) => (
        <CartService
          key={service.id + service.name}
          service={service}
          cart={cart}
          setCart={setCart}
        />
      ))}
      Общая стоимость: {cartSum}
      <Button type="button" text="Рассчитать" onClick={sumButtonHandler} />
    </StyledCart>
  );
};

export default Cart;
