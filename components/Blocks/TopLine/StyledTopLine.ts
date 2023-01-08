import styled from 'styled-components';

export const StyledTopLine = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: -10px;
    opacity: 0.3;
    height: 80px;
    width: 100%;
    background-color: #000;
  }
`;
