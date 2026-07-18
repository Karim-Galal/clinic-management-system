import api from "@/app/api/axios";

const authService = {

    async getCsrfCookie() {
        return api.get("/sanctum/csrf-cookie");
    },

    async getUser() {
        return api.get("/api/user");
    },

    async login(data) {},

    async logout() {},

    async register(data) {},
};

export default authService;