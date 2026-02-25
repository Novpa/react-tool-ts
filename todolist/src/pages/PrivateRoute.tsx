import { Navigate } from "react-router-dom";
import useUserData from "../store/useUserData";
import type { PropsWithChildren } from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuthenticated = useUserData((state) => state.isAuthenticated);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; //komponen <Navigate /> di React Router (v6+) harus di-return di dalam fungsi komponen React agar pengalihan (redirect) berjalan.
  }

  return children;
}

export default PrivateRoute;
