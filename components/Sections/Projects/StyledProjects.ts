import styled from 'styled-components';

export const StyledProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
