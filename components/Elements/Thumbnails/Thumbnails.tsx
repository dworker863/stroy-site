import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FC, useMemo, useState } from 'react';
import { TPhotoProps } from './TThumbnails';
import {
  StyledThumbnail,
  StyledThumbnailsCloseBtn,
  StyledThumbnailsWrapper,
} from './StyledThumbnails';

const Thumbnails: FC<TPhotoProps> = ({ thumbnails }) => {
  const [arr, setArr] = useState(thumbnails);

  const closeBtnHandler = (array: any[], index: number) => {
    console.log(thumbnails);
    setArr(array.splice(index, 1));
  };

  const memoizedThumbnails = useMemo(() => {
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
  }, [thumbnails.length]);

  return memoizedThumbnails;
};

export default Thumbnails;
