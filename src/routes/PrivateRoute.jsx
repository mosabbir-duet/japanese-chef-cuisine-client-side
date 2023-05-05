import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loading, click } = useContext(AuthContext);

  const location = useLocation();

  //   console.log(user);
  if (loading) {
    return <progress className="w-52 fill-yellow-500"></progress>;
  }

  if (user && click) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
