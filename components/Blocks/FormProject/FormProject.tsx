import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import React, { FC, useState } from 'react';
import { IFormProject } from './IFromProject';
import * as Yup from 'yup';
import Button from '../../Elements/Button/Button';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import {
  StyledDropZone,
  StyledFormRating,
  StyledFormReview,
  StyledPlus,
} from './StyledFormProject';
import StarRatings from 'react-star-ratings';
import MaskedInput from 'react-text-mask';
import Dropzone from 'react-dropzone';
import Photo from '../../Elements/Photo/Photo';
import { postProject } from '../../../api/api';
import { useRouter } from 'next/router';

const FormProject: FC<IFormProject> = ({ project }) => {
  const [rating, setRating] = useState(5);
  const [showReview, setShowReview] = useState(false);
  const [dropImages, setDropImages] = useState<any>([]);
  const router = useRouter();

  const now = new Date().toLocaleString('kz-KZ', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  const mask = [
    /[0-9]/,
    /[0-9]/,
    '.',
    /[0-9]/,
    /[0-9]/,
    '.',
    /[1-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
  ];

  const changeRatingHandler = (newRating: number) => {
    setRating(newRating);
  };

  const toggleReviewHandler = () => {
    setShowReview(!showReview);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: project?.name || '',
          description: project?.description || '',
          toggleReview: project?.projectReview ? true : showReview,
          review: showReview
            ? {
                author: project?.projectReview?.author || '',
                stars: project?.projectReview?.stars || 5,
                text: project?.projectReview?.text || '',
                date: project?.projectReview?.date || now,
              }
            : null,
          images: project?.images || dropImages,
          price: project?.price || 0,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Укажите название проекта'),
          description: Yup.string(),
          // .required('Укажите описание проекта'),
          toggleReview: Yup.boolean(),
          review: Yup.object()
            .shape({
              author: Yup.string().when('toggleReview', (toogleReview) => {
                return toogleReview
                  ? Yup.string().required('Укажите автора')
                  : Yup.string();
              }),
              stars: Yup.string().when('toggleReview', (toogleReview) => {
                return toogleReview
                  ? Yup.number().required('Укажите рейтинг')
                  : Yup.number();
              }),
              text: Yup.string(),
              date: Yup.string(),
            })
            .nullable(),
          images: Yup.array(),
          price: Yup.number(),
        })}
        onSubmit={async (
          values: any,
          { setSubmitting }: FormikHelpers<any>,
        ) => {
          const { toggleReview, ...projectToPost } = values;
          const data = await postProject(projectToPost);

          router.push('./projects');
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, values, handleChange }) => (
          <Form>
            <StyledLabel htmlFor="name">Название</StyledLabel>
            <StyledField id="name" type="text" name="name" />
            <ErrorMessage name="name">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
            <StyledLabel htmlFor="description">Описание</StyledLabel>
            <StyledField
              id="description"
              name="description"
              as="textarea"
              rows={6}
              onChange={handleChange}
              value={values.description}
            />
            <ErrorMessage name="description">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
            <Button
              type="button"
              text="Добавить Отзыв"
              onClick={() => {
                showReview
                  ? (values.review = null)
                  : (values.review = {
                      author: project?.projectReview?.author || '',
                      stars: project?.projectReview?.stars || 5,
                      text: project?.projectReview?.text || '',
                      date: project?.projectReview?.date || now,
                    });
                toggleReviewHandler();
              }}
            />
            {showReview && (
              <StyledFormReview show={showReview}>
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
                <StyledField
                  id="text"
                  as="textarea"
                  name="review.text"
                  rows={6}
                  onChange={handleChange}
                  value={values.review?.text}
                />
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
            )}
            <StyledLabel htmlFor="images">Фото</StyledLabel>
            <Dropzone
              onDrop={(acceptedFiles) => {
                setDropImages([...dropImages, ...acceptedFiles]);
                setFieldValue('images', [...dropImages, ...acceptedFiles]);
              }}
            >
              {({ getRootProps, getInputProps, acceptedFiles }) => (
                <StyledDropZone {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Загрузите или перетащите фото</p>
                  <StyledPlus>+</StyledPlus>
                </StyledDropZone>
              )}
            </Dropzone>
            <Photo photos={dropImages} />
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
