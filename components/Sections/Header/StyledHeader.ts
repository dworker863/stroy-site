import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  /* align-items: center; */
  height: 100vh;
  background-image: url('images/header-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;

  @media (max-width: 1200px) {
    background-position: 50%;
  }
`;

export const StyledHeaderInfo = styled.div`
  align-self: center;
  width: 40%;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.fontColor};

  @media (max-width: 1400px) {
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 992px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const StyledHeaderTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 42px;

  @media (max-width: 1400px) {
    font-size: 36px;
  }

  @media (max-width: 1200px) {
    font-size: 30px;
  }

  @media (max-width: 576px) {
    font-size: 26px;
  }
`;

export const StyledHeaderDesc = styled.p``;
