import { IFilters, ILogin, IRegister } from "../interfaces";
import Request, { BASE_URL } from "./request";

export const USER_AUTH = (payload: ILogin) => ({
  url: `${BASE_URL}/auth`,
  options: {
    method: "POST",
    data: payload,
  },
});

export const USER_REGISTER = (payload: IRegister) => ({
  url: `${BASE_URL}/user/register`,
  options: {
    method: "POST",
    data: payload,
  },
});

export const SEND_UPLOAD = (file: FormData) => ({
  url: `${BASE_URL}/admin/upload`,
  options: {
    method: "POST",
    data: file,
  },
});

export const GET_TRANSACTIONS = async (filters: IFilters) => {
  // const [, filters] = queryKey;
  const { status, cpf, product, startDate, endDate, minValue, maxValue } =
    filters;
  const params = new URLSearchParams();

  // Adiciona parâmetros de filtro na URLSearchParams se estiverem definidos
  if (status) params.append("status", status);
  if (cpf) params.append("cpf", cpf);
  if (product) params.append("product", product);
  if (startDate) params.append("startDate", startDate);
  if (endDate) params.append("endDate", endDate);
  if (minValue) params.append("minValue", minValue);
  if (maxValue) params.append("maxValue", maxValue);

  console.log(`${BASE_URL}/transactions?${params.toString()}`);

  const response = await Request({
    url: `${BASE_URL}/transactions?${params.toString()}`,
    method: "GET",
  });

  return response.data;
};

export const GET_TRANSACTIONS_USER = async (filters: IFilters, cpf: string) => {
  // const [, filters] = queryKey;
  const { status,startDate, endDate} =
    filters;
  const params = new URLSearchParams();

  // Adiciona parâmetros de filtro na URLSearchParams se estiverem definidos
  if (status) params.append("status", status);
  if (startDate) params.append("startDate", startDate);
  if (endDate) params.append("endDate", endDate);

  console.log(`${BASE_URL}/transactions?${params.toString()}`);

  const response = await Request({
    url: `${BASE_URL}/transactions/${cpf}?${params.toString()}`,
    method: "GET",
  });

  return response.data;
};
