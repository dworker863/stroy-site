import React, { forwardRef } from 'react';
import ButtonClose from '../../Elements/ButtonClose/ButtonClose';
import { IModal } from './IModal';
import { StyledModal } from './StyledModal';

const Modal = forwardRef<HTMLDivElement, IModal>(
  ({ children, active, closeButtonHandler }, ref) => {
    return (
      <StyledModal active={active} ref={ref}>
        <ButtonClose onClick={closeButtonHandler} />
        {children}
      </StyledModal>
    );
  },
);

Modal.displayName = 'Modal';

export default Modal;
