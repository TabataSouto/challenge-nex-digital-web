export interface IContext {
  isAuthenticated: string | null;
}

export interface ILogin {
  email: string;
  password: string;
}
