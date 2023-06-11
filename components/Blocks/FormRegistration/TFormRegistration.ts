export type TFormRegistrationValues = {
  username: string;
  password: string;
  passwordConfirm: string;
};

export type TFormRegistrationProps = {
  loginBtnHandler: () => void;
  submitHandler: () => void;
};
