import styled from 'styled-components';

export const StyledNav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledMenu = styled.ul`
  display: flex;
`;

export const StyledNavItem = styled.li`
  margin-left: 40px;
  text-transform: uppercase;
  line-height: 48px;
  color: #fff;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
