import api from "@/app/api/axios";

const authService = {
    async getCsrfCookie() {
      
        // return api.get("/sanctum/csrf-cookie");

        const response = await api.get("/sanctum/csrf-cookie");

        return response;
    },


    async login(data) {

        await this.getCsrfCookie();

        const response = await api.post("/login", data);

        return response;
    },

    async getUser() {
        return api.get("/api/user");
    },

    async logout() {
        return api.post("/logout");
    },

    async register(data) {
        await this.getCsrfCookie();

        return api.post("/register", data);
    },
};

export default authService;