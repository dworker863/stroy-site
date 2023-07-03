import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import { FC, useState } from 'react';
import Button from '../../Elements/Button/Button';
import * as Yup from 'yup';
import { IService } from '../../../commonTypesInterfaces/IService';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import { postService, updateService } from '../../../api/api';
import { TFormServiceProps } from './TFormService';
import { useRouter } from 'next/router';
import { StyledRedSpan } from '../../../commonStyles/StyledRedSpan';

const FormService: FC<TFormServiceProps> = ({
  id,
  name,
  measure,
  price,
  showServiceFormHandler,
}) => {
  const router = useRouter();
  const [err, setErr] = useState('');

  return (
    <>
      <Formik
        initialValues={{
          name: name || '',
          measure: measure || 'м' + '\u00b2',
          price: price || 0,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Укажите название услуги'),
          measure: Yup.string().required('Укажите единицу измерения услуги'),
          price: Yup.number().required('Укажите цену'),
        })}
        onSubmit={async (
          values: IService,
          { setSubmitting }: FormikHelpers<IService>,
        ) => {
          if (id) {
            const res = await updateService({ id, ...values });

            if (typeof res === 'string') {
              setErr(res);
            } else {
              showServiceFormHandler && showServiceFormHandler(false);
            }
          } else {
            const res = await postService(values);

            if (typeof res === 'string') {
              setErr(res);
            }
          }
          router.push(router.pathname, undefined, { scroll: false });
          setSubmitting(false);
        }}
      >
        <Form>
          <StyledLabel htmlFor="name">
            Название <StyledRedSpan>*</StyledRedSpan>
          </StyledLabel>
          <StyledField id="name" type="text" name="name" />
          <ErrorMessage name="name">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>

          <StyledLabel htmlFor="measure">
            Единица измерения <StyledRedSpan>*</StyledRedSpan>
          </StyledLabel>
          <StyledField id="measure" type="text" name="measure" />
          <ErrorMessage name="measure">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>

          <StyledLabel htmlFor="price">
            Цена <StyledRedSpan>*</StyledRedSpan>
          </StyledLabel>
          <StyledField id="price" type="text" name="price" />
          <ErrorMessage name="price">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          <Button type="submit" text={id ? 'Изменить' : 'Добавить'} inline />
          <Button type="reset" text="Отмена" inline />
          <StyledErrorMessage>{err}</StyledErrorMessage>
        </Form>
      </Formik>
    </>
  );
};

export default FormService;
