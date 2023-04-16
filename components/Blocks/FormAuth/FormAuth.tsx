import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import { IFormAuth, IFormAuthValues } from './IFormAuth';
import React, { FC } from 'react';
import * as Yup from 'yup';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import Button from '../../Elements/Button/Button';
import { login } from '../../../api/api';
import { useRouter } from 'next/router';

const FormAuth: FC<IFormAuth> = ({ closeButtonHandler, loginHandler }) => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string().required('Введите номер телефона'),
        password: Yup.string().required('Введите номер пароль'),
      })}
      onSubmit={async (
        values: IFormAuthValues,
        { setSubmitting }: FormikHelpers<IFormAuthValues>,
      ) => {
        const user = await login(values);
        console.log(user);

        setSubmitting(false);
        loginHandler();
        closeButtonHandler();
        router.push('/', undefined, { scroll: false });
      }}
    >
      <Form>
        <StyledLabel htmlFor="username">Имя пользователя</StyledLabel>
        <StyledField id="username" type="text" name="username" />
        <ErrorMessage name="username">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>

        <StyledLabel htmlFor="password">Пароль</StyledLabel>
        <StyledField id="password" type="password" name="password" />
        <ErrorMessage name="password">
          {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        </ErrorMessage>

        <Button type="submit" text="Войти" center={true} />
      </Form>
    </Formik>
  );
};

export default FormAuth;
