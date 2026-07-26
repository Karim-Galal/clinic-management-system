import { useEffect } from "react";

import useAuthStore from "@/features/auth/store/authStore";

function AuthBootstrap({ children }) {

    const fetchUser = useAuthStore((state) => state.fetchUser);

    const initialized = useAuthStore((state) => state.initialized);

    useEffect(() => {

      fetchUser();

    }, []);

    if (!initialized) {
        return null;
    }

    return children;
}

export default AuthBootstrap;