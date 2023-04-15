import styled, { css } from 'styled-components';
import { IStyledOverlay } from './ILayout';

export const StyledOverlay = styled.div<IStyledOverlay>`
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.grey};
      opacity: 0.5;
    `}
`;
