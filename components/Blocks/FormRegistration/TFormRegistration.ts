export type TFormRegistrationValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export type TFormRegistrationProps = {
  loginBtnHandler: () => void;
  submitHandler: () => void;
};
