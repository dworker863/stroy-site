import styled from 'styled-components';

export const StyledSelect = styled.select`
  margin-bottom: 20px;
  margin-right: 10px;
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 4px;
  font-family: Gilroy, sans-serif;
  font-size: 16px;
`;
