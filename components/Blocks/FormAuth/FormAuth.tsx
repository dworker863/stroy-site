import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import { TFormAuthProps } from './TFormAuth';
import { FC, useState } from 'react';
import * as Yup from 'yup';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import Button from '../../Elements/Button/Button';
import { login } from '../../../api/api';
import { useRouter } from 'next/router';
import { IUser } from '../../../commonTypesInterfaces/IUser';

const FormAuth: FC<TFormAuthProps> = ({ submitHandler, registrBtnHandler }) => {
  const router = useRouter();
  const [err, setErr] = useState('');

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validateOnChange={false}
      validationSchema={Yup.object({
        username: Yup.string().required('Введите имя пользователя'),
        password: Yup.string().required('Введите номер пароль'),
      })}
      onSubmit={async (
        values: IUser,
        { setSubmitting }: FormikHelpers<IUser>,
      ) => {
        const user = await login(values);

        if (typeof user !== 'string') {
          submitHandler();
        } else {
          setErr(user);
        }

        setSubmitting(false);
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
        <StyledErrorMessage>{err}</StyledErrorMessage>

        <Button type="submit" text="Войти" center />
        <Button
          type="button"
          text="Зарегистрироваться"
          onClick={registrBtnHandler}
          center
        />
      </Form>
    </Formik>
  );
};

export default FormAuth;
