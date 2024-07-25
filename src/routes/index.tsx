import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import PrivateRoute from "./private";
import Home from "../pages/home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
