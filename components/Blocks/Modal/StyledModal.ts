import styled from 'styled-components';
import { TActive } from '../../../commonTypesInterfaces/TActive';

export const StyledModal = styled.div<TActive>`
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  justify-content: center;
  width: 320px;
  height: auto;
  padding-top: 40px;
  padding-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.colors.purple};
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;
