import Image from 'next/image';
import React, { FC, useState } from 'react';
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

const CardReview: FC = () => {
  const [rating, setRating] = useState(5);

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
          <StyledAuthorName>Lorem ipsum</StyledAuthorName>
          <StyledStars
            rating={rating}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam
          repellat, labore accusamus numquam cupiditate, fuga laborum
          consequuntur facilis ex nostrum beatae nihil dolore officia obcaecati
          exercitationem a?
        </StyledCardMessage>
        <StyledCardDate>12.01.2022</StyledCardDate>
      </StyledCardText>
    </StyledCardReview>
  );
};

export default CardReview;
