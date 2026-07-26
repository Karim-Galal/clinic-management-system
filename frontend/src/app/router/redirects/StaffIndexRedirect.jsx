import { Navigate } from "react-router-dom";
import useAuthStore from "@/features/auth/store/authStore";

function StaffIndexRedirect() {

    const { isAuthenticated } = useAuthStore();

    return (
        <Navigate
            to={isAuthenticated ? "/staff/dashboard" : "/staff/login"}
            replace
        />
    );
}

export default StaffIndexRedirect;