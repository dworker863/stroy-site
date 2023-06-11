import { FC } from 'react';
import { TClickHandler } from '../../../commonTypesInterfaces/TClickHandler';
import { StyledButtonClose } from './StyledButtonClose';

const ButtonClose: FC<TClickHandler> = ({ onClick }) => {
  return (
    <>
      <StyledButtonClose type="button" onClick={onClick}>
        &#10006;
      </StyledButtonClose>
    </>
  );
};

export default ButtonClose;
