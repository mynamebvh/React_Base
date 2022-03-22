import { Navigate } from "react-router-dom";

// configs
import { PATH_NAME } from "configs";

// services
import authService from "services/authService";

const AuthGuard = ({ children }) => {
  const isAuth = authService.getAccessToken();

  if (!isAuth) return <Navigate to={PATH_NAME.LOGIN} />;

  return <>{children}</>;
};

export default AuthGuard;
