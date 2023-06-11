import { Dispatch, SetStateAction, ReactNode } from 'react';

export type TAppContext = {
  auth: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
  logoutHandler: () => void;
};
