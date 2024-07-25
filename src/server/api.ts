import { ILogin, IRegister } from "../interfaces";
import { BASE_URL } from "./request";

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
