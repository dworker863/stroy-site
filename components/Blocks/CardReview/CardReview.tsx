import Image from 'next/image';
import React, { FC, useState } from 'react';
import { ICardReview } from './ICardReview';
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

const CardReview: FC<ICardReview> = ({ review }) => {
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
        <StyledCardMessage>{review?.text}</StyledCardMessage>
        <StyledCardDate>{review?.date}</StyledCardDate>
      </StyledCardText>
    </StyledCardReview>
  );
};

export default CardReview;
