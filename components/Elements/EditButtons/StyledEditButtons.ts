import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { TStyledEditButtons } from './TEditButtons';

export const StyledEditBtns = styled.div<TStyledEditButtons>`
  ${({ styles }) =>
    styles &&
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
`;

export const StyledEditButtons = styled(FontAwesomeIcon)<TStyledEditButtons>`
  color: #fff;

  &:last-child {
    margin-left: 10px;
  }

  ${({ styles }) => {
    console.log(styles);

    return (
      !styles &&
      css`
        margin-left: 30px;
      `
    );
  }}
`;
