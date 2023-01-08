import styled, { css } from 'styled-components';
import { IStyledHamburger, IStyledHamburgerWrapper } from './IHamburger';

export const StyledHamburgerWrapper = styled.div<IStyledHamburgerWrapper>`
  z-index: 1000;
  display: none;
  cursor: pointer;
  position: absolute;
  right: 40px;
  width: 30px;
  height: 40px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledHamburger = styled.div<IStyledHamburger>`
  position: absolute;
  right: 0;
  top: 10px;
  width: 30px;
  height: 4px;
  background-color: #b20a4ec7;
  transition: 0.3s all;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background-color: #b20a4ec7;
  }

  &:before {
    top: 10px;
  }

  &:after {
    top: 20px;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      top: 20px;
      transform: rotate(-135deg);

      &::before {
        top: 0;
        transform: rotate(90deg);
      }

      &::after {
        display: none;
      }
    `}
`;
