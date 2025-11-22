import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const userRole = localStorage.getItem("role"); 
  const isAuthenticated = localStorage.getItem("auth") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/user/login" replace />;
  }

  if (role && role !== userRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
