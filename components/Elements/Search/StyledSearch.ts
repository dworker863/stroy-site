import styled from 'styled-components';

export const StyledSearchWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

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
`;
