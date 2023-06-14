import { TDirection } from './../../../commonTypesInterfaces/TDirection';
import styled, { css } from 'styled-components';

export const StyledNav = styled.nav<TDirection>`
  ${({ column }) =>
    column &&
    css`
      ul {
        flex-direction: column;

        li {
          text-transform: none;
          padding-bottom: 20px;
          line-height: 16px;
        }

        & > div {
          display: none;
        }
      }
    `}

  @media (max-width: 992px) {
    display: none;
  }
`;

export const StyledMenu = styled.ul`
  display: flex;
`;

export const StyledNavItem = styled.li`
  margin-left: 40px;
  text-transform: uppercase;
  line-height: 48px;
  color: #fff;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
