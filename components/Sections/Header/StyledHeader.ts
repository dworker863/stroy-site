import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 100vh;
  background-image: url('images/header-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;

  @media (max-width: 1200px) {
    background-position: 50%;
  }
`;

export const StyledTopLine = styled.div`
  width: 100%;
`;

export const StyledHeaderInfo = styled.div`
  width: 40%;
  align-self: flex-start;
  justify-self: flex-end;
  margin-left: auto;
  transform: translateY(50%);
`;

export const StyledHeaderTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 48px;
`;

export const StyledHeaderDesc = styled.p``;
