import { Navigate } from "react-router-dom";
import { isLoggedIn, getRole } from "../../utils/auth";

function PrivateRoutes({ children, role }) {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  const userRole = getRole();

  if (role && userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoutes;
