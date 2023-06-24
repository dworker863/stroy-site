export type TEditButtonsProps = {
  entityId: number;
  styles: 'project' | 'calculator' | 'video';
  updateBtnHandler: () => void;
  deleteBtnHandler: () => void;
};

export type TStyledEditButtons = {
  styles: 'project' | 'calculator' | 'video';
};
