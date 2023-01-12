import Image from 'next/image';
import React, { FC } from 'react';
import {
  StyledAuthorName,
  StyledAuthorPhoto,
  StyledCardAuthor,
  StyledCardDate,
  StyledCardMessage,
  StyledCardReview,
} from './StyledCardReview';

const CardReview: FC = () => {
  return (
    <StyledCardReview>
      <StyledCardAuthor>
        <StyledAuthorPhoto>
          <Image
            src="/images/author-photo.png"
            alt="Author"
            width={40}
            height={40}
          />
        </StyledAuthorPhoto>
        <StyledAuthorName>Lorem ipsum</StyledAuthorName>
      </StyledCardAuthor>
      <StyledCardMessage>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam
        repellat, labore accusamus numquam cupiditate, fuga laborum consequuntur
        facilis ex nostrum beatae nihil dolore officia obcaecati exercitationem
        a?
      </StyledCardMessage>
      <StyledCardDate>12.01.2022</StyledCardDate>
    </StyledCardReview>
  );
};

export default CardReview;
