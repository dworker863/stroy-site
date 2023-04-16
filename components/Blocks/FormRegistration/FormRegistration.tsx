import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import React, { FC } from 'react';
import {
  IFormRegistration,
  IFormRegistrationValues,
} from './IFormRegistration';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import Button from '../../Elements/Button/Button';
import { registration } from '../../../api/api';

const FormRegistration: FC<IFormRegistration> = ({ loginHandler }) => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string().required('Введите имя пользователя'),
        password: Yup.string().required('Введите пароль'),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password')], 'Пароли не совпадают')
          .required('Подтвердите пароль'),
      })}
      onSubmit={async (
        values: IFormRegistrationValues,
        { setSubmitting }: FormikHelpers<any>,
      ) => {
        const { username, password } = values;
        const user = await registration({ username, password });
        loginHandler();

        setSubmitting(false);
      }}
    >
      <Form>
        <StyledLabel htmlFor="username">Имя пользователя *</StyledLabel>
        <StyledField id="username" type="text" name="username" />
        <ErrorMessage name="username">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>

        <StyledLabel htmlFor="password">Пароль *</StyledLabel>
        <StyledField id="password" type="password" name="password" />
        <ErrorMessage name="password">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>

        <StyledLabel htmlFor="passwordConfirm">
          Подтвердите пароль *
        </StyledLabel>
        <StyledField
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
        />
        <ErrorMessage name="passwordConfirm">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>

        <Button type="submit" text="Зарегистрироваться" center />
        <Button type="button" text="Назад" onClick={loginHandler} center />
      </Form>
    </Formik>
  );
};

export default FormRegistration;
