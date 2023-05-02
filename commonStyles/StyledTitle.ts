import styled from 'styled-components';

export const StyledTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
`;
