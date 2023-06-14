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

export const StyledDropZone = styled.div`
  cursor: pointer;
  width: 200px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #c8b8db;
  border-radius: 2px;
  font-family: Gilroy, sans-serif;
  font-size: 16px;
  text-align: center;
  background-color: #e8f0fe;
`;

export const StyledPlus = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
`;
