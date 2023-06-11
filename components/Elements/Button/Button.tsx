import { FC } from 'react';
import { TButtonProps } from './TButton';
import { StyledButton } from './StyledButton';

const Button: FC<TButtonProps> = ({
  text,
  type,
  onClick,
  inline,
  center,
  auth,
}) => {
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
