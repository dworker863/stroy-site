import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import { TPhotoProps } from './TPhoto';
import {
  StyledPhoto,
  StyledPhotosCloseBtn,
  StyledPhotosWrapper,
} from './StyledPhoto';

const Photo: FC<TPhotoProps> = ({ photos }) => {
  const [arr, setArr] = useState(photos);

  const closeBtnHandler = (array: any[], index: number) => {
    setArr(array.splice(index, 1));
  };

  return (
    <StyledPhotosWrapper>
      {photos.map((photo: any, index) => (
        <StyledPhoto key={URL.createObjectURL(photo) + index}>
          <StyledPhotosCloseBtn
            icon={faXmark}
            onClick={closeBtnHandler.bind(null, photos, index)}
          />
          <img src={URL.createObjectURL(photo)} />
        </StyledPhoto>
      ))}
    </StyledPhotosWrapper>
  );
};

export default Photo;
