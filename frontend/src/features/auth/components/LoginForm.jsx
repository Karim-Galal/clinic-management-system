import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import useAuthStore from "../store/authStore";
import { loginSchema } from "../validation/loginSchema";

import {
    HiOutlineEnvelope,
    HiOutlineLockClosed,
    HiOutlineEye,
    HiOutlineEyeSlash,
    // HiOutlineBuildingOffice2,
} from "react-icons/hi2";

import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Card from "@/shared/components/Card";
import Alert from "@/shared/components/Alert";




function LoginForm() {

    const navigate = useNavigate();

    const { t } = useTranslation();

    const {
        login,
        loading,
        errors,
        message,
        messageType,
        clearErrors,
    } = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm({
        resolver: zodResolver(loginSchema(t)),
    });

    const onSubmit = async (data) => {


        clearErrors();


        const success = await login(data);


        console.log(success);

        if (success) {
            navigate("/dashboard");
        }
    };


    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
      <>
        <Card className="w-full max-w-md p-3 md:p-6 ">

            <div className="space-y-2 text-center">

                <h1 className="heading-2">
                    {t("auth:welcome_back")}
                </h1>

                <p className="body-sm text-muted-foreground">
                    {t("auth:login_description")}
                </p>

            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
            >

                {
                    message && (
                        <Alert variant={messageType}>
                            {t(`errors:${message}`)}
                        </Alert>
                    )
                }

                <Input
                    label={t("auth:email")}
                    type="email"
                    leftIcon={<HiOutlineEnvelope />}
                    placeholder={t("auth:email_placeholder")}
                    error={
                        formErrors.email?.message ||
                        errors.email?.[0]
                    }
                    {...register("email")}
                />

                <Input
                    label={t("auth:password")}
                    type={showPassword ? "text" : "password"}
                    leftIcon={<HiOutlineLockClosed />}
                    rightIcon={
                        showPassword
                            ? <HiOutlineEyeSlash/>
                            : <HiOutlineEye/>
                    }
                    onRightIconClick={togglePassword}
                    placeholder={t("auth:password_placeholder")}
                    error={
                        formErrors.password?.message ||
                        errors.password?.[0]
                    }
                    {...register("password")}
                />

                <Button
                    type="submit"
                    loading={loading}
                    loadingText={ t("auth:signing_in")}
                    className="w-full"
                >

                    {t("auth:login")}
                </Button>

            </form>

        </Card>

      </>
    );
}

export default LoginForm;