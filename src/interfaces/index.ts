export interface IContext {
  isAuthenticated: string | null;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  name: string;
  cpf: string;
}

export interface IGetAccess {
  data: {
    role: string;
  };
}
