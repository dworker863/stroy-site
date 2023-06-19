import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import { FC, useState } from 'react';
import { TFormVideoValues } from './TFormVideo';
import * as Yup from 'yup';
import { StyledLabel } from '../../../commonStyles/StyledLabel';
import { StyledErrorMessage } from '../../../commonStyles/StyledErrorMessage';
import Button from '../../Elements/Button/Button';
import Dropzone from 'react-dropzone';
import { StyledDropZone } from '../../../commonStyles/StyledDropzone';
import { StyledPlus } from '../../../commonStyles/StyledPlus';
import Thumbnails from '../../Elements/Thumbnails/Thumbnails';

const FormVideo: FC = () => {
  const [dropVideos, setDropVideos] = useState<any>([]);
  const videoFormats = [
    'video/mp4',
    'video/avi',
    'video/wmv',
    'video/mov',
    'video/webm',
  ];

  return (
    <Formik
      initialValues={{
        video: null,
      }}
      validationSchema={Yup.object({
        video: Yup.mixed()
          .test('fileType', 'Недопустимый формат видео', (video) => {
            if (video) {
              return video && videoFormats.includes((video as File).type);
            }
          })
          .required('Добавьте видео'),
      })}
      onSubmit={(
        values: TFormVideoValues,
        { setSubmitting }: FormikHelpers<TFormVideoValues>,
      ): void | Promise<any> => {
        console.log(values.video.slice(-3));

        setSubmitting(false);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <StyledLabel htmlFor="video">Видео</StyledLabel>
          <Dropzone
            onDrop={(acceptedFiles) => {
              setDropVideos([...dropVideos, ...acceptedFiles]);
              setFieldValue('video', acceptedFiles[0]);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <StyledDropZone {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Загрузите или перетащите видео</p>
                <StyledPlus>+</StyledPlus>
              </StyledDropZone>
            )}
          </Dropzone>
          <Thumbnails
            thumbnails={dropVideos}
            changeFilesHandler={setFieldValue}
          />
          <ErrorMessage name="video">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          <Button type="submit" text="Загрузить" />
        </Form>
      )}
    </Formik>
  );
};

export default FormVideo;
