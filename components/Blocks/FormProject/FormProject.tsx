import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import { Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import { TFormProjectProps } from './TFromProject';
import * as Yup from 'yup';
import Button from '../../Elements/Button/Button';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledField } from '../../../commonStyles/StyledField';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import { StyledFormRating, StyledFormReview } from './StyledFormProject';
import StarRatings from 'react-star-ratings';
import MaskedInput from 'react-text-mask';
import Dropzone from 'react-dropzone';
import Thumbnails from '../../Elements/Thumbnails/Thumbnails';
import { postProject, updateProject } from '../../../api/api';
import { useRouter } from 'next/router';
import { IProject } from '../../../commonTypesInterfaces/IProject';
import { ProjectsContext } from '../../../pages/projects';
import { StyledDropZone } from '../../../commonStyles/StyledDropzone';
import { StyledPlus } from '../../../commonStyles/StyledPlus';
import { StyledRedSpan } from '../../../commonStyles/StyledRedSpan';
import { AxiosProgressEvent } from 'axios';
import BarProgress from '../../Elements/BarProgress/BarProgress';

const FormProject: FC<TFormProjectProps> = ({
  project,
  updateProjectFormHandler,
}) => {
  const { showFormHandler } = useContext(ProjectsContext);
  const router = useRouter();

  const [err, setErr] = useState('');
  const [rating, setRating] = useState(5);
  const [showReview, setShowReview] = useState(false);
  const [dropImages, setDropImages] = useState<any>([]);
  const [progress, setProgress] = useState(0);

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

  const imageFormats = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/bmp',
    'image/tiff',
    'image/webp',
    'image/svg+xml',
    'image/heif',
  ];

  const changeRatingHandler = (newRating: number) => {
    setRating(newRating);
  };

  const toggleReviewHandler = () => {
    setShowReview(!showReview);
  };

  const handleUploadProgress = (
    progressEvent: AxiosProgressEvent,
    setProgress: Dispatch<SetStateAction<number>>,
  ) => {
    const progressPercentage =
      progressEvent?.total &&
      Math.round((progressEvent.loaded / progressEvent?.total) * 100);
    setProgress(progressPercentage as number);
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
          images: dropImages,
          price: project?.price || 0,
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={Yup.object({
          name: Yup.string().required('Укажите название проекта'),
          description: Yup.string(),
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
              text: Yup.string().required('Укажите текст отзыва'),
              date: Yup.string(),
            })
            .nullable(),
          images: Yup.array().test(
            'fileType',
            'Недопустимый формат изображения',
            (images) => {
              if (images && images?.length > 0) {
                return images?.every((image) =>
                  imageFormats.includes((image as File).type),
                );
              }

              return true;
            },
          ),
          price: Yup.number().typeError('Цена должна быть числом'),
        })}
        onSubmit={async (
          values: { toggleReview: boolean } & IProject,
          {
            setSubmitting,
          }: FormikHelpers<{ toggleReview: boolean } & IProject>,
        ) => {
          const { toggleReview, ...projectToPost } = values;
          if (project) {
            const res = await updateProject(
              {
                id: project.id,
                ...projectToPost,
              },
              handleUploadProgress,
              setProgress,
            );
            if (typeof res === 'string') {
              setErr(res);
            } else {
              showFormHandler();
            }
            setProgress(0);
          } else {
            const res = await postProject(
              projectToPost,
              handleUploadProgress,
              setProgress,
            );
            if (typeof res === 'string') {
              setErr(res);
            }
            setProgress(0);
          }
          router.push(router.pathname, undefined, { scroll: false });
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, values, handleChange }) => (
          <Form>
            <StyledLabel htmlFor="name">
              Название <StyledRedSpan>*</StyledRedSpan>
            </StyledLabel>
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
              style={{ marginBottom: 30 }}
            />
            <ErrorMessage name="description">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
            <Button
              type="button"
              text="Добавить Отзыв"
              clickHandler={() => {
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
                <StyledLabel htmlFor="author">
                  Автор <StyledRedSpan>*</StyledRedSpan>
                </StyledLabel>
                <StyledField id="author" type="text" name="review.author" />
                <ErrorMessage name="review.author">
                  {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
                </ErrorMessage>
                <StyledLabel>
                  Рейтинг <StyledRedSpan>*</StyledRedSpan>
                </StyledLabel>
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
                <StyledLabel htmlFor="text">
                  Текст <StyledRedSpan>*</StyledRedSpan>
                </StyledLabel>
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
                  onChange={handleChange}
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
              {({ getRootProps, getInputProps }) => (
                <StyledDropZone {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Загрузите или перетащите фото</p>
                  <StyledPlus>+</StyledPlus>
                </StyledDropZone>
              )}
            </Dropzone>
            <Thumbnails
              thumbnails={dropImages}
              changeFilesHandler={setFieldValue}
            />
            <ErrorMessage name="images">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
            <StyledLabel htmlFor="price">Цена</StyledLabel>
            <StyledField id="price" type="text" name="price" />
            <ErrorMessage name="price">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
            {progress > 0 && <BarProgress percent={progress} />}
            <Button
              type="submit"
              text={project ? 'Изменить' : 'Добавить'}
              inline
            />
            <Button type="reset" text="Отмена" inline />
            <Button
              type="button"
              text="Скрыть"
              clickHandler={
                project ? updateProjectFormHandler : showFormHandler
              }
              inline
            />
            <StyledErrorMessage>{err}</StyledErrorMessage>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormProject;
