import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <ProgressBar completed={100}></ProgressBar>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={{ from: location.pathname }} to="/login" replace />;
};

export default PrivateRoute;
