export interface IFormAuth {
  active: boolean;
  closeButtonHandler: () => void;
  loginHandler: () => void;
}

export interface IStyledFormAuthModal {
  active: boolean;
}

export interface IFormAuthValues {
  username: string;
  password: string;
}
