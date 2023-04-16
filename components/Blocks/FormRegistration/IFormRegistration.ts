export interface IFormRegistrationValues {
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface IFormRegistration {
  loginHandler: () => void;
}
