export interface IFormAuth {
  closeButtonHandler: () => void;
  submitHandler: () => void;
  registrHandler: () => void;
}

export interface IStyledFormAuthModal {
  active: boolean;
}

export interface IFormAuthValues {
  username: string;
  password: string;
}
