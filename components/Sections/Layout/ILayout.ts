import { Dispatch, SetStateAction } from 'react';

export interface IAppContext {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  loginHandler: () => void;
  logoutHandler: () => void;
}

export interface IStyledOverlay {
  active: boolean;
}
