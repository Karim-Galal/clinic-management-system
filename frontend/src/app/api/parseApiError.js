import { API_STATUS } from "./apiStatus";

export default function parseApiError(error) {

    if (import.meta.env.DEV) {
        console.group(" API Error");
        console.error(error);
        console.groupEnd();
    }

    // User is offline
    if (!navigator.onLine) {
        return {
            status: API_STATUS.OFFLINE,
            message: "offline",
            errors: {},
        };
    }

    // Backend unreachable
    if (!error.response) {
          console.log("SERVER UNREACHABLE");

        return {
            status: API_STATUS.SERVER,
            message: "server_unreachable",
            errors: {},
        };
    }

    switch (error.response.status) {

        case 422:
            return {
                status: API_STATUS.VALIDATION,
                message: null,
                errors: error.response.data.errors ?? {},
            };

        case 401:
            return {
                status: API_STATUS.UNAUTHORIZED,
                message: "unauthorized",
                errors: {},
            };

        case 403:
            return {
                status: API_STATUS.FORBIDDEN,
                message: "forbidden",
                errors: {},
            };

        case 404:
            return {
                status: API_STATUS.NOT_FOUND,
                message: "not_found",
                errors: {},
            };

        default:
            return {
                status: API_STATUS.SERVER,
                message: "server_error",
                errors: {},
            };
    }
}