import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

export const StyledCardReview = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 30px;
  border-radius: 10px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledCardAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledAuthorName = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
`;

export const StyledAuthorPhoto = styled.div`
  margin-right: 20px;
`;

export const StyledStars = styled(StarRatings)``;

export const StyledCardMessage = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const StyledCardDate = styled.p``;
