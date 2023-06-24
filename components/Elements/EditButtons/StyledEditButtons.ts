import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { TStyledEditButtons } from './TEditButtons';

export const StyledEditBtns = styled.div<TStyledEditButtons>`
  ${({ styles }) =>
    styles === 'project' &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      cursor: pointer;
      width: 100px;
      padding: 10px 30px;
      border-bottom-left-radius: 8px;
      background-color: ${({ theme }) => theme.colors.secondary};
    `}

  ${({ styles }) =>
    styles === 'video' &&
    css`
      position: absolute;
      bottom: 0;
      right: 0;
      cursor: pointer;
      width: 100px;
      padding: 20px 30px;
      border-top-right-radius: 8px;
      background-color: ${({ theme }) => theme.colors.secondary};
    `}
`;

export const StyledEditButtons = styled(FontAwesomeIcon)<TStyledEditButtons>`
  color: #fff;

  &:last-child {
    margin-left: 10px;
  }

  ${({ styles }) =>
    styles === 'calculator' &&
    css`
      margin-left: 30px;
    `}
`;
