import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import Button from '../../Elements/Button/Button';
import * as Yup from 'yup';
import { IService } from '../../../commonInterfaces/IService';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import { postService } from '../../../api/api';

const FormService: FC = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          measure: 'м2',
          price: 0,
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
          const service = await postService(values);

          console.log(service);

          setSubmitting(false);
        }}
      >
        <Form>
          <StyledLabel htmlFor="name">Название</StyledLabel>
          <StyledField id="name" type="text" name="name" />
          <ErrorMessage name="name">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>

          <StyledLabel htmlFor="measure">Единица измерения</StyledLabel>
          <StyledField id="measure" type="text" name="measure" />
          <ErrorMessage name="measure">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>

          <StyledLabel htmlFor="price">Цена</StyledLabel>
          <StyledField id="price" type="text" name="price" />
          <ErrorMessage name="price">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>

          <Button type="submit" text="Добавить" />
        </Form>
      </Formik>
    </>
  );
};

export default FormService;
