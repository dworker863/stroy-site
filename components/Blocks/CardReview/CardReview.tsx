import Image from 'next/image';
import { FC, useState } from 'react';
import { TCardReviewProps } from './TCardReview';
import {
  StyledAuthorName,
  StyledAuthorPhoto,
  StyledCardAuthor,
  StyledCardAuthorWrapper,
  StyledCardDate,
  StyledCardMessage,
  StyledCardReview,
  StyledCardText,
  StyledStars,
} from './StyledCardReview';
import { StyledFullText } from '../../../commonStyles/StyledFullText';

const CardReview: FC<TCardReviewProps> = ({ review }) => {
  const [showText, setShowText] = useState(false);

  const showFullTextHandler = () => {
    setShowText(!showText);
  };

  return (
    <StyledCardReview>
      <StyledCardAuthorWrapper>
        <StyledAuthorPhoto>
          <Image
            src="/images/author-photo.png"
            alt="Author"
            width={50}
            height={50}
          />
        </StyledAuthorPhoto>
        <StyledCardAuthor>
          <StyledAuthorName>{review?.author}</StyledAuthorName>
          <StyledStars
            rating={review?.stars}
            starRatedColor="gold"
            starHoverColor="gold"
            numberOfStars={5}
            starDimension="24px"
            starSpacing="2px"
          />
        </StyledCardAuthor>
      </StyledCardAuthorWrapper>
      <StyledCardText>
        <StyledCardMessage>
          {!showText && review?.text && review?.text.length > 200 ? (
            <>
              {review?.text.slice(0, 200) + '...'}
              <StyledFullText onClick={showFullTextHandler}>
                Читать
              </StyledFullText>
            </>
          ) : !review?.text ? (
            ''
          ) : review?.text.length > 200 ? (
            <>
              {review?.text + '   '}
              <StyledFullText onClick={showFullTextHandler}>
                Скрыть
              </StyledFullText>
            </>
          ) : (
            review.text
          )}
        </StyledCardMessage>
        <StyledCardDate>{review?.date}</StyledCardDate>
      </StyledCardText>
    </StyledCardReview>
  );
};

export default CardReview;
