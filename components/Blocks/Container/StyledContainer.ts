import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1320px;
  margin: 0 auto;

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
