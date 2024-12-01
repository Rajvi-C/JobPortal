import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedType }) => {
  const { isLoggedIn, userType } = useSelector((state) => state.user);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (userType !== allowedType) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
