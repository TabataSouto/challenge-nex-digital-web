import axios from "axios";
import { getAuth } from "../helpers/account";

const Request = axios.create();

Request.interceptors.request.use((request) => {
  const response = getAuth();

  if (response) {
    request.headers.Authorization = `Bearer ${response}`;
  }
  return request;
});

Request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default Request;
export const BASE_URL = import.meta.env.VITE_BASE_URL;
