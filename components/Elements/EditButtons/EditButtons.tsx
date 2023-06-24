import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FC } from 'react';
import { StyledEditBtns, StyledEditButtons } from './StyledEditButtons';
import { TEditButtonsProps } from './TEditButtons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const EditButtons: FC<TEditButtonsProps> = ({
  entityId,
  styles,
  updateBtnHandler,
  deleteBtnHandler,
}) => {
  console.log(styles);

  return (
    <StyledEditBtns styles={styles}>
      <StyledEditButtons
        icon={faPen as IconProp}
        onClick={updateBtnHandler}
        styles={styles}
      />
      <StyledEditButtons
        icon={faTrash as IconProp}
        onClick={deleteBtnHandler.bind(null, entityId)}
        styles={styles}
      />
    </StyledEditBtns>
  );
};

export default EditButtons;
