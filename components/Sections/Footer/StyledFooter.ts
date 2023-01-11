import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #392828eb;
  color: #fff;

  & > div {
    display: block;
  }
`;

export const StyledFooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledFooterContacts = styled.div`
  margin-bottom: 100px;
`;
export const StyledAddress = styled.div`
  margin-bottom: 16px;
`;

export const StyledFooterSocials = styled.div`
  display: flex;

  svg {
    margin-right: 8px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.socialColor};
  }
`;

export const StyledCopyrights = styled.div`
  width: 100%;
`;
