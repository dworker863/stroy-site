import { ReactElement } from 'react';

export interface IModal {
  children: ReactElement;
  active: boolean;
  closeButtonHandler: () => void;
}

export interface IStyledModal {
  active: boolean;
}
