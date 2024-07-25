import { PropsWithChildren, useContext } from "react";
import { MyProvider } from "../context/MyContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useContext(MyProvider);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
