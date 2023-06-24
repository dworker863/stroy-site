import styled from 'styled-components';

export const StyledVideoCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.grey};
  box-shadow: 1px 1px 5px #292828;
  margin-bottom: 40px;
`;

export const StyledVideoTitle = styled.div`
  position: relative;
  padding: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledVideoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const StyledVideoDesc = styled.p`
  width: 60%;
`;
