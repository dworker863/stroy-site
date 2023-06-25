import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TButtonClose } from './TButtonClose';

export const StyledButtonClose = styled.button<TButtonClose>`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background-color: #fff;

  ${({ thumb }) =>
    thumb &&
    css`
      top: 2px;
      right: 2px;
      background-color: transparent;
    `}
`;

export const StyledThumbnailsCloseBtn = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;
