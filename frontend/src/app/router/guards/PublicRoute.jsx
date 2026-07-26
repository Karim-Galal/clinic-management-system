import { Navigate, Outlet } from "react-router-dom";

import useAuthStore from "@/features/auth/store/authStore";

function PublicRoute() {

    const {
        initialized,
        isAuthenticated,
    } = useAuthStore();

    if (!initialized) {
        return null;
    }

    if (isAuthenticated) {
        return <Navigate to="/staff/dashboard" replace />;
    }

    return <Outlet />;
}

export default PublicRoute;