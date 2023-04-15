export interface IFormAuth {
  active: boolean;
  onClick: () => void;
}

export interface IStyledFormAuthModal {
  active: boolean;
}

export interface IFormAuthValues {
  username: string;
  password: string;
}
