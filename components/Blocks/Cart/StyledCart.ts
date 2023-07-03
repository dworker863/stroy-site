import { StyledTitle } from './../../../commonStyles/StyledTitle';
import styled from 'styled-components';

export const StyledCart = styled.div`
  h2 {
    font-size: 24px;

    @media (max-width: 576px) {
      text-align: center;
    }
  }
`;

export const StyledCartTitle = styled(StyledTitle)`
  margin-top: 40px;
`;

export const StyledCartServicesWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 40px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    gap: 20px;
  }
`;

export const StyledCartPrice = styled.div`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 576px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;
