import { IStyledNavMobile } from './INavMobile';
import styled, { css } from 'styled-components';

export const StyledNavMobile = styled.nav<IStyledNavMobile>`
  position: absolute;
  top: 0;
  right: -320px;
  width: 320px;
  height: 100vh;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #fff;
  transition: 0.3s all;
  ${({ isActive }) =>
    isActive &&
    css`
      right: 0;
    `};
`;

export const StyledMobileMenu = styled.ul``;

export const StyledNavMobileItem = styled.li`
  margin-bottom: 20px;
  text-align: center;
`;
