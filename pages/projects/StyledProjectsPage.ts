import styled from 'styled-components';
import { StyledDesc } from '../../commonStyles/StyledDesc';

export const StyledProjectsDesc = styled(StyledDesc)`
  margin-bottom: 0px;

  & + button {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
