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

export const StyledSocials = styled.div`
  display: flex;
  align-items: center;
  line-height: 48px;
  margin-left: 40px;

  svg {
    margin-left: 8px;
  }
`;

export const StyledSocial = styled.div`
  background-image: url('./images/social-icons.png');
  width: 30px;
  height: 30px;
  margin-right: 5px;

  &.whatsapp {
    background-position: -104px 0;
  }

  &.telegram {
    background-position: -68px 0;
  }

  &.instagram {
    background-position: -34px 0;
  }

  &.vk {
    background-position: 0 0;
  }

  &.facebook {
    background-position: -138px 0;
  }

  &.twitter {
    background-position: -68px 62px;
  }
`;
