import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { TFormAuthProps } from './TFormAuth';
import { FC, useState } from 'react';
import * as Yup from 'yup';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import Button from '../../Elements/Button/Button';
import { login } from '../../../api/api';
import { IUser } from '../../../commonTypesInterfaces/IUser';
import { StyledModalForm } from '../../../commonStyles/StyledModalForm';

const FormAuth: FC<TFormAuthProps> = ({ submitHandler, registrBtnHandler }) => {
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
      <StyledModalForm>
        <div>
          <StyledLabel htmlFor="username">Имя пользователя</StyledLabel>
          <StyledField id="username" type="text" name="username" />
          <ErrorMessage name="username">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </div>

        <div>
          <StyledLabel htmlFor="password">Пароль</StyledLabel>
          <StyledField id="password" type="password" name="password" />
          <ErrorMessage name="password">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </div>

        <Button type="submit" text="Войти" center />
        <Button
          type="button"
          text="Зарегистрироваться"
          onClick={registrBtnHandler}
          center
        />
        <StyledErrorMessage>{err}</StyledErrorMessage>
      </StyledModalForm>
    </Formik>
  );
};

export default FormAuth;
