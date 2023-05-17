import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { IProject } from '../../../commonInterfaces/IProject';
import { IFormProject } from './IFromProject';
import * as Yup from 'yup';
import Button from '../../Elements/Button/Button';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';

const FormProject: FC<IFormProject> = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          description: '',
          review: '',
          images: [],
          price: 0,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Укажите название проекта'),
          description: Yup.string().required('Укажите описание проекта'),
          review: Yup.string(),
          images: Yup.string(),
          price: Yup.number(),
        })}
        onSubmit={async (
          values: any,
          { setSubmitting }: FormikHelpers<any>,
        ) => {
          setSubmitting(false);
        }}
      >
        <Form>
          <StyledLabel htmlFor="name">Название</StyledLabel>
          <StyledField id="name" type="text" name="name" />
          <ErrorMessage name="name">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          <StyledLabel htmlFor="description">Описание</StyledLabel>
          <StyledField id="description" type="text" name="description" />
          <ErrorMessage name="description">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          <StyledLabel htmlFor="review">Отзыв</StyledLabel>
          <StyledField id="review" type="text" name="review" />
          <ErrorMessage name="review">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          <StyledLabel htmlFor="images">Фото</StyledLabel>
          <StyledField id="images" type="text" name="images" />
          <ErrorMessage name="images">
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

export default FormProject;
