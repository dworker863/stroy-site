import styled from 'styled-components';

export const StyledProject = styled.div`
  &:nth-child(odd) {
    margin-right: auto;
  }

  @media (max-width: 1200px) {
    margin: auto;
  }
`;
