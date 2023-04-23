import styled from 'styled-components';

export const StyledSearchWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledSearch = styled.input`
  width: 280px;
  padding: 5px 35px;
  border-radius: 5px;
  border: 1px solid #c8b8db;
  background-color: #e8f0fe;
  font-family: Gilroy, sans-serif;
  font-size: 16px;
`;
