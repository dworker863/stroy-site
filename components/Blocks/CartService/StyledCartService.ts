import styled from 'styled-components';

export const StyledCartService = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 1px solid #c8b8db;
  border-radius: 5px;
`;

export const StyledCartServiceTitle = styled.div`
  padding: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
`;
export const StyledCartServiceInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const StyledCartServiceInfoTitle = styled.div`
  margin-bottom: 10px;
`;

export const StyledCartServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    padding: 5px;
    width: 60px;
  }

  &:last-child {
    align-items: end;
    text-align: right;
  }
`;

export const StyledCartServiceTotalPrice = styled.div`
  padding: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
`;
