import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

import useAuthStore from "../store/authStore";
import { loginSchema } from "../validation/loginSchema";

import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import Card from "@/shared/components/Card";
import Alert from "@/shared/components/Alert";



function LoginPage() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const {
        login,
        loading,
        errors,
        message,
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

        if (success) {
            navigate("/dashboard");
        }
    };

    const { i18n } = useTranslation();

    return (
      <>
          {/* ====== */}
          <div className="flex justify-end gap-2 mb-4">
            <button
                type="button"
                onClick={() => i18n.changeLanguage("en")}
            >
                EN
            </button>

            <button
                type="button"
                onClick={() => i18n.changeLanguage("ar")}
            >
                AR
            </button>
        </div>
          {/* ====== */}
        <main className="container flex min-h-dvh items-center justify-center">
          

            <Card className="w-full max-w-md md:p-3 p-6 ">

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

                    {message && (
                        <Alert>
                            {message}
                        </Alert>
                    )}

                    <Input
                        label={t("auth:email")}
                        type="email"
                        placeholder={t("auth:email_placeholder")}
                        error={
                            formErrors.email?.message ||
                            errors.email?.[0]
                        }
                        {...register("email")}
                    />

                    <Input
                        label={t("auth:password")}
                        type="password"
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
                        loadingText={t("auth:signing_in")}
                        className="w-full"
                    >
                        {t("auth:login")}
                    </Button>

                </form>

            </Card>

        </main>
      </>
    );
}

export default LoginPage;