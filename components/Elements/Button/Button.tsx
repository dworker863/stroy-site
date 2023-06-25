import { FC } from 'react';
import { TButtonProps } from './TButton';
import { StyledButton } from './StyledButton';

const Button: FC<TButtonProps> = ({
  text,
  type,
  clickHandler,
  inline,
  center,
  auth,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={clickHandler}
      inline={inline}
      center={center}
      auth={auth}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
