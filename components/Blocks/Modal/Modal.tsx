import { FC, ForwardedRef, forwardRef } from 'react';
import ButtonClose from '../../Elements/ButtonClose/ButtonClose';
import { TModalProps } from './TModal';
import { StyledModal } from './StyledModal';

const Modal: FC<TModalProps & { ref?: ForwardedRef<HTMLDivElement> }> =
  forwardRef(({ children, active, closeButtonHandler }, ref) => {
    return (
      <StyledModal active={active} ref={ref}>
        <ButtonClose onClick={closeButtonHandler} />
        {children}
      </StyledModal>
    );
  });

Modal.displayName = 'Modal';

export default Modal;
