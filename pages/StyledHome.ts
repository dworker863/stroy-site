import styled from 'styled-components';

export const StyledHome = styled.main`
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: #fff;
`;

export const StyledHomeTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledHomeDesc = styled.p`
  margin-bottom: 80px;
`;
