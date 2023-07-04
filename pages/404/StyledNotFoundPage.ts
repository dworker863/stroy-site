import Link from 'next/link';
import styled from 'styled-components';

export const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const StyledNotFoundCode = styled.div`
  display: flex;
  align-items: center;
  font-size: 154px;
`;

export const StyledNotFoundTitle = styled.h2`
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
`;
export const StyledNotFoundDesc = styled.p`
  width: 300px;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledNotFoundNav = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 5px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledNotFoundLink = styled(Link)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledNotFoundSeparator = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fontColor};

  @media (max-width: 576px) {
    display: none;
  }
`;
