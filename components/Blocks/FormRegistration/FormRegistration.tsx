import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FC, MouseEventHandler, useState } from 'react';
import {
  TFormRegistrationProps,
  TFormRegistrationValues,
} from './TFormRegistration';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import Button from '../../Elements/Button/Button';
import { registration } from '../../../api/api';
import { StyledRedSpan } from '../../../commonStyles/StyledRedSpan';
import { StyledModalForm } from '../../../commonStyles/StyledModalForm';
import { StyledFlexWrapper } from '../../../commonStyles/StyledFlexWrapper';
import { StyledEye } from '../../../commonStyles/StyledEye';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const FormRegistration: FC<TFormRegistrationProps> = ({
  loginBtnHandler,
  submitHandler,
}) => {
  const [err, setErr] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const showPasswordHandler: MouseEventHandler<SVGSVGElement> = (e) => {
    console.log(e.target);

    if (e.type === 'mousedown') {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const showConfirmPasswordHandler: MouseEventHandler<SVGSVGElement> = (e) => {
    console.log(e.target);

    if (e.type === 'mousedown') {
      setShowConfirmPassword(true);
    } else {
      setShowConfirmPassword(false);
    }
  };

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
        values: TFormRegistrationValues,
        { setSubmitting }: FormikHelpers<any>,
      ) => {
        const { username, password } = values;
        const user = await registration({ username, password });

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
          <StyledLabel htmlFor="username">
            Имя пользователя <StyledRedSpan>*</StyledRedSpan>
          </StyledLabel>
          <StyledField id="username" type="text" name="username" />
          <ErrorMessage name="username">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </div>

        <div>
          <StyledLabel htmlFor="password">
            Пароль <StyledRedSpan>*</StyledRedSpan>
          </StyledLabel>
          <StyledFlexWrapper>
            <StyledField
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
            />
            <StyledEye
              icon={faEye}
              onMouseUp={showPasswordHandler}
              onMouseDown={showPasswordHandler}
            />
          </StyledFlexWrapper>
          <ErrorMessage name="password">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </div>

        <div>
          <StyledLabel htmlFor="passwordConfirm">
            Подтвердите пароль <StyledRedSpan>*</StyledRedSpan>
          </StyledLabel>
          <StyledFlexWrapper>
            <StyledField
              id="passwordConfirm"
              type={showConfirmPassword ? 'text' : 'password'}
              name="passwordConfirm"
            />
            <StyledEye
              icon={faEye}
              onMouseUp={showConfirmPasswordHandler}
              onMouseDown={showConfirmPasswordHandler}
            />
          </StyledFlexWrapper>
          <ErrorMessage name="passwordConfirm">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </div>

        <Button type="submit" text="Зарегистрироваться" center />
        <Button
          type="button"
          text="Назад"
          clickHandler={loginBtnHandler}
          center
        />

        <StyledErrorMessage style={{ textAlign: 'center' }}>
          {err}
        </StyledErrorMessage>
      </StyledModalForm>
    </Formik>
  );
};

export default FormRegistration;
