import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const StyledServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    align-items: center;

    button {
      margin: 20px auto;
    }
  }
`;

export const StyledService = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;

  @media (max-width: 576px) {
    width: 300px;
  }
`;
