export interface IAppContext {
  loginHandler: () => void;
  logoutHandler: () => void;
}

export interface IStyledOverlay {
  active: boolean;
}
