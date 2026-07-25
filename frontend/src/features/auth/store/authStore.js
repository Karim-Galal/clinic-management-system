
import { create } from "zustand";

import authService from "../services/authService";

const useAuthStore = create((set, get) => {

    const handleError = (error) => {

        let message = null;
        let errors = {};

        // when offline 
        if (!navigator.onLine) {

            message = "offline";

        }

        // Backend is not running / unreachable
        else if (!error.response) {

            message = "server_unreachable";

        }

        // Validation errors
        // else if (error.response.status === 422) {

        //     errors = error.response.data.errors ?? {};

        // }
        else if (error.response.status === 422) {

            if (
                error.response.data.message ===
                "These credentials do not match our records."
            ) {
                message = "invalid_credentials";
                errors = {};
            } else {
                errors = error.response.data.errors ?? {};
            }

        }

        // Invalid credentials
        else if (error.response.status === 401) {

            message = "invalid_credentials";

        }

        // Any other server error
        else {

            message = "server_error";

        }

        return {

            loading: false,

            user: null,

            isAuthenticated: false,

            errors,

            message,

            messageType: "danger",

        };

    };

    return {

        user: null,

        isAuthenticated: false,

        loading: false,

        errors: {},

        message: null,

        messageType: null,

        setLoading: (loading) => set({ loading }),

        clearErrors: () =>
            set({
                errors: {},
                message: null,
                messageType: null,
            }),

        // ======= Fetch Authenticated User =====
        fetchUser: async () => {

            set({
                loading: true,
                errors: {},
                message: null,
                messageType: null,
            });

            try {

                const response = await authService.getUser();

                set({

                    user: response.data,

                    isAuthenticated: true,

                    loading: false,

                    errors: {},

                    message: null,

                    messageType: null,

                });

                return response.data;

            } catch (error) {

                set(handleError(error));

                return null;

            }

        },

        // ====== Login ======
        login: async (credentials) => {

            set({

                loading: true,

                errors: {},

                message: null,

                messageType: null,

            });

            try {

                await authService.login(credentials);

                await get().fetchUser();

                return true;

            } catch (error) {

                set(handleError(error));

                return false;

            }

        },

        // ===== Logout ======
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

                    message: null,

                    messageType: null,

                });

            }

        },

    };

});

export default useAuthStore;

