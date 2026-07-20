import { create } from "zustand";

import authService from "../services/authService";

const useAuthStore = create((set, get) => ({

    user: null,

    isAuthenticated: false,

    loading: false,

    errors: {},

    setLoading: (loading) => set({ loading }),

    clearErrors: () => set({ errors: {} }),

    // Authentication

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
                errors: {},
            });

            return response.data;

        } catch (error) {

            set({
                user: null,
                isAuthenticated: false,
                loading: false,
                errors: error.response?.data?.errors ?? {},
            });

            return null;
        }
    },

    login: async (credentials) => {

        set({
            loading: true,
            errors: {},
        });

        try {

            await authService.login(credentials);

            await get().fetchUser();

            return true;

        } catch (error) {

            set({
                user: null,
                isAuthenticated: false,
                loading: false,
                errors: error.response?.data?.errors ?? {},
            });

            return false;
        }
    },

    logout: async () => {

        set({
            loading: true,
        });

        try {

            await authService.logout();

        } finally {

            set({
                user: null,
                isAuthenticated: false,
                loading: false,
                errors: {},
            });
        }
    },

}));

export default useAuthStore;