import api from "@/app/api/axios";

const authService = {
    async getCsrfCookie() {
        console.log("Getting CSRF cookie...")
        // return api.get("/sanctum/csrf-cookie");
        const response = await api.get("/sanctum/csrf-cookie");
        console.log("CSRF cookie received");

        return response;
    },

    async login(data) {
        console.log("Login started");

        await this.getCsrfCookie();

        console.log("Sending login request");


        return api.post("/login", data);

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