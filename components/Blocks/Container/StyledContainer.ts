import { TDirection } from './../../../commonTypesInterfaces/TDirection';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div<TDirection>`
  display: flex;
  justify-content: space-between;
  width: 1320px;
  margin: 0 auto;

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}

  @media (max-width: 1400px) {
    width: 1140px;
  }

  @media (max-width: 1200px) {
    width: 960px;
  }

  @media (max-width: 992px) {
    width: 720px;
  }

  @media (max-width: 768px) {
    width: 540px;
  }

  @media (max-width: 576px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
