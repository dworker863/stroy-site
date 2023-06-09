import styled, { css } from 'styled-components';
import { StyledDesc } from '../../commonStyles/StyledDesc';

export const StyledProjectsDesc = styled(StyledDesc)`
  & + button {
    margin-top: 40px;
  }
`;
