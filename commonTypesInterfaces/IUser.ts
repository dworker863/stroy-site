export interface IUser {
  id?: number;
  username: string;
  password?: string;
  passwordConfirm?: string;
  email?: string | null;
  role?: 'user' | 'admin';
}
