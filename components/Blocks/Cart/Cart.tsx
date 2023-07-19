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
import { TOrder } from '../../../commonTypesInterfaces/TOrder';

const Cart: FC<TCartProps> = ({ cartServices, clearCartHandler }) => {
  const cartServicesWithSum = cartServices.map((cartService) => ({
    service: cartService.name,
    sum: 0,
  }));

  const [cart, setCart] = useState(cartServicesWithSum);
  const [cartSum, setCartSum] = useState(0);
  const [showForm, setShowForm] = useState(false);

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

  const sendMailHandler = () => {
    setShowForm(!showForm);
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
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Некорректный email')
            .required('Укажите адрес электронной почты'),
        })}
        onSubmit={async (
          values: { email: string },
          { setSubmitting }: FormikHelpers<{ email: string }>,
        ) => {
          sumButtonHandler();
          postOrder({ cart, cartSum, email: values.email });
          console.log({ cart, cartSum, email: values.email });

          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <>
            {showForm && (
              <Form>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledField id="email" type="text" name="email" />
                <ErrorMessage name="email">
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
