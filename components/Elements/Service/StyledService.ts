import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const StyledService = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;

  @media (max-width: 576px) {
    width: 320px;
  }
`;

export const StyledServiceBtns = styled.div``;

export const StyledServiceBtn = styled(FontAwesomeIcon)`
  margin-left: 30px;

  &:last-child {
    margin-left: 6px;
  }
`;
