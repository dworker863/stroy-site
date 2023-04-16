import { IStyledButton } from './IButton';
import styled, { css } from 'styled-components';

export const StyledButton = styled.button<IStyledButton>`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  cursor: pointer;
  margin-bottom: 20px;
  margin-right: 10px;
  padding: 8px 30px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;

  &:nth-last-child(2) {
    margin-top: 30px;
  }

  a + &:nth-last-child(2) {
    margin-top: 0;
  }

  ${({ center }) =>
    center &&
    css`
      margin-left: auto;
      margin-right: auto;
      /* margin: 0 auto; */
    `}

  ${({ auth }) =>
    auth === false &&
    css`
      margin: 0;
      padding: 10px;
      background-color: transparent;
    `}

    ${({ auth }) =>
    auth !== undefined &&
    css`
      height: 30px;
      align-self: center;
      margin: 0;
      margin-right: 20px;
    `}
`;
