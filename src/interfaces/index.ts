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
    cpf: string;
  };
}

export interface ITransactions {
  amountValue: string;
  cpf: string;
  product: string;
  id: number;
  pointsValue: string;
  status: string;
  transactionDate: string;
}

export interface IFilters {
  status?: string;
  cpf?: string;
  product?: string;
  startDate?: string;
  endDate?: string;
  minValue?: string;
  maxValue?: string;
}

export type QueryKey = [string, IFilters];
