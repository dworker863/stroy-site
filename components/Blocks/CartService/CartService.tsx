import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { ICartService } from './ICartService';
import {
  StyledCartService,
  StyledCartServiceInfo,
  StyledCartServiceInfoTitle,
  StyledCartServiceInfoWrapper,
  StyledCartServiceTitle,
  StyledCartServiceTotalPrice,
} from './StyledCartService';

const CartService: FC<ICartService> = ({ service, cart, setCart }) => {
  const [area, setArea] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const areaChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setArea(Number(e.target.value));
    setTotalPrice(service.price * Number(e.target.value));

    const cartServices = cart.map((cartService) => {
      if (service.name === cartService.service) {
        return {
          service: cartService.service,
          sum: service.price * Number(e.target.value),
        };
      }

      return cartService;
    });

    setCart(cartServices);
  };

  return (
    <StyledCartService>
      <StyledCartServiceTitle>{service.name}</StyledCartServiceTitle>
      <StyledCartServiceInfoWrapper>
        <StyledCartServiceInfo>
          <StyledCartServiceInfoTitle>Цена:</StyledCartServiceInfoTitle>
          {`${service.price}/${service.measure}`}
        </StyledCartServiceInfo>
        <StyledCartServiceInfo>
          <StyledCartServiceInfoTitle>
            Укажите Площадь:
          </StyledCartServiceInfoTitle>

          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              areaChangeHandler(e)
            }
            value={area}
          />
        </StyledCartServiceInfo>
      </StyledCartServiceInfoWrapper>
      <StyledCartServiceTotalPrice>
        Сумма: {totalPrice}
      </StyledCartServiceTotalPrice>
    </StyledCartService>
  );
};

export default CartService;
