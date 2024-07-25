import { createContext, PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "../helpers/account";
import { IContext } from "../interfaces";

export const MyProvider = createContext<IContext>({
  isAuthenticated: null,
});

const paths = ["/login", "/register"];

const MyContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuthenticated = getAuth();

  useEffect(() => {
    if (isAuthenticated && paths.includes(pathname)) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate, pathname]);

  const values = {
    isAuthenticated,
  };

  return <MyProvider.Provider value={values}>{children}</MyProvider.Provider>;
};

export default MyContextProvider;
