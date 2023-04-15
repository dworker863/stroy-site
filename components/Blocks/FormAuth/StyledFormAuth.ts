import { Form } from 'formik';
import styled from 'styled-components';
import { IStyledFormAuthModal } from './IFormAuth';

export const StyledFormAuthModal = styled.div<IStyledFormAuthModal>`
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  justify-content: center;
  width: 300px;
  height: auto;
  padding-top: 40px;
  padding-bottom: 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.grey};
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

export const StyledForm = styled(Form)`
  text-align: center;
`;
