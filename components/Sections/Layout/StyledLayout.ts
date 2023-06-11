import styled, { css } from 'styled-components';
import { TActive } from '../../../commonTypesInterfaces/TActive';

export const StyledOverlay = styled.div<TActive>`
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.grey};
      opacity: 0.5;
    `}
`;
