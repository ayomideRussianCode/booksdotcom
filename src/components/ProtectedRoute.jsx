import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isVerified = localStorage.getItem("isVerified") === "true";
  if (!isVerified) {
    return <Navigate to="/resendverification" />;
  }
  return children;
};

export default ProtectedRoute;
