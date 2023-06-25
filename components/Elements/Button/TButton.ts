export type TButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
  inline?: boolean;
  center?: boolean;
  auth?: boolean;
  clickHandler?: (value?: any) => void;
};

export type TStyledButton = {
  inline?: boolean;
  center?: boolean;
  auth?: boolean;
  onClick?: () => void;
};
