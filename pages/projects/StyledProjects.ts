import styled from 'styled-components';
import { StyledDesc } from '../../commonStyles/StyledDesc';

export const StyledProjectDesc = styled(StyledDesc)`
  margin-bottom: 0px;

  & + button {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const StyledProjects = styled.div`
  display: flex;
  gap: 20px;
`;
