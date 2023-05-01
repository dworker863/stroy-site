import styled from 'styled-components';
import { StyledDesc } from '../../commonStyles/StyledDesc';

export const StyledCalculatorDesc = styled(StyledDesc)`
  margin-bottom: 0px;

  & + button {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
