import { useEffect } from "react";
import FullScreenLoader from "@/shared/components/FullScreenLoader";

import useAuthStore from "@/features/auth/store/authStore";

function AuthBootstrap({ children }) {

    const fetchUser = useAuthStore((state) => state.fetchUser);

    const initialized = useAuthStore((state) => state.initialized);

    useEffect(() => {

      fetchUser();

    }, []);

    if (!initialized) {
        // return null;
        return <FullScreenLoader />;
    }

    return children;
}

export default AuthBootstrap;