import styled from 'styled-components';

export const StyledServices = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    align-items: center;
  }
`;

export const StyledServicesWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;
