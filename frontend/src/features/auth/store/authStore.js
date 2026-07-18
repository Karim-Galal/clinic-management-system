import authService from "../services/authService";

import { create } from "zustand";

const useAuthStore = create((set) => ({

    user: null,

    isAuthenticated: false,

    loading: false,

    errors: null,

    setLoading: (loading) => set({ loading }),

    clearErrors: () => set({ errors: null }),

    fetchUser: async () => {
      
        set({ loading: true });

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
            });
        }
    },

}));

export default useAuthStore;
