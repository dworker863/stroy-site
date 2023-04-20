import React, { FC } from 'react';
import CartService from '../CartService/CartService';
import { ICart } from './ICart';
import { StyledCart } from './StyledCart';

const Cart: FC<ICart> = ({ cartServices }) => {
  return (
    <StyledCart>
      {cartServices.map((service) => (
        <CartService key={service.id + service.name} service={service} />
      ))}
    </StyledCart>
  );
};

export default Cart;
