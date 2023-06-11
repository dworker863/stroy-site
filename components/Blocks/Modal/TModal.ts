import { ReactElement } from 'react';

export type TModalProps = {
  children: ReactElement;
  active: boolean;
  closeButtonHandler: () => void;
};
