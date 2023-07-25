import { FC, useEffect, useState } from 'react';
import Button from '../../Elements/Button/Button';
import CartService from '../CartService/CartService';
import { TCartProps } from './TCart';
import {
  StyledCart,
  StyledCartPrice,
  StyledCartServicesWrapper,
  StyledCartTitle,
} from './StyledCart';
import { postOrder } from '../../../api/api';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import MaskedInput from 'react-text-mask';

const Cart: FC<TCartProps> = ({ cartServices, clearCartHandler }) => {
  const cartServicesWithSum = cartServices.map((cartService) => ({
    service: cartService.name,
    sum: 0,
  }));

  const [cart, setCart] = useState(cartServicesWithSum);
  const [cartSum, setCartSum] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    console.log(window);

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

  const sendMailHandler = () => {
    setShowForm(!showForm);
  };

  const mask = [
    '+',
    '7',
    ' ',
    '(',
    /\d/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
  ];

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
      <Formik
        initialValues={{
          phoneNumber: '',
        }}
        validationSchema={Yup.object({
          phoneNumber: Yup.string().required('Укажите номер телефона'),
        })}
        onSubmit={async (
          values: { phoneNumber: string },
          { setSubmitting }: FormikHelpers<{ phoneNumber: string }>,
        ) => {
          sumButtonHandler();
          postOrder({ cart, cartSum, phoneNumber: values.phoneNumber });
          console.log({ cart, cartSum, phoneNumber: values.phoneNumber });

          setSubmitting(false);
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <>
            {showForm && (
              <Form>
                <StyledLabel htmlFor="phoneNumber">Номер телефона</StyledLabel>
                <StyledField
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  as={MaskedInput}
                  mask={mask}
                  guide={true}
                  placeholder="+7 (777) 777 77 77"
                  placeholderChar={'\u2000'}
                  onChange={handleChange}
                />
                <ErrorMessage name="phoneNumber">
                  {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
                </ErrorMessage>
              </Form>
            )}
            <Button
              type="button"
              text="Рассчитать"
              clickHandler={sumButtonHandler}
              inline
            />
            <Button
              type={showForm ? 'submit' : 'button'}
              text="Отправить Заявку"
              clickHandler={!showForm ? sendMailHandler : handleSubmit}
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
          </>
        )}
      </Formik>
    </StyledCart>
  );
};

export default Cart;
