import { IStyledNavMobile } from './INavMobile';
import styled, { css } from 'styled-components';

export const StyledNavMobile = styled.nav<IStyledNavMobile>`
  display: none;
  position: fixed;
  z-index: 10;
  top: 0;
  right: -320px;
  width: 320px;
  height: 100vh;
  padding-top: 200px;
  background-color: ${({ theme }) => theme.colors.brown};
  transition: 0.3s all;
  ${({ isActive }) =>
    isActive &&
    css`
      right: 0;
    `};

  @media (max-width: 992px) {
    display: block;
  }
`;

export const StyledMobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin-top: 80px;
    margin-left: 0;
  }
`;

export const StyledNavMobileItem = styled.li`
  margin-bottom: 20px;
  text-align: center;
  color: #fff;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
