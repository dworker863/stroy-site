export interface IUser {
  username: string;
  password?: string;
  passwordConfirm?: string;
  email?: string | null;
  role?: 'user' | 'admin';
}
