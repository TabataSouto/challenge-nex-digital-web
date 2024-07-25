import { createContext, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../helpers/account";
import { IContext } from "../interfaces";

export const MyProvider = createContext<IContext>({
  isAuthenticated: null,
});

const MyContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const isAuthenticated = getAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const values = {
    isAuthenticated,
  };

  return <MyProvider.Provider value={values}>{children}</MyProvider.Provider>;
};

export default MyContextProvider;
