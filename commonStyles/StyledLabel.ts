import { TStyledLabel } from './../commonTypesInterfaces/TStyledLabel';
import styled, { css } from 'styled-components';

export const StyledLabel = styled.label<TStyledLabel>`
  display: block;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-right: 10px;

  ${({ inline }) =>
    inline &&
    css`
      display: inline-block;
      flex-grow: 1;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 10px;
      line-height: 50px;
    `}
`;
