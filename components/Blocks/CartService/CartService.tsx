import React, { FC } from 'react';
import { ICartService } from './ICartService';
import { StyledCartService } from './StyledCartService';

const CartService: FC<ICartService> = ({ service }) => {
  return <StyledCartService>{service.name}</StyledCartService>;
};

export default CartService;
