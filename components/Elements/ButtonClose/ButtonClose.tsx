import { FC } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { TClickHandler } from '../../../commonTypesInterfaces/TClickHandler';
import {
  StyledButtonClose,
  StyledThumbnailsCloseBtn,
} from './StyledButtonClose';
import { TButtonClose } from './TButtonClose';

const ButtonClose: FC<TButtonClose & TClickHandler> = ({ thumb, onClick }) => {
  return (
    <>
      <StyledButtonClose type="button" onClick={onClick} thumb={thumb}>
        <StyledThumbnailsCloseBtn icon={faXmark} />
      </StyledButtonClose>
    </>
  );
};

export default ButtonClose;
