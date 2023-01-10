import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  line-height: 48px;
  margin-left: 40px;

  svg {
    margin-left: 8px;
  }
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`
  &.whatsapp {
    color: #fff;
    /* background-color: #64b161; */
    border-radius: 50%;
  }

  &.vk {
    color: #097deb;
    /* background-color: #fff; */
  }

  &.facebook {
    color: #097deb;
    /* background-color: #fff; */
    border-radius: 50%;
  }

  &.twitter {
    color: #fff;
    /* background-color: #097deb; */
    border-radius: 50%;
  }

  &.insta {
    color: #fff;
    /* background-color: #097deb; */
    border-radius: 50%;
  }
`;
