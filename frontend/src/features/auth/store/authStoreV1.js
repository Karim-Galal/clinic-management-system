import authService from "../services/authService";

import { create } from "zustand";

const useAuthStore = create((set) => ({

    user: null,

    isAuthenticated: false,

    loading: false,

    errors: {},

    setLoading: (loading) => set({ loading }),

    clearErrors: () => set({ errors: {} }),
    // fetches user data after login 
    fetchUser: async () => {
    
        set({ 
          loading: true,
            errors: {},
          });

        try {
            const response = await authService.getUser();

            set({
                user: response.data,
                isAuthenticated: true,
                loading: false,
                errors: null,
            });
        } catch (error) {
            set({
                user: null,
                isAuthenticated: false,
                loading: false,
                // errors: error,
                errors: error.response?.data?.errors ?? {},
            });
        }
    },
    
    


}));

export default useAuthStore;
