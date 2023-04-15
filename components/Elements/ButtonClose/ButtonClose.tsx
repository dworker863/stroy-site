import React, { FC } from 'react';
import { IButtonClose } from './IButtonClose';
import { StyledButtonClose } from './StyledButtonClose';

const ButtonClose: FC<IButtonClose> = ({ onClick }) => {
  return (
    <>
      <StyledButtonClose type="button" onClick={onClick}>
        &#10006;
      </StyledButtonClose>
    </>
  );
};

export default ButtonClose;
