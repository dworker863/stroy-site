import { Field } from 'formik';
import styled from 'styled-components';

export const StyledField = styled(Field)`
  display: ${({ component }) =>
    component === 'select' ? 'inline-block' : 'block'};
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 4px 8px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.orange};
  }
`;
