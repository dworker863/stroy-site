import { Field } from 'formik';
import styled from 'styled-components';

export const StyledField = styled(Field)`
  display: ${({ component }) =>
    component === 'select' ? 'inline-block' : 'block'};
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 4px 8px;
  /* color: ${({ theme }) => theme.colors.primary}; */
`;
