import { TBarProgressProps } from './TBarProgress';
import styled from 'styled-components';

export const StyledBarProgress = styled.div`
  width: 280px;
  height: 5px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.orange};
`;

export const StyledProgress = styled.div<TBarProgressProps>`
  width: calc(280px * ${({ percent }) => percent / 100});
  height: 5px;
  background-color: ${({ theme }) => theme.colors.green};
`;
