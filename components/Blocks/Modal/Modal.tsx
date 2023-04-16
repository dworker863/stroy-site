import React, { Children, cloneElement, FC, ReactElement } from 'react';
import ButtonClose from '../../Elements/ButtonClose/ButtonClose';
import { IModal } from './IModal';
import { StyledModal } from './StyledModal';

const Modal: FC<IModal> = ({ children, active, closeButtonHandler }) => {
  return (
    <StyledModal active={active}>
      <ButtonClose onClick={closeButtonHandler} />
      {children}
    </StyledModal>
  );
};

export default Modal;
