import { ErrorMessage, Form, Formik, FormikHelpers, useField } from 'formik';
import React, { FC, useState } from 'react';
import { IFormProject } from './IFromProject';
import * as Yup from 'yup';
import Button from '../../Elements/Button/Button';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import { StyledFormRating, StyledFormReview } from './StyledFormProject';
import StarRatings from 'react-star-ratings';
import MaskedInput from 'react-text-mask';

const FormProject: FC<IFormProject> = ({ project }) => {
  const [rating, setRating] = useState(5);
  const now = new Date().toLocaleString('kz-KZ', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  const mask = [
    /[1-9]/,
    /[1-9]/,
    '.',
    /[1-9]/,
    /[1-9]/,
    '.',
    /[1-9]/,
    /[1-9]/,
    /[1-9]/,
    /[1-9]/,
  ];

  const changeRatingHandler = (newRating: number) => {
    setRating(newRating);
    console.log(now);
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          name: project?.name || '',
          description: project?.description || '',
          review: {
            author: project?.projectReview.author || '',
            stars: project?.projectReview.stars || 5,
            text: project?.projectReview.text || '',
            date: project?.projectReview.date || '',
          },
          images: project?.images || [],
          price: project?.price || 0,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Укажите название проекта'),
          description: Yup.string().required('Укажите описание проекта'),
          // review: Yup.string(),
          images: Yup.string(),
          price: Yup.number(),
        })}
        onSubmit={async (
          values: any,
          { setSubmitting }: FormikHelpers<any>,
        ) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, values }) => (
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
            <StyledLabel htmlFor="author">Отзыв</StyledLabel>
            <StyledFormReview>
              <StyledLabel htmlFor="author">Автор</StyledLabel>
              <StyledField id="author" type="text" name="review.author" />
              <ErrorMessage name="review.author">
                {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
              </ErrorMessage>
              <StyledLabel>Рейтинг</StyledLabel>
              <StyledFormRating>
                <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  starHoverColor="gold"
                  numberOfStars={5}
                  starDimension="24px"
                  starSpacing="2px"
                  changeRating={(newRating) => {
                    setFieldValue('review.stars', newRating);
                    changeRatingHandler(newRating);
                  }}
                />
              </StyledFormRating>
              <StyledLabel htmlFor="text">Текст</StyledLabel>
              <StyledField id="text" type="text" name="review.text" />
              <ErrorMessage name="review.text">
                {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
              </ErrorMessage>
              <StyledLabel htmlFor="date">Дата</StyledLabel>
              <StyledField
                id="date"
                name="review.date"
                type="text"
                as={MaskedInput}
                mask={mask}
                guide={true}
                placeholder={now}
                placeholderChar={'\u2000'}
              />
              <ErrorMessage name="review.date">
                {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
              </ErrorMessage>
            </StyledFormReview>
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
        )}
      </Formik>
    </>
  );
};

export default FormProject;
