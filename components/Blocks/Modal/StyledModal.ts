import styled from 'styled-components';
import { IStyledModal } from './IModal';

export const StyledModal = styled.div<IStyledModal>`
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
  transform: translate(-50%, -50%);
  background-color: #fff;
`;
