import React, { FC } from 'react';
import { IButton } from './IButton';
import { StyledButton } from './StyledButton';

const Button: FC<IButton> = ({ text, type, onClick, inline, center }) => {
  return (
    <StyledButton type={type} onClick={onClick} inline={inline} center={center}>
      {text}
    </StyledButton>
  );
};

export default Button;
