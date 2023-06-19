import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FC, useMemo, useState } from 'react';
import { TThumbnailsProps } from './TThumbnails';
import {
  StyledThumbnail,
  StyledThumbnailsCloseBtn,
  StyledThumbnailsWrapper,
} from './StyledThumbnails';

const Thumbnails: FC<TThumbnailsProps> = ({
  thumbnails,
  changeFilesHandler,
}) => {
  const [arr, setArr] = useState(thumbnails);

  const closeBtnHandler = (array: any[], index: number) => {
    setArr(array.splice(index, 1));
    changeFilesHandler('images', thumbnails);
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
