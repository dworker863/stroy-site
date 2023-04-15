import React, { FC } from 'react';
import { IButton } from './IButton';
import { StyledButton } from './StyledButton';

const Button: FC<IButton> = ({ text, type, onClick, inline, center, auth }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      inline={inline}
      center={center}
      auth={auth}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
