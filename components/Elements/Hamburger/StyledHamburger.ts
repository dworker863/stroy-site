import styled from 'styled-components';

export const StyledHamburgerWrapper = styled.div`
  position: relative;
  height: 40px;
`;

export const StyledHamburger = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  width: 30px;
  height: 4px;
  background-color: #b20a4ec7;

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
`;
