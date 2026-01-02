import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location.pathname }}></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
