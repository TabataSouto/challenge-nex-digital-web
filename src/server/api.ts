// import { AxiosError, AxiosResponse } from "axios";
// import { ILogin } from "../interfaces";
import { ILogin } from "../interfaces";
import { BASE_URL } from "./request";
// import { saveAuth } from "../helpers/account";

// export const fetchAuthLogin = (payload: ILogin) => {
//   Request({
//     url: `${BASE_URL}/auth`,
//     method: "POST",
//     data: payload,
//   })
//     .then(({ data }: AxiosResponse) => {
//       saveAuth(data.token);
//     })
//     .catch((error: AxiosError) => console.log(error.message));
// };

export const USER_AUTH = (payload: ILogin) => ({
  url: `${BASE_URL}/auth`,
  options: {
    method: "POST",
    data: payload,
  },
});
