import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import { TPhotoProps } from './TThumbnails';
import {
  StyledThumbnail,
  StyledThumbnailsCloseBtn,
  StyledThumbnailsWrapper,
} from './StyledThumbnails';

const Thumbnails: FC<TPhotoProps> = ({ thumbnails }) => {
  console.log(URL.createObjectURL(thumbnails[0]));

  const [arr, setArr] = useState(thumbnails);

  const closeBtnHandler = (array: any[], index: number) => {
    setArr(array.splice(index, 1));
  };

  return (
    <StyledThumbnailsWrapper>
      {thumbnails.map((thumbnail: any, index) => (
        <StyledThumbnail key={URL.createObjectURL(thumbnail) + index}>
          <StyledThumbnailsCloseBtn
            icon={faXmark}
            onClick={closeBtnHandler.bind(null, thumbnails, index)}
          />
          {URL.createObjectURL(thumbnail) && (
            <img src={URL.createObjectURL(thumbnail)} />
          )}
        </StyledThumbnail>
      ))}
    </StyledThumbnailsWrapper>
  );
};

export default Thumbnails;
