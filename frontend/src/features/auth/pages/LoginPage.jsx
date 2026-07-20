import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";

import loginSchema from "../validation/loginSchema";

import useAuthStore from "../store/authStore";
import { useEffect } from "react";

function LoginPage() {

    const navigate = useNavigate();

    const {
        login,
        loading,
        errors,
        user,
    } = useAuthStore();
    

    useEffect(() => {
        console.log('-----------')
        console.log(user);
    }, [user]);


    const {
        register,
        handleSubmit,
        formState: {
            errors: formErrors,
        },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {

        const success = await login(data);

        if (success) {
            navigate("/dashboard");
        }

        

    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <div>

                <label>Email</label>

                <input
                    type="email"
                    {...register("email")}
                />

                <p>{formErrors.email?.message}</p>

                <p>{errors.email?.[0]}</p>

            </div>

            <div>

                <label>Password</label>

                <input
                    type="password"
                    {...register("password")}
                />

                <p>{formErrors.password?.message}</p>

                <p>{errors.password?.[0]}</p>

            </div>

            <button
                type="submit"
                disabled={loading}
            >
                {loading ? "Loading..." : "Login"}
            </button>

        </form>

    );

}

export default LoginPage;