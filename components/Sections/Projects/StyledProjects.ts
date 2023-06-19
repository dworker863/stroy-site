import styled from 'styled-components';

export const StyledProjects = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
