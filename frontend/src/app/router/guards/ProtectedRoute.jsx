import { Navigate, Outlet } from "react-router-dom";

import useAuthStore from "@/features/auth/store/authStore";

function ProtectedRoute() {

    const {
        initialized,
        isAuthenticated,
    } = useAuthStore();

    if (!initialized) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/staff/login" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;