import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { TFormAuthProps } from './TFormAuth';
import { FC, MouseEventHandler, useState } from 'react';
import * as Yup from 'yup';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import Button from '../../Elements/Button/Button';
import { login } from '../../../api/api';
import { IUser } from '../../../commonTypesInterfaces/IUser';
import { StyledModalForm } from '../../../commonStyles/StyledModalForm';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { StyledFlexWrapper } from '../../../commonStyles/StyledFlexWrapper';
import { StyledEye } from '../../../commonStyles/StyledEye';
import { StyledCheckbox } from '../../../commonStyles/StyledCheckbox';
import { StyledRemember } from './StyledFormAuth';

const FormAuth: FC<TFormAuthProps> = ({ submitHandler, registrBtnHandler }) => {
  const [err, setErr] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler: MouseEventHandler<SVGSVGElement> = (e) => {
    if (e.type === 'mousedown') {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        remember: false,
      }}
      validateOnChange={false}
      validationSchema={Yup.object({
        username: Yup.string().required('Введите имя пользователя'),
        password: Yup.string().required('Введите номер пароль'),
        remember: Yup.boolean(),
      })}
      onSubmit={async (
        values: IUser & { remember: boolean },
        { setSubmitting }: FormikHelpers<IUser & { remember: boolean }>,
      ) => {
        const user = await login(values);

        if (typeof user !== 'string') {
          submitHandler();
        } else {
          setErr(user);
        }

        if (remember) {
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

        <StyledRemember>
          <StyledCheckbox id="remember" type="checkbox" name="remember" />
          <StyledLabel htmlFor="remember" inline>
            Запомнить меня
          </StyledLabel>
        </StyledRemember>

        <Button type="submit" text="Войти" center />
        <Button
          type="button"
          text="Зарегистрироваться"
          clickHandler={registrBtnHandler}
          center
        />
        <StyledErrorMessage>{err}</StyledErrorMessage>
      </StyledModalForm>
    </Formik>
  );
};

export default FormAuth;
