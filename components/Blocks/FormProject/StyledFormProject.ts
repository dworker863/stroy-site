import { TStyledFormReview } from './TFromProject';
import styled, { css } from 'styled-components';

export const StyledFormReview = styled.div<TStyledFormReview>`
  display: none;
  margin-top: 10px;
  margin-left: 20px;

  ${({ show }) =>
    show &&
    css`
      display: block;
    `}
`;

export const StyledFormRating = styled.div`
  margin-bottom: 20px;
`;
