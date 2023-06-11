import { Dispatch, SetStateAction, ReactNode } from 'react';

export type TAppContext = {
  auth: boolean;
  // setAuth: Dispatch<SetStateAction<boolean>>;
  loginHandler: () => void;
  logoutHandler: () => void;
};

export type TLayoutProps = {
  children: ReactNode;
};
